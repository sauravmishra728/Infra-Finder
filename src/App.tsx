import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { 
  FileCategory, 
  FileItem, 
  SearchFilters, 
  SearchResult, 
  SearchHistoryItem, 
  SavedSearch, 
  SortByField, 
  ViewMode, 
  IndexedLocation,
  ContextMenuState
} from './types';
import { INITIAL_DRIVES, INITIAL_INDEXED_LOCATIONS, EXCLUDED_LOCATIONS, SAMPLE_FILES } from './data/sampleDataset';
import { FastSearchEngine } from './services/searchEngine';
import { pickAndIndexLocalDirectory } from './services/localFileSystem';
import { TitleBar } from './components/TitleBar';
import { AddressToolbar } from './components/AddressToolbar';
import { SearchBar } from './components/SearchBar';
import { FilterBar } from './components/FilterBar';
import { Sidebar } from './components/Sidebar';
import { FileBrowser } from './components/FileBrowser';
import { PreviewPane } from './components/PreviewPane';
import { ContextMenu } from './components/ContextMenu';
import { PropertiesModal } from './components/PropertiesModal';
import { SaveSearchModal } from './components/SaveSearchModal';
import { SettingsModal } from './components/SettingsModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { StatusBar } from './components/StatusBar';

const DEFAULT_FILTERS: SearchFilters = {
  query: '',
  category: 'all',
  dateRange: 'any',
  dateTarget: 'modified',
  sortBy: 'relevance',
  sortDirection: 'asc',
};

const SEED_SAVED_SEARCHES: SavedSearch[] = [
  {
    id: 'saved-1',
    name: 'Monthly IPCs',
    query: 'IPC',
    category: 'excel',
    dateRange: '1year',
    dateTarget: 'modified',
    createdAt: '2026-09-01T10:00:00Z',
  },
  {
    id: 'saved-2',
    name: 'EOT Correspondence',
    query: 'Extension of Time',
    category: 'pdf',
    dateRange: 'any',
    dateTarget: 'modified',
    createdAt: '2026-09-05T12:00:00Z',
  },
  {
    id: 'saved-3',
    name: 'NCR Reports',
    query: 'NCR',
    category: 'pdf',
    dateRange: 'any',
    dateTarget: 'modified',
    createdAt: '2026-09-10T14:00:00Z',
  },
  {
    id: 'saved-4',
    name: 'MoRTH & IRC Specs',
    query: 'Specifications',
    category: 'pdf',
    dateRange: 'any',
    dateTarget: 'modified',
    createdAt: '2026-09-15T09:00:00Z',
  },
  {
    id: 'saved-5',
    name: 'Plan & Profile CAD',
    query: 'Plan Profile',
    category: 'cad',
    dateRange: 'any',
    dateTarget: 'modified',
    createdAt: '2026-09-18T16:00:00Z',
  },
];

