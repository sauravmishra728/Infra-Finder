export type FileCategory = 'all' | 'pdf' | 'excel' | 'word' | 'ppt' | 'cad' | 'images' | 'other' | 'folder';

export type DateFilterOption =
  | 'any'
  | 'today'
  | 'yesterday'
  | '7days'
  | '30days'
  | '3months'
  | '6months'
  | '1year'
  | 'custom';

export type DateTarget = 'modified' | 'created';

export type SortByField = 'relevance' | 'name' | 'modified' | 'created' | 'size' | 'type';
export type SortDirection = 'asc' | 'desc';

export type ViewMode = 'details' | 'list' | 'icons';

export interface FileItem {
  id: string;
  name: string;
  extension: string; // e.g., 'pdf', 'xlsx', 'dwg'
  path: string; // e.g., 'D:\\NH48_Project\\03_Billing\\IPC_24.xlsx'
  parentPath: string; // e.g., 'D:\\NH48_Project\\03_Billing'
  category: FileCategory;
  size: number; // bytes
  createdDate: string; // ISO string
  modifiedDate: string; // ISO string
  isFolder: boolean;
  contentSnippet?: string; // matched text snippet
  contentFull?: string; // full text for search & preview
  tags?: string[];
  metadata?: Record<string, string | number>;
  isPinned?: boolean;
  isLocalImported?: boolean;
  itemCount?: number; // for folders
}

export interface SearchFilters {
  query: string;
  category: FileCategory;
  dateRange: DateFilterOption;
  dateTarget: DateTarget;
  customStartDate?: string; // YYYY-MM-DD
  customEndDate?: string; // YYYY-MM-DD
  locationPath?: string; // current active folder or root
  sortBy: SortByField;
  sortDirection: SortDirection;
}

export interface SearchResult {
  file: FileItem;
  score: number;
  snippet?: string;
  matchType?: 'filename' | 'content' | 'path' | 'tag' | 'metadata';
}

export interface SearchHistoryItem {
  id: string;
  query: string;
  category?: FileCategory;
  timestamp: number;
}

export interface SavedSearch {
  id: string;
  name: string;
  query: string;
  category: FileCategory;
  dateRange: DateFilterOption;
  dateTarget: DateTarget;
  customStartDate?: string;
  customEndDate?: string;
  createdAt: string;
}

export interface IndexedLocation {
  id: string;
  path: string;
  name: string;
  drive: string;
  fileCount: number;
  isIncluded: boolean;
}

export interface DriveInfo {
  letter: string; // 'C:', 'D:', 'E:'
  label: string;
  totalBytes: number;
  usedBytes: number;
  type: 'System SSD' | 'Engineering Drive' | 'Project Archive' | 'External Drive';
}

export interface ContextMenuState {
  x: number;
  y: number;
  item: FileItem;
}
