import React from 'react';
import { Minus, Square, X, FolderTree, Cpu, Settings, Moon, Sun } from 'lucide-react';

interface TitleBarProps {
  onOpenSettings: () => void;
  onOpenArchitecture: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  indexStatus: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  onOpenSettings,
  onOpenArchitecture,
  isDarkMode,
  onToggleDarkMode,
  indexStatus,
}) => {
  return (
    <header className="h-9 bg-[#f0f3f8] dark:bg-[#1a202c] border-b border-[#d8e0ea] dark:border-[#2d3748] flex items-center justify-between px-3 select-none shrink-0 transition-colors">
      {/* Brand & App Title */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white shadow-xs">
          <FolderTree className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
          InfraFinder
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
          Highway &amp; Infrastructure Document Search
        </span>
        <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{indexStatus}</span>
        </div>
      </div>

      {/* Right Action Tools & Window Buttons */}
      <div className="flex items-center gap-1">
        <button
          onClick={onOpenArchitecture}
          className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 rounded transition-colors"
          title="Windows Desktop Native Architecture Specification (Section 30)"
        >
          <Cpu className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
          <span className="hidden md:inline">Tech Stack Arch</span>
        </button>

        <button
          onClick={onToggleDarkMode}
          className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 rounded transition-colors"
          title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={onOpenSettings}
          className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 rounded transition-colors"
          title="Explorer & Index Settings"
        >
          <Settings className="w-3.5 h-3.5" />
        </button>

        <div className="w-[1px] h-4 bg-slate-300 dark:bg-slate-700 mx-1"></div>

        {/* Windows Standard Window Controls */}
        <button
          onClick={() => {}}
          className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400"
          title="Minimize"
        >
          <Minus className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => {}}
          className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-700 rounded text-slate-600 dark:text-slate-400"
          title="Maximize"
        >
          <Square className="w-3 h-3" />
        </button>
        <button
          onClick={() => {}}
          className="p-1.5 hover:bg-red-500 hover:text-white rounded text-slate-600 dark:text-slate-400 transition-colors"
          title="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
