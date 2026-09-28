import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, Trash2, ArrowUpRight, Zap } from 'lucide-react';
import { SearchHistoryItem } from '../types';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchDurationMs: number;
  totalResultsCount: number;
  searchHistory: SearchHistoryItem[];
  onSelectHistoryItem: (query: string) => void;
  onRemoveHistoryItem: (id: string) => void;
  onClearHistory: () => void;
  onSaveCurrentSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  searchDurationMs,
  totalResultsCount,
  searchHistory,
  onSelectHistoryItem,
  onRemoveHistoryItem,
  onClearHistory,
}) => {
  const [inputValue, setInputValue] = useState(searchQuery);
  const [isOpenHistory, setIsOpenHistory] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync external changes (e.g. from history click or clear filters)
  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  // Intelligent debounce: 120ms
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue !== searchQuery) {
        onSearchChange(inputValue);
      }
    }, 120);

    return () => clearTimeout(timer);
  }, [inputValue, searchQuery, onSearchChange]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpenHistory(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut Ctrl + F to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
        setIsOpenHistory(true);
      } else if (e.key === 'Escape' && isOpenHistory) {
        setIsOpenHistory(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpenHistory]);

  const handleClear = () => {
    setInputValue('');
    onSearchChange('');
    inputRef.current?.focus();
  };

  const handleSelectRecent = (q: string) => {
    setInputValue(q);
    onSearchChange(q);
    setIsOpenHistory(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="relative flex items-center">
        <Search className="w-4 h-4 text-blue-600 dark:text-blue-400 absolute left-3 pointer-events-none" />
        
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            if (!isOpenHistory) setIsOpenHistory(true);
          }}
          onFocus={() => setIsOpenHistory(true)}
          placeholder="Search files, folders, documents and content... (e.g. IPC, Extension of Time, MoRTH, NCR)"
          className="w-full h-10 pl-9 pr-28 text-sm bg-white dark:bg-[#181d26] text-slate-900 dark:text-slate-100 placeholder-slate-400 border border-[#c8d4e4] dark:border-[#2f3b4e] rounded-md shadow-xs focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
        />

        {/* Right tools inside search input: Clear button & Ultra-fast benchmark pill */}
        <div className="absolute right-2.5 flex items-center gap-1.5">
          {inputValue && (
            <button
              onClick={handleClear}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Clear search (Esc)"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}

          {inputValue.trim() && (
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-tabular">
              <Zap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span>{searchDurationMs}ms</span>
            </div>
          )}
        </div>
      </div>

      {/* Recent Searches Dropdown */}
      {isOpenHistory && searchHistory.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#1e2430] border border-slate-200 dark:border-slate-700 rounded-lg shadow-xl z-50 overflow-hidden text-xs">
          <div className="flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-[#171c26] border-b border-slate-100 dark:border-slate-800 text-slate-500 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Recent Searches</span>
            <button
              onClick={onClearHistory}
              className="flex items-center gap-1 text-[11px] text-red-600 dark:text-red-400 hover:underline"
            >
              <Trash2 className="w-3 h-3" />
              Clear History
            </button>
          </div>

          <div className="max-h-60 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
            {searchHistory.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectRecent(item.query)}
                className="flex items-center justify-between px-3 py-2 hover:bg-blue-50/70 dark:hover:bg-blue-900/30 cursor-pointer group text-slate-700 dark:text-slate-200 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-500" />
                  <span className="font-medium text-slate-800 dark:text-slate-200">{item.query}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 group-hover:text-blue-500 flex items-center gap-0.5">
                    Search <ArrowUpRight className="w-3 h-3" />
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveHistoryItem(item.id);
                    }}
                    className="p-1 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40"
                    title="Remove item"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
