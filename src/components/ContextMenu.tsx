import React, { useEffect, useRef } from 'react';
import { 
  FolderOpen, 
  ExternalLink, 
  Copy, 
  Edit3, 
  Trash2, 
  Info, 
  Share2, 
  Files,
  FolderSymlink
} from 'lucide-react';
import { FileItem } from '../types';

interface ContextMenuProps {
  x: number;
  y: number;
  item: FileItem;
  onClose: () => void;
  onOpen: (item: FileItem) => void;
  onOpenContainingFolder: (item: FileItem) => void;
  onCopyPath: (item: FileItem) => void;
  onCopyFile: (item: FileItem) => void;
  onRename: (item: FileItem) => void;
  onDelete: (item: FileItem) => void;
  onProperties: (item: FileItem) => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  item,
  onClose,
  onOpen,
  onOpenContainingFolder,
  onCopyPath,
  onCopyFile,
  onRename,
  onDelete,
  onProperties,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Adjust coordinates if menu overflows window
  const safeX = Math.min(x, window.innerWidth - 220);
  const safeY = Math.min(y, window.innerHeight - 300);

  return (
    <div
      ref={menuRef}
      style={{ left: `${safeX}px`, top: `${safeY}px` }}
      className="fixed z-50 w-52 bg-white dark:bg-[#1e2430] border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl py-1 text-xs text-slate-700 dark:text-slate-200 select-none animate-in fade-in zoom-in-95 duration-75"
    >
      <button
        onClick={() => {
          onOpen(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-900 dark:text-slate-100 font-medium"
      >
        <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        <span>Open</span>
      </button>

      <button
        onClick={() => {
          onOpenContainingFolder(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <FolderSymlink className="w-3.5 h-3.5 text-amber-500" />
        <span>Open Containing Folder</span>
      </button>

      <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

      <button
        onClick={() => {
          onCopyPath(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Copy className="w-3.5 h-3.5 text-slate-500" />
        <span>Copy Path</span>
      </button>

      <button
        onClick={() => {
          onCopyFile(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Files className="w-3.5 h-3.5 text-slate-500" />
        <span>Copy</span>
      </button>

      <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

      <button
        onClick={() => {
          onRename(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Edit3 className="w-3.5 h-3.5 text-slate-500" />
        <span>Rename</span>
      </button>

      <button
        onClick={() => {
          onDelete(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 dark:text-red-400"
      >
        <Trash2 className="w-3.5 h-3.5" />
        <span>Delete</span>
      </button>

      <div className="border-t border-slate-100 dark:border-slate-800 my-1"></div>

      <button
        onClick={() => {
          onProperties(item);
          onClose();
        }}
        className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Info className="w-3.5 h-3.5 text-slate-500" />
        <span>Properties</span>
      </button>
    </div>
  );
};
