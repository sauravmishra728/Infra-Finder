import React, { useState } from 'react';
import { 
  Star, 
  HardDrive, 
  Folder, 
  FolderPlus, 
  Bookmark, 
  ChevronDown, 
  ChevronRight, 
  CheckSquare, 
  Square, 
  Trash2,
  Database,
  ExternalLink,
  Layers
} from 'lucide-react';
import { DriveInfo, IndexedLocation, SavedSearch } from '../types';

interface SidebarProps {
  drives: DriveInfo[];
  currentPath: string;
  onNavigatePath: (path: string) => void;
  indexedLocations: IndexedLocation[];
  onToggleIndexLocation: (id: string) => void;
  savedSearches: SavedSearch[];
  onApplySavedSearch: (saved: SavedSearch) => void;
  onDeleteSavedSearch: (id: string) => void;
  onAddLocalFolder: () => void;
  isIndexing: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  drives,
  currentPath,
  onNavigatePath,
  indexedLocations,
  onToggleIndexLocation,
  savedSearches,
  onApplySavedSearch,
  onDeleteSavedSearch,
  onAddLocalFolder,
  isIndexing,
}) => {
  const [expandQuickAccess, setExpandQuickAccess] = useState(true);
  const [expandDrives, setExpandDrives] = useState(true);
  const [expandIndexLocations, setExpandIndexLocations] = useState(true);
  const [expandSavedSearches, setExpandSavedSearches] = useState(true);

  // Quick access items configured specifically for highway project teams
  const quickAccessItems = [
    { name: 'Highway Project (NH-48)', path: 'D:\\NH-48_Six_Laning_Project' },
    { name: 'DPR (Detailed Reports)', path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report' },
    { name: 'Billing & IPC Bills', path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices' },
    { name: 'Correspondence & EOT', path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters' },
    { name: 'Drawings & Plan Profile', path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD' },
    { name: 'QA/QC & NCRs', path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing' },
    { name: 'Contracts & Agreements', path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements' },
    { name: 'BOQ & Rate Analysis', path: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis' },
  ];

  return (
    <aside className="w-64 bg-[#f8fafc] dark:bg-[#151922] border-r border-[#dbe3ed] dark:border-[#283243] flex flex-col shrink-0 select-none overflow-y-auto text-xs">
      {/* 1. Quick Access Section */}
      <div className="py-2">
        <button
          onClick={() => setExpandQuickAccess(!expandQuickAccess)}
          className="w-full flex items-center justify-between px-3 py-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-semibold tracking-wider text-[11px] uppercase"
        >
          <div className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Quick Access</span>
          </div>
          {expandQuickAccess ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>

        {expandQuickAccess && (
          <div className="mt-1 space-y-0.5 px-2">
            {quickAccessItems.map((item) => {
              const isActive = currentPath === item.path;

              return (
                <button
                  key={item.path}
                  onClick={() => onNavigatePath(item.path)}
                  className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md text-left truncate transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                  }`}
                  title={item.path}
                >
                  <Folder className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>

      {/* 2. This PC & Drives Section */}
      <div className="py-2">
        <button
          onClick={() => setExpandDrives(!expandDrives)}
          className="w-full flex items-center justify-between px-3 py-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-semibold tracking-wider text-[11px] uppercase"
        >
          <div className="flex items-center gap-1.5">
            <HardDrive className="w-3.5 h-3.5 text-blue-500" />
            <span>This PC &amp; Drives</span>
          </div>
          {expandDrives ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>

        {expandDrives && (
          <div className="mt-1 space-y-1.5 px-2">
            {drives.map((drive) => {
              const isDriveActive = currentPath === drive.letter;
              const usedPercent = Math.round((drive.usedBytes / drive.totalBytes) * 100);

              return (
                <div
                  key={drive.letter}
                  onClick={() => onNavigatePath(drive.letter)}
                  className={`px-2.5 py-1.5 rounded-md cursor-pointer transition-colors ${
                    isDriveActive
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-900 dark:text-blue-100'
                      : 'hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-xs">{drive.letter}</span>
                      <span className="text-[11px] text-slate-500 truncate max-w-[110px]">{drive.label}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono font-tabular">{usedPercent}%</span>
                  </div>

                  {/* Windows-style storage bar */}
                  <div className="mt-1 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${usedPercent > 90 ? 'bg-red-500' : 'bg-blue-500'}`}
                      style={{ width: `${usedPercent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>

      {/* 3. Indexed Locations Section (Prompt Requirement 7) */}
      <div className="py-2">
        <div className="flex items-center justify-between px-3 py-1">
          <button
            onClick={() => setExpandIndexLocations(!expandIndexLocations)}
            className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-semibold tracking-wider text-[11px] uppercase"
          >
            <Database className="w-3.5 h-3.5 text-emerald-500" />
            <span>Indexed Locations</span>
            {expandIndexLocations ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          </button>

          <button
            onClick={onAddLocalFolder}
            className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded"
            title="Add local folder from computer to index"
          >
            <FolderPlus className="w-3.5 h-3.5" />
          </button>
        </div>

        {expandIndexLocations && (
          <div className="mt-1 space-y-1 px-2">
            {indexedLocations.map((loc) => (
              <div
                key={loc.id}
                className="flex items-center justify-between px-2 py-1.5 rounded hover:bg-slate-200/50 dark:hover:bg-slate-800/50 group"
              >
                <button
                  onClick={() => onToggleIndexLocation(loc.id)}
                  className="flex items-center gap-2 text-left truncate mr-1"
                  title={`${loc.path} (${loc.fileCount.toLocaleString()} files)`}
                >
                  {loc.isIncluded ? (
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  ) : (
                    <Square className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                  <div className="truncate">
                    <p className={`truncate font-medium ${loc.isIncluded ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400 line-through'}`}>
                      {loc.name}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">{loc.path}</p>
                  </div>
                </button>
                <span className="text-[10px] text-slate-400 font-mono font-tabular shrink-0">
                  {loc.fileCount.toLocaleString()}
                </span>
              </div>
            ))}

            <button
              onClick={onAddLocalFolder}
              className="w-full mt-2 py-1.5 px-2 border border-dashed border-blue-400 dark:border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50/60 dark:hover:bg-blue-950/40 rounded flex items-center justify-center gap-1.5 font-medium transition-colors"
            >
              <FolderPlus className="w-3.5 h-3.5" />
              <span>Index Local Folder...</span>
            </button>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 my-1"></div>

      {/* 4. Saved Searches Section (Prompt Requirement 18) */}
      <div className="py-2">
        <button
          onClick={() => setExpandSavedSearches(!expandSavedSearches)}
          className="w-full flex items-center justify-between px-3 py-1 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 font-semibold tracking-wider text-[11px] uppercase"
        >
          <div className="flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5 text-indigo-500" />
            <span>Saved Searches</span>
          </div>
          {expandSavedSearches ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
        </button>

        {expandSavedSearches && (
          <div className="mt-1 space-y-0.5 px-2">
            {savedSearches.length === 0 ? (
              <p className="px-2 py-1 text-[11px] text-slate-400 italic">No saved searches yet</p>
            ) : (
              savedSearches.map((saved) => (
                <div
                  key={saved.id}
                  className="flex items-center justify-between px-2 py-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-950/40 group text-slate-700 dark:text-slate-300"
                >
                  <button
                    onClick={() => onApplySavedSearch(saved)}
                    className="flex items-center gap-2 truncate text-left"
                    title={`Query: "${saved.query}" | Type: ${saved.category}`}
                  >
                    <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                    <span className="truncate font-medium">{saved.name}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteSavedSearch(saved.id);
                    }}
                    className="p-1 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 rounded transition-opacity"
                    title="Delete saved search"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </aside>
  );
};