const SEED_SEARCH_HISTORY: SearchHistoryItem[] = [
  { id: 'hist-1', query: 'IPC', timestamp: Date.now() - 3600000 },
  { id: 'hist-2', query: 'Extension of Time', timestamp: Date.now() - 7200000 },
  { id: 'hist-3', query: 'MPR September 2026', timestamp: Date.now() - 14400000 },
  { id: 'hist-4', query: 'Method Statement', timestamp: Date.now() - 28800000 },
  { id: 'hist-5', query: 'NCR', timestamp: Date.now() - 86400000 },
];

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Files & Index
  const [files, setFiles] = useState<FileItem[]>(() => {
    const cached = localStorage.getItem('infrafinder_custom_files');
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        return [...SAMPLE_FILES, ...parsed];
      } catch {
        return SAMPLE_FILES;
      }
    }
    return SAMPLE_FILES;
  });

  const searchEngine = useMemo(() => new FastSearchEngine(files), [files]);

  // Navigation & Path History
  const [currentPath, setCurrentPath] = useState<string>('D:\\NH-48_Six_Laning_Project');
  const [history, setHistory] = useState<string[]>(['D:\\NH-48_Six_Laning_Project']);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Search & Filters
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS);
  const [viewMode, setViewMode] = useState<ViewMode>('details');
  const [showPreviewPane, setShowPreviewPane] = useState<boolean>(true);

  // Selection
  const [selectedItem, setSelectedItem] = useState<FileItem | null>(null);

  // History & Saved Searches
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>(() => {
    const saved = localStorage.getItem('infrafinder_search_history');
    return saved ? JSON.parse(saved) : SEED_SEARCH_HISTORY;
  });

  const [savedSearches, setSavedSearches] = useState<SavedSearch[]>(() => {
    const saved = localStorage.getItem('infrafinder_saved_searches');
    return saved ? JSON.parse(saved) : SEED_SAVED_SEARCHES;
  });

  // Indexed & Excluded Locations
  const [indexedLocations, setIndexedLocations] = useState<IndexedLocation[]>(INITIAL_INDEXED_LOCATIONS);
  const [excludedLocations, setExcludedLocations] = useState<string[]>(EXCLUDED_LOCATIONS);

  // Index status simulation
  const [isIndexing, setIsIndexing] = useState(false);
  const [isIndexingPaused, setIsIndexingPaused] = useState(false);
  const [indexedCount, setIndexedCount] = useState(14820);
  const totalToScan = 14820;
  const [contentSearchEnabled, setContentSearchEnabled] = useState(true);

  // Context Menu & Modals
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);
  const [propertiesFile, setPropertiesFile] = useState<FileItem | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showSaveSearch, setShowSaveSearch] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);

  // Hidden folder input for browser fallback
  const folderInputRef = useRef<HTMLInputElement>(null);

  // Sync dark mode class with root html
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Save history & saved searches to localStorage
  useEffect(() => {
    localStorage.setItem('infrafinder_search_history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    localStorage.setItem('infrafinder_saved_searches', JSON.stringify(savedSearches));
  }, [savedSearches]);

  // Navigate path
  const navigateTo = useCallback((newPath: string) => {
    const cleanPath = newPath.replace(/[\\/]+$/, '') || 'D:';
    setCurrentPath(cleanPath);

    // Update history stack
    setHistory((prev) => {
      const next = prev.slice(0, historyIndex + 1);
      next.push(cleanPath);
      return next;
    });
    setHistoryIndex((prev) => prev + 1);

    // If no search query, set selection to null
    setSelectedItem(null);
  }, [historyIndex]);

  const handleGoBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCurrentPath(history[historyIndex - 1]);
      setSelectedItem(null);
    }
  };

  const handleGoForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setCurrentPath(history[historyIndex + 1]);
      setSelectedItem(null);
    }
  };

  const handleGoUp = () => {
    if (['C:', 'D:', 'E:'].includes(currentPath)) return;
    const parts = currentPath.split(/[\\/]/).filter(Boolean);
    if (parts.length <= 1) {
      navigateTo(parts[0] || 'D:');
    } else {
      parts.pop();
      navigateTo(parts.join('\\'));
    }
  };

  const handleRefresh = () => {
    // Trigger lightweight re-indexing visual tick
    setIsIndexing(true);
    setTimeout(() => {
      setIsIndexing(false);
    }, 400);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Avoid shortcuts when typing in an input
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

      if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        handleGoBack();
      } else if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        handleGoForward();
      } else if (e.key === 'Backspace' && !['INPUT', 'TEXTAREA'].includes(target.tagName)) {
        e.preventDefault();
        handleGoUp();
      } else if (e.key === 'F5') {
        e.preventDefault();
        handleRefresh();
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [historyIndex, history, currentPath]);

  // Execute Search & Filtering via FastSearchEngine
  const hasQuery = Boolean(filters.query.trim());

  // Search Results
  const { results: searchResults, durationMs: searchDurationMs } = useMemo(() => {
    if (hasQuery) {
      // Global search across indexed items
      return searchEngine.search({
        ...filters,
        // When searching, default to relevance unless user specified
        sortBy: filters.sortBy === 'name' ? 'relevance' : filters.sortBy,
      });
    }

    // Normal folder browsing: fetch children of current path
    const folderItems = searchEngine.getFolderChildren(currentPath);
    const subEngine = new FastSearchEngine(folderItems);
    return subEngine.search({
      ...filters,
      sortBy: filters.sortBy === 'relevance' ? 'name' : filters.sortBy,
    });
  }, [searchEngine, filters, currentPath, hasQuery]);

  // Compute category counts for current view
  const categoryCounts = useMemo(() => {
    const allItems = hasQuery ? searchEngine.getAllFiles() : searchEngine.getFolderChildren(currentPath);
    const counts: Record<FileCategory, number> = {
      all: allItems.length,
      pdf: 0,
      excel: 0,
      word: 0,
      ppt: 0,
      cad: 0,
      images: 0,
      other: 0,
      folder: 0,
    };

    for (const item of allItems) {
      if (counts[item.category] !== undefined) {
        counts[item.category]++;
      }
    }
    return counts;
  }, [searchEngine, currentPath, hasQuery]);

  // Search Query Handler with History recording
  const handleSearchChange = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, query }));

    if (query.trim().length > 1) {
      setSearchHistory((prev) => {
        const filtered = prev.filter((h) => h.query.toLowerCase() !== query.trim().toLowerCase());
        return [
          { id: 'hist-' + Date.now(), query: query.trim(), timestamp: Date.now() },
          ...filtered.slice(0, 14),
        ];
      });
    }
  }, []);

  const handleUpdateFilters = (partial: Partial<SearchFilters>) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const handleOpenItem = (item: FileItem) => {
    if (item.isFolder) {
      navigateTo(item.path);
    } else {
      setSelectedItem(item);
      if (!showPreviewPane) setShowPreviewPane(true);
    }
  };

  // Saved Searches
  const handleSaveCurrentSearch = (name: string) => {
    const newSaved: SavedSearch = {
      id: 'saved-' + Date.now(),
      name,
      query: filters.query,
      category: filters.category,
      dateRange: filters.dateRange,
      dateTarget: filters.dateTarget,
      customStartDate: filters.customStartDate,
      customEndDate: filters.customEndDate,
      createdAt: new Date().toISOString(),
    };
    setSavedSearches((prev) => [newSaved, ...prev]);
  };

  const handleApplySavedSearch = (saved: SavedSearch) => {
    setFilters({
      query: saved.query,
      category: saved.category,
      dateRange: saved.dateRange,
      dateTarget: saved.dateTarget,
      customStartDate: saved.customStartDate,
      customEndDate: saved.customEndDate,
      sortBy: 'relevance',
      sortDirection: 'asc',
    });
  };

  const handleDeleteSavedSearch = (id: string) => {
    setSavedSearches((prev) => prev.filter((s) => s.id !== id));
  };

  // Context Menu Actions
  const handleContextMenu = (e: React.MouseEvent, item: FileItem) => {
    e.preventDefault();
    setSelectedItem(item);
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      item,
    });
  };

  const handleOpenContainingFolder = (item: FileItem) => {
    navigateTo(item.parentPath);
  };

  const handleCopyPath = (item: FileItem) => {
    navigator.clipboard.writeText(item.path);
  };

  const handleCopyFile = (item: FileItem) => {
    navigator.clipboard.writeText(item.name);
  };

  const handleRename = (item: FileItem) => {
    const newName = prompt('Enter new filename:', item.name);
    if (newName && newName.trim() && newName !== item.name) {
      setFiles((prev) =>
        prev.map((f) => (f.id === item.id ? { ...f, name: newName.trim() } : f))
      );
    }
  };

  const handleDelete = (item: FileItem) => {
    if (confirm(`Are you sure you want to delete "${item.name}"?`)) {
      setFiles((prev) => prev.filter((f) => f.id !== item.id));
      if (selectedItem?.id === item.id) setSelectedItem(null);
    }
  };

  // Real Local Folder Indexing (Requirement 1 & 7)
  const handleAddLocalFolder = async () => {
    try {
      setIsIndexing(true);
      const res = await pickAndIndexLocalDirectory((count, folder) => {
        setIndexedCount(14820 + count);
      });

      if (res && res.files.length > 0) {
        setFiles((prev) => {
          const next = [...prev, ...res.files];
          // Save imported items to localStorage
          const localOnly = next.filter((f) => f.isLocalImported);
          localStorage.setItem('infrafinder_custom_files', JSON.stringify(localOnly));
          return next;
        });

        // Add to indexed locations list
        const newLoc: IndexedLocation = {
          id: 'idx-local-' + Date.now(),
          path: res.folderPath,
          name: `${res.folderName} (Local Drive)`,
          drive: 'Local',
          fileCount: res.files.length,
          isIncluded: true,
        };
        setIndexedLocations((prev) => [...prev, newLoc]);
        navigateTo(res.folderPath);
      }
    } catch (err) {
      console.warn('Folder selection dismissed or failed, triggering standard file input fallback');
      folderInputRef.current?.click();
    } finally {
      setIsIndexing(false);
    }
  };

  // Fallback HTML5 folder input change handler
  const handleFallbackFolderSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList || fileList.length === 0) return;

    const importedFiles: FileItem[] = [];
    const folderName = fileList[0].webkitRelativePath.split('/')[0] || 'Imported_Folder';
    const rootPath = `D:\\LocalImported\\${folderName}`;

    for (let i = 0; i < fileList.length; i++) {
      const f = fileList[i];
      const relPath = f.webkitRelativePath.replace(/\//g, '\\');
      const ext = f.name.includes('.') ? f.name.split('.').pop() || '' : '';
      const category: FileCategory =
        ext === 'pdf' ? 'pdf' :
        ['xlsx', 'xls', 'csv'].includes(ext) ? 'excel' :
        ['docx', 'doc'].includes(ext) ? 'word' :
        ['pptx', 'ppt'].includes(ext) ? 'ppt' :
        ['dwg', 'dxf'].includes(ext) ? 'cad' :
        ['jpg', 'jpeg', 'png'].includes(ext) ? 'images' : 'other';

      importedFiles.push({
        id: 'local-f-' + Math.random().toString(36).substring(2, 9),
        name: f.name,
        extension: ext,
        path: `D:\\LocalImported\\${relPath}`,
        parentPath: `D:\\LocalImported\\${relPath.split('\\').slice(0, -1).join('\\')}`,
        category,
        size: f.size,
        createdDate: new Date(f.lastModified).toISOString(),
        modifiedDate: new Date(f.lastModified).toISOString(),
        isFolder: false,
        isLocalImported: true,
      });
    }

    setFiles((prev) => [...prev, ...importedFiles]);
    navigateTo(rootPath);
  };

  // Calculate total indexed size
  const totalSizeIndexed = useMemo(() => {
    return files.reduce((acc, curr) => acc + (curr.size || 0), 0);
  }, [files]);

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-white dark:bg-[#11151c] text-slate-900 dark:text-slate-100 font-sans">
      {/* Hidden File Picker fallback for older browsers */}
      <input
        ref={folderInputRef}
        type="file"
        // @ts-expect-error - webkitdirectory standard
        webkitdirectory="true"
        multiple
        className="hidden"
        onChange={handleFallbackFolderSelect}
      />

      {/* 1. Windows 11 Title Bar */}
      <TitleBar
        onOpenSettings={() => setShowSettings(true)}
        onOpenArchitecture={() => setShowArchitecture(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        indexStatus={isIndexing ? 'Indexing...' : 'Index Up to Date'}
      />

      {/* 2. Windows Explorer Navigation Toolbar & Address Bar */}
      <AddressToolbar
        currentPath={currentPath}
        onNavigatePath={navigateTo}
        canGoBack={historyIndex > 0}
        canGoForward={historyIndex < history.length - 1}
        canGoUp={!['C:', 'D:', 'E:'].includes(currentPath)}
        onGoBack={handleGoBack}
        onGoForward={handleGoForward}
        onGoUp={handleGoUp}
        onRefresh={handleRefresh}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showPreviewPane={showPreviewPane}
        onTogglePreviewPane={() => setShowPreviewPane(!showPreviewPane)}
      />

      {/* 3. Ultra-Fast Search Bar Header */}
      <div className="bg-[#f0f4f9] dark:bg-[#161a22] border-b border-[#dbe3ed] dark:border-[#283243] px-3 py-2 flex items-center gap-3 shrink-0">
        <SearchBar
          searchQuery={filters.query}
          onSearchChange={handleSearchChange}
          searchDurationMs={searchDurationMs}
          totalResultsCount={searchResults.length}
          searchHistory={searchHistory}
          onSelectHistoryItem={(q) => handleSearchChange(q)}
          onRemoveHistoryItem={(id) => setSearchHistory((prev) => prev.filter((h) => h.id !== id))}
          onClearHistory={() => setSearchHistory([])}
          onSaveCurrentSearch={() => setShowSaveSearch(true)}
        />
      </div>

      {/* 4. One-Click File Filters & Date Bar */}
      <FilterBar
        filters={filters}
        onUpdateFilters={handleUpdateFilters}
        onResetFilters={handleResetFilters}
        onSaveSearchClick={() => setShowSaveSearch(true)}
        categoryCounts={categoryCounts}
      />

      {/* 5. Main Workspace: Sidebar + File List / Grid + Document Preview Pane */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Windows Sidebar */}
        <Sidebar
          drives={INITIAL_DRIVES}
          currentPath={currentPath}
          onNavigatePath={navigateTo}
          indexedLocations={indexedLocations}
          onToggleIndexLocation={(id) =>
            setIndexedLocations((prev) =>
              prev.map((loc) => (loc.id === id ? { ...loc, isIncluded: !loc.isIncluded } : loc))
            )
          }
          savedSearches={savedSearches}
          onApplySavedSearch={handleApplySavedSearch}
          onDeleteSavedSearch={handleDeleteSavedSearch}
          onAddLocalFolder={handleAddLocalFolder}
          isIndexing={isIndexing}
        />

        {/* Center File Browser */}
        <FileBrowser
          searchResults={searchResults}
          selectedItem={selectedItem}
          onSelectItem={setSelectedItem}
          onOpenItem={handleOpenItem}
          onContextMenu={handleContextMenu}
          searchQuery={filters.query}
          sortBy={filters.sortBy}
          sortDirection={filters.sortDirection}
          onSortChange={(field) => {
            if (filters.sortBy === field) {
              handleUpdateFilters({ sortDirection: filters.sortDirection === 'asc' ? 'desc' : 'asc' });
            } else {
              handleUpdateFilters({ sortBy: field, sortDirection: 'asc' });
            }
          }}
          viewMode={viewMode}
          currentPath={currentPath}
        />

        {/* Right Preview Pane (collapsible) */}
        {showPreviewPane && (
          <PreviewPane
            file={selectedItem}
            onClose={() => setShowPreviewPane(false)}
            onOpenItem={handleOpenItem}
          />
        )}
      </div>

      {/* 6. Bottom Status Bar */}
      <StatusBar
        totalItemsCount={files.length}
        filteredItemsCount={searchResults.length}
        selectedItemSize={selectedItem?.size}
        totalSizeIndexed={totalSizeIndexed}
        isIndexing={isIndexing}
        indexedCount={indexedCount}
        totalToScan={totalToScan}
        searchDurationMs={searchDurationMs}
        hasQuery={hasQuery}
      />

      {/* Context Menu */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          item={contextMenu.item}
          onClose={() => setContextMenu(null)}
          onOpen={handleOpenItem}
          onOpenContainingFolder={handleOpenContainingFolder}
          onCopyPath={handleCopyPath}
          onCopyFile={handleCopyFile}
          onRename={handleRename}
          onDelete={handleDelete}
          onProperties={(item) => setPropertiesFile(item)}
        />
      )}

      {/* Properties Dialog */}
      {propertiesFile && (
        <PropertiesModal
          file={propertiesFile}
          onClose={() => setPropertiesFile(null)}
        />
      )}

      {/* Save Search Modal */}
      {showSaveSearch && (
        <SaveSearchModal
          filters={filters}
          onSave={handleSaveCurrentSearch}
          onClose={() => setShowSaveSearch(false)}
        />
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          onClose={() => setShowSettings(false)}
          indexedLocations={indexedLocations}
          excludedLocations={excludedLocations}
          onAddIndexedLocation={handleAddLocalFolder}
          onRemoveIndexedLocation={(id) =>
            setIndexedLocations((prev) => prev.filter((loc) => loc.id !== id))
          }
          onAddExcludedLocation={(path) =>
            setExcludedLocations((prev) => [...prev, path])
          }
          onRemoveExcludedLocation={(path) =>
            setExcludedLocations((prev) => prev.filter((p) => p !== path))
          }
          onRebuildIndex={() => {
            setIsIndexing(true);
            setTimeout(() => {
              setIsIndexing(false);
            }, 800);
          }}
          isIndexingPaused={isIndexingPaused}
          onTogglePauseIndexing={() => setIsIndexingPaused(!isIndexingPaused)}
          contentSearchEnabled={contentSearchEnabled}
          onToggleContentSearch={() => setContentSearchEnabled(!contentSearchEnabled)}
          defaultSort={filters.sortBy}
          onDefaultSortChange={(sort) => handleUpdateFilters({ sortBy: sort })}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        />
      )}

      {/* Architecture Tech Stack Blueprint Modal */}
      {showArchitecture && (
        <ArchitectureModal onClose={() => setShowArchitecture(false)} />
      )}
    </div>
  );
}
