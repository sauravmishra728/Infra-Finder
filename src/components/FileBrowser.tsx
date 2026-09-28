import React, { useState } from 'react';
import { 
  FileText, 
  FileSpreadsheet, 
  FileCode, 
  FileImage, 
  File, 
  Folder, 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  ExternalLink,
  Presentation,
  MapPin,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { FileItem, SearchResult, SortByField, SortDirection, ViewMode } from '../types';
import { formatDate, formatFileSize } from '../services/localFileSystem';

interface FileBrowserProps {
  searchResults: SearchResult[];
  selectedItem: FileItem | null;
  onSelectItem: (item: FileItem) => void;
  onOpenItem: (item: FileItem) => void;
  onContextMenu: (e: React.MouseEvent, item: FileItem) => void;
  searchQuery: string;
  sortBy: SortByField;
  sortDirection: SortDirection;
  onSortChange: (field: SortByField) => void;
  viewMode: ViewMode;
  currentPath: string;
}

export const FileBrowser: React.FC<FileBrowserProps> = ({
  searchResults,
  selectedItem,
  onSelectItem,
  onOpenItem,
  onContextMenu,
  searchQuery,
  sortBy,
  sortDirection,
  onSortChange,
  viewMode,
  currentPath,
}) => {
  // Helper to get specialized file icons
  const getFileIcon = (file: FileItem) => {
    if (file.isFolder) {
      return <Folder className="w-5 h-5 text-amber-500 fill-amber-500/20 shrink-0" />;
    }
    const ext = file.extension.toLowerCase();
    if (ext === 'pdf') {
      return <FileText className="w-5 h-5 text-red-500 shrink-0" />;
    }
    if (['xls', 'xlsx', 'csv'].includes(ext)) {
      return <FileSpreadsheet className="w-5 h-5 text-emerald-600 shrink-0" />;
    }
    if (['doc', 'docx'].includes(ext)) {
      return <FileText className="w-5 h-5 text-blue-600 shrink-0" />;
    }
    if (['ppt', 'pptx'].includes(ext)) {
      return <Presentation className="w-5 h-5 text-orange-500 shrink-0" />;
    }
    if (['dwg', 'dxf'].includes(ext)) {
      return <FileCode className="w-5 h-5 text-cyan-600 shrink-0" />;
    }
    if (['jpg', 'jpeg', 'png', 'bmp', 'tiff'].includes(ext)) {
      return <FileImage className="w-5 h-5 text-purple-600 shrink-0" />;
    }
    return <File className="w-5 h-5 text-slate-500 shrink-0" />;
  };

  // Helper to highlight search term matches inside string
  const renderHighlighted = (text: string, query: string) => {
    if (!query || !query.trim() || !text) return text;
    const cleanQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${cleanQuery})`, 'gi'));

    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 dark:bg-yellow-800/80 text-slate-900 dark:text-yellow-100 px-0.5 rounded-xs font-semibold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const getSortIcon = (field: SortByField) => {
    if (sortBy !== field) {
      return <ArrowUpDown className="w-3 h-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-blue-600" />
    );
  };

  if (searchResults.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-500 dark:text-slate-400">
        <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
          <FileText className="w-8 h-8 text-slate-400" />
        </div>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">No matching files found</p>
        <p className="text-xs text-slate-400 max-w-sm mt-1">
          {searchQuery
            ? `No indexed files matched "${searchQuery}". Check spelling or clear file type/date filters.`
            : `This folder "${currentPath}" is empty or has no matching items under current filters.`}
        </p>
      </div>
    );
  }

  // 1. Grid / Large Icons View
  if (viewMode === 'icons') {
    return (
      <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 content-start">
        {searchResults.map(({ file, snippet }) => {
          const isSelected = selectedItem?.id === file.id;

          return (
            <div
              key={file.id}
              onClick={() => onSelectItem(file)}
              onDoubleClick={() => onOpenItem(file)}
              onContextMenu={(e) => onContextMenu(e, file)}
              className={`p-3 rounded-lg border text-center flex flex-col items-center cursor-pointer transition-all select-none group relative ${
                isSelected
                  ? 'bg-blue-50 dark:bg-blue-900/40 border-blue-400 dark:border-blue-600 ring-2 ring-blue-500/20 shadow-xs'
                  : 'bg-white dark:bg-[#181d26] border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center mb-2">
                {getFileIcon(file)}
              </div>
              <span className="text-xs font-medium text-slate-800 dark:text-slate-200 line-clamp-2 break-all w-full leading-tight">
                {renderHighlighted(file.name, searchQuery)}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 font-mono font-tabular">
                {file.isFolder ? `${file.itemCount || 0} items` : formatFileSize(file.size)}
              </span>
              {file.category !== 'folder' && (
                <span className="mt-1 px-1.5 py-0.2 rounded text-[9px] font-semibold uppercase bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400">
                  {file.extension || 'file'}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  // 2. Details View with Windows Table Headers & Search Snippets
  return (
    <div className="flex-1 overflow-y-auto flex flex-col bg-white dark:bg-[#181d26]">
      {/* Table Header */}
      <div className="sticky top-0 bg-[#f1f5f9] dark:bg-[#1a212d] border-b border-[#cbd5e1] dark:border-[#2d3748] grid grid-cols-12 px-3 py-1.5 text-[11px] font-semibold text-slate-600 dark:text-slate-400 z-10 select-none">
        <button
          onClick={() => onSortChange('name')}
          className="col-span-5 md:col-span-4 flex items-center gap-1.5 text-left hover:text-slate-900 dark:hover:text-white group"
        >
          <span>Name</span>
          {getSortIcon('name')}
        </button>

        <button
          onClick={() => onSortChange('modified')}
          className="col-span-3 md:col-span-2 flex items-center gap-1.5 text-left hover:text-slate-900 dark:hover:text-white group"
        >
          <span>Date modified</span>
          {getSortIcon('modified')}
        </button>

        <button
          onClick={() => onSortChange('type')}
          className="hidden md:flex col-span-2 items-center gap-1.5 text-left hover:text-slate-900 dark:hover:text-white group"
        >
          <span>Type</span>
          {getSortIcon('type')}
        </button>

        <button
          onClick={() => onSortChange('size')}
          className="col-span-2 md:col-span-1 flex items-center justify-end gap-1.5 text-right hover:text-slate-900 dark:hover:text-white group"
        >
          <span>Size</span>
          {getSortIcon('size')}
        </button>

        <button
          onClick={() => onSortChange('relevance')}
          className="col-span-2 md:col-span-3 flex items-center gap-1.5 text-left hover:text-slate-900 dark:hover:text-white group pl-3"
        >
          <span>Path / Relevance</span>
          {getSortIcon('relevance')}
        </button>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
        {searchResults.map(({ file, snippet, matchType, score }) => {
          const isSelected = selectedItem?.id === file.id;

          return (
            <div
              key={file.id}
              onClick={() => onSelectItem(file)}
              onDoubleClick={() => onOpenItem(file)}
              onContextMenu={(e) => onContextMenu(e, file)}
              className={`grid grid-cols-12 px-3 py-2 items-center text-xs cursor-pointer select-none transition-colors ${
                isSelected
                  ? 'bg-blue-100/80 dark:bg-blue-900/40 text-blue-950 dark:text-blue-100 font-medium'
                  : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-800 dark:text-slate-200'
              }`}
            >
              {/* Name & Icon Column (col 5/4) */}
              <div className="col-span-5 md:col-span-4 flex items-center gap-2.5 min-w-0 pr-2">
                {getFileIcon(file)}
                <div className="truncate">
                  <p className="truncate font-medium text-slate-900 dark:text-slate-100" title={file.name}>
                    {renderHighlighted(file.name, searchQuery)}
                  </p>
                  {/* Highway Document Specific Metadata Tag */}
                  {file.metadata?.Chainage && (
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                      Ch. {file.metadata.Chainage}
                    </span>
                  )}
                </div>
              </div>

              {/* Date Modified (col 3/2) */}
              <div className="col-span-3 md:col-span-2 text-slate-500 dark:text-slate-400 font-mono font-tabular text-[11px]">
                {formatDate(file.modifiedDate)}
              </div>

              {/* Type (col 2) */}
              <div className="hidden md:block col-span-2 text-slate-600 dark:text-slate-400 truncate text-[11px] capitalize">
                {file.isFolder ? 'File folder' : `${file.extension.toUpperCase()} document`}
              </div>

              {/* Size (col 2/1) */}
              <div className="col-span-2 md:col-span-1 text-right text-slate-500 dark:text-slate-400 font-mono font-tabular text-[11px] pr-2">
                {file.isFolder ? '' : formatFileSize(file.size)}
              </div>

              {/* Path & Match Snippet Column (col 2/3) */}
              <div className="col-span-2 md:col-span-3 min-w-0 pl-2">
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono truncate" title={file.path}>
                  {file.parentPath}
                </p>

                {/* Match snippet (Requirement 14: relevant content snippet where available) */}
                {snippet && searchQuery && (
                  <div className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-300 bg-amber-50/80 dark:bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-200/60 dark:border-amber-900/60 line-clamp-1 italic">
                    "{renderHighlighted(snippet, searchQuery)}"
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
