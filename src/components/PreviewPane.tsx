import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  FileSpreadsheet, 
  FileText, 
  FileCode, 
  FileImage, 
  File, 
  Folder, 
  Info,
  Layers,
  ZoomIn,
  ZoomOut,
  Compass
} from 'lucide-react';
import { FileItem } from '../types';
import { formatDate, formatFileSize } from '../services/localFileSystem';

interface PreviewPaneProps {
  file: FileItem | null;
  onClose: () => void;
  onOpenItem: (item: FileItem) => void;
}

export const PreviewPane: React.FC<PreviewPaneProps> = ({
  file,
  onClose,
  onOpenItem,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'metadata'>('preview');

  if (!file) {
    return (
      <div className="w-80 bg-white dark:bg-[#181d26] border-l border-[#dbe3ed] dark:border-[#283243] flex flex-col items-center justify-center p-6 text-center text-slate-400 shrink-0">
        <Info className="w-8 h-8 text-slate-300 dark:text-slate-600 mb-2" />
        <p className="text-xs font-medium">Select a file to preview details and content</p>
      </div>
    );
  }

  const handleCopyPath = () => {
    navigator.clipboard.writeText(file.path);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const getFileCategoryLabel = (f: FileItem) => {
    if (f.isFolder) return 'Folder';
    const ext = f.extension.toUpperCase();
    if (['XLS', 'XLSX', 'CSV'].includes(ext)) return `Microsoft Excel Worksheet (.${f.extension})`;
    if (['DOC', 'DOCX'].includes(ext)) return `Microsoft Word Document (.${f.extension})`;
    if (ext === 'PDF') return 'Adobe Acrobat PDF Document (.pdf)';
    if (['DWG', 'DXF'].includes(ext)) return `AutoCAD Drawing File (.${f.extension})`;
    if (['JPG', 'JPEG', 'PNG'].includes(ext)) return `Digital Image File (.${f.extension})`;
    if (['PPT', 'PPTX'].includes(ext)) return `PowerPoint Presentation (.${f.extension})`;
    return `${ext} Document`;
  };

  // Render authentic interactive previews
  const renderDocumentContent = () => {
    const ext = file.extension.toLowerCase();

    // 1. Excel Preview: Structured Tabular Grid
    if (['xlsx', 'xls', 'csv'].includes(ext)) {
      return (
        <div className="space-y-3">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded p-2 text-[11px] text-emerald-800 dark:text-emerald-300 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Spreadsheet Data View
            </span>
            <span className="text-[10px] font-mono">Formula Engine Active</span>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded overflow-x-auto text-[11px] font-mono font-tabular">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-1.5 text-center w-8 border-r border-slate-200 dark:border-slate-700">#</th>
                  <th className="p-1.5 text-left border-r border-slate-200 dark:border-slate-700">Description</th>
                  <th className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">Qty</th>
                  <th className="p-1.5 text-right">Amount (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-[#181d26] text-slate-700 dark:text-slate-200">
                <tr>
                  <td className="p-1 text-center bg-slate-50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-slate-400">1</td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700 font-sans">Earthwork &amp; Subgrade Compaction</td>
                  <td className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">48,200 m³</td>
                  <td className="p-1.5 text-right font-semibold">89,17,000</td>
                </tr>
                <tr>
                  <td className="p-1 text-center bg-slate-50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-slate-400">2</td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700 font-sans">Granular Sub-Base (GSB) Table 400-1</td>
                  <td className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">18,400 m³</td>
                  <td className="p-1.5 text-right font-semibold">2,61,28,000</td>
                </tr>
                <tr>
                  <td className="p-1 text-center bg-slate-50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-slate-400">3</td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700 font-sans">Dense Bituminous Macadam (DBM) VG-40</td>
                  <td className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">8,900 MT</td>
                  <td className="p-1.5 text-right font-semibold">5,74,05,000</td>
                </tr>
                <tr>
                  <td className="p-1 text-center bg-slate-50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-slate-400">4</td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700 font-sans">Bituminous Concrete (BC) Wearing Course</td>
                  <td className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">6,200 MT</td>
                  <td className="p-1.5 text-right font-semibold">4,41,44,000</td>
                </tr>
                <tr>
                  <td className="p-1 text-center bg-slate-50 dark:bg-slate-800/40 border-r border-slate-200 dark:border-slate-700 text-slate-400">5</td>
                  <td className="p-1.5 border-r border-slate-200 dark:border-slate-700 font-sans">Major Bridge Pier Cap Concrete M45</td>
                  <td className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">420 m³</td>
                  <td className="p-1.5 text-right font-semibold">47,04,000</td>
                </tr>
                <tr className="bg-slate-50 dark:bg-slate-800/60 font-semibold border-t-2 border-slate-300 dark:border-slate-700">
                  <td colSpan={3} className="p-1.5 text-right border-r border-slate-200 dark:border-slate-700">Gross Total Certified:</td>
                  <td className="p-1.5 text-right text-blue-600 dark:text-blue-400">₹ 14,12,98,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {file.contentFull && (
            <div className="bg-slate-50 dark:bg-[#151922] p-2.5 rounded border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto">
              {file.contentFull}
            </div>
          )}
        </div>
      );
    }

    // 2. CAD Drawing Preview: 2D Vector Highway Alignment Canvas
    if (['dwg', 'dxf'].includes(ext)) {
      return (
        <div className="space-y-3">
          <div className="bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 rounded p-2 text-[11px] text-cyan-800 dark:text-cyan-300 font-medium flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <FileCode className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              CAD Vector Viewer
            </span>
            <span className="text-[10px] font-mono">Scale 1:2500</span>
          </div>

          {/* Interactive Simulated CAD Canvas */}
          <div className="bg-[#0b1320] border border-cyan-900/60 rounded p-3 relative overflow-hidden h-44 flex flex-col justify-between text-cyan-400 font-mono text-[10px]">
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none"></div>

            {/* Compass rose */}
            <div className="absolute top-2 right-2 flex items-center gap-1 text-slate-400">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>N</span>
            </div>

            {/* Simulated Highway centerline & ROW lines */}
            <div className="relative w-full h-24 my-auto flex items-center">
              <svg className="w-full h-full" viewBox="0 0 300 80">
                {/* ROW Boundary Top */}
                <path d="M 10 20 Q 150 10 290 28" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                {/* Carriageway LHS */}
                <path d="M 10 32 Q 150 22 290 40" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                {/* Centerline Median */}
                <path d="M 10 40 Q 150 30 290 48" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
                {/* Carriageway RHS */}
                <path d="M 10 48 Q 150 38 290 56" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
                {/* ROW Boundary Bottom */}
                <path d="M 10 60 Q 150 50 290 68" fill="none" stroke="#64748b" strokeWidth="1" strokeDasharray="3,3" />
                {/* Chainage Stations */}
                <circle cx="50" cy="38" r="2.5" fill="#ef4444" />
                <text x="42" y="75" fill="#94a3b8" fontSize="8">140+000</text>
                <circle cx="150" cy="30" r="2.5" fill="#ef4444" />
                <text x="142" y="75" fill="#94a3b8" fontSize="8">145+000</text>
                <circle cx="250" cy="42" r="2.5" fill="#ef4444" />
                <text x="242" y="75" fill="#94a3b8" fontSize="8">150+000</text>
              </svg>
            </div>

            <div className="flex items-center justify-between text-slate-400 z-10">
              <span>Radius: R = 1500m</span>
              <span>Super-elevation: e = 4.2%</span>
              <span>ROW: 60m</span>
            </div>
          </div>

          {file.contentFull && (
            <div className="bg-slate-50 dark:bg-[#151922] p-2.5 rounded border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-sans leading-relaxed whitespace-pre-wrap max-h-40 overflow-y-auto">
              {file.contentFull}
            </div>
          )}
        </div>
      );
    }

    // 3. PDF / Word / Text Documents
    return (
      <div className="space-y-3">
        <div className="bg-slate-50 dark:bg-[#141822] p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs leading-relaxed max-h-96 overflow-y-auto font-sans text-slate-800 dark:text-slate-200 space-y-2 whitespace-pre-wrap">
          {file.contentFull || file.contentSnippet || (
            <p className="text-slate-400 italic">No extracted text available for this file.</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-88 bg-white dark:bg-[#181d26] border-l border-[#dbe3ed] dark:border-[#283243] flex flex-col shrink-0 select-none overflow-y-auto text-xs z-20">
      {/* Top Header */}
      <div className="h-10 px-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-[#151922]">
        <div className="flex items-center gap-1.5 font-semibold text-slate-800 dark:text-slate-200">
          <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>File Preview &amp; Info</span>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800"
          title="Close preview pane"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* File Card Summary */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 shrink-0">
            {file.isFolder ? (
              <Folder className="w-6 h-6 text-amber-500" />
            ) : file.category === 'pdf' ? (
              <FileText className="w-6 h-6 text-red-500" />
            ) : file.category === 'excel' ? (
              <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
            ) : file.category === 'cad' ? (
              <FileCode className="w-6 h-6 text-cyan-600" />
            ) : (
              <File className="w-6 h-6 text-blue-600" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100 break-all leading-snug">
              {file.name}
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {getFileCategoryLabel(file)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={() => onOpenItem(file)}
            className="flex-1 py-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium flex items-center justify-center gap-1.5 shadow-xs transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open File</span>
          </button>

          <button
            onClick={handleCopyPath}
            className="py-1.5 px-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded font-medium flex items-center gap-1 transition-colors"
            title="Copy full Windows path"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Path'}</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-[#141822]">
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 font-semibold text-center border-b-2 transition-colors ${
            activeTab === 'preview'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Document Preview
        </button>
        <button
          onClick={() => setActiveTab('metadata')}
          className={`flex-1 py-2 font-semibold text-center border-b-2 transition-colors ${
            activeTab === 'metadata'
              ? 'border-blue-600 text-blue-600 dark:text-blue-400'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          File Properties
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'preview' ? (
          renderDocumentContent()
        ) : (
          <div className="space-y-3 font-sans">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold">Location / Path</span>
              <p className="font-mono text-xs text-slate-800 dark:text-slate-200 break-all bg-slate-50 dark:bg-slate-900/40 p-1.5 rounded mt-0.5 border border-slate-200 dark:border-slate-800">
                {file.path}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">File Size</span>
                <p className="font-mono text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                  {file.isFolder ? 'Folder' : formatFileSize(file.size)}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Category</span>
                <p className="text-slate-800 dark:text-slate-200 uppercase font-semibold mt-0.5">
                  {file.category}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Date Modified</span>
                <p className="font-mono text-slate-800 dark:text-slate-200 text-[11px] mt-0.5">
                  {formatDate(file.modifiedDate)}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Date Created</span>
                <p className="font-mono text-slate-800 dark:text-slate-200 text-[11px] mt-0.5">
                  {formatDate(file.createdDate)}
                </p>
              </div>
            </div>

            {/* Custom Metadata for Highway Projects */}
            {file.metadata && Object.keys(file.metadata).length > 0 && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Engineering Metadata</span>
                <div className="mt-1 space-y-1.5 bg-slate-50 dark:bg-slate-900/40 p-2 rounded border border-slate-200 dark:border-slate-800">
                  {Object.entries(file.metadata).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">{key}:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {file.tags && file.tags.length > 0 && (
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Project Tags</span>
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {file.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded text-[11px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
