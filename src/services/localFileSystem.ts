import { FileCategory, FileItem } from '../types';

export function getFileCategory(extension: string): FileCategory {
  const ext = extension.toLowerCase().replace(/^\./, '');
  if (ext === 'pdf') return 'pdf';
  if (['xls', 'xlsx', 'xlsm', 'csv', 'ods'].includes(ext)) return 'excel';
  if (['doc', 'docx', 'rtf', 'odt'].includes(ext)) return 'word';
  if (['ppt', 'pptx', 'odp'].includes(ext)) return 'ppt';
  if (['dwg', 'dxf', 'dgn', 'ifc', 'step', 'stp'].includes(ext)) return 'cad';
  if (['jpg', 'jpeg', 'png', 'bmp', 'tiff', 'tif', 'webp', 'svg'].includes(ext)) return 'images';
  return 'other';
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function formatDate(isoString: string): string {
  if (!isoString) return '--';
  try {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  } catch {
    return isoString;
  }
}

export function formatDateShort(isoString: string): string {
  if (!isoString) return '--';
  try {
    const d = new Date(isoString);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  } catch {
    return isoString;
  }
}

/**
 * Reads user's local directory using the browser File System Access API
 */
export async function pickAndIndexLocalDirectory(
  onProgress?: (count: number, currentFolder: string) => void
): Promise<{ files: FileItem[]; folderPath: string; folderName: string } | null> {
  // Check if showDirectoryPicker is supported
  if ('showDirectoryPicker' in window) {
    try {
      // @ts-expect-error - standard browser API
      const dirHandle = await window.showDirectoryPicker({
        mode: 'read',
      });

      const rootName = dirHandle.name;
      const virtualDrive = 'D:\\LocalImported\\' + rootName;
      const discoveredFiles: FileItem[] = [];

      let count = 0;

      async function scanDir(
        handle: any,
        currentPath: string,
        parentPath: string
      ) {
        // Add folder record
        const folderId = 'local-dir-' + Math.random().toString(36).substring(2, 9);
        const folderItem: FileItem = {
          id: folderId,
          name: handle.name,
          extension: '',
          path: currentPath,
          parentPath: parentPath,
          category: 'folder',
          size: 0,
          createdDate: new Date().toISOString(),
          modifiedDate: new Date().toISOString(),
          isFolder: true,
          isLocalImported: true,
        };
        discoveredFiles.push(folderItem);

        for await (const entry of handle.values()) {
          count++;
          if (onProgress && count % 5 === 0) {
            onProgress(count, currentPath);
          }

          if (entry.kind === 'file') {
            try {
              const fileData = await entry.getFile();
              const ext = fileData.name.includes('.') ? fileData.name.split('.').pop() || '' : '';
              let textSnippet = '';

              // Read sample text for small text-based files
              if (['txt', 'csv', 'md', 'json', 'log', 'xml'].includes(ext.toLowerCase()) && fileData.size < 500000) {
                try {
                  const text = await fileData.text();
                  textSnippet = text.slice(0, 500);
                } catch {
                  // ignore
                }
              }

              const item: FileItem = {
                id: 'local-file-' + Math.random().toString(36).substring(2, 9),
                name: fileData.name,
                extension: ext,
                path: `${currentPath}\\${fileData.name}`,
                parentPath: currentPath,
                category: getFileCategory(ext),
                size: fileData.size,
                createdDate: new Date(fileData.lastModified).toISOString(),
                modifiedDate: new Date(fileData.lastModified).toISOString(),
                isFolder: false,
                contentFull: textSnippet,
                contentSnippet: textSnippet ? textSnippet.slice(0, 160) : undefined,
                isLocalImported: true,
              };

              discoveredFiles.push(item);
            } catch (err) {
              console.warn('Skipping file due to read error:', err);
            }
          } else if (entry.kind === 'directory') {
            await scanDir(entry, `${currentPath}\\${entry.name}`, currentPath);
          }
        }
      }

      await scanDir(dirHandle, virtualDrive, 'D:\\LocalImported');

      return {
        files: discoveredFiles,
        folderPath: virtualDrive,
        folderName: rootName,
      };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        return null; // User cancelled
      }
      console.error('Directory read failed', err);
      throw err;
    }
  }

  return null;
}
