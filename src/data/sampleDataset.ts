import { DriveInfo, FileItem, IndexedLocation } from '../types';

export const INITIAL_DRIVES: DriveInfo[] = [
  {
    letter: 'C:',
    label: 'Windows System SSD',
    totalBytes: 512 * 1024 * 1024 * 1024,
    usedBytes: 318 * 1024 * 1024 * 1024,
    type: 'System SSD',
  },
  {
    letter: 'D:',
    label: 'Highway Projects Fast NVMe',
    totalBytes: 2048 * 1024 * 1024 * 1024,
    usedBytes: 1140 * 1024 * 1024 * 1024,
    type: 'Engineering Drive',
  },
  {
    letter: 'E:',
    label: 'CAD & Survey Drone Archive',
    totalBytes: 4096 * 1024 * 1024 * 1024,
    usedBytes: 2210 * 1024 * 1024 * 1024,
    type: 'Project Archive',
  },
];

export const INITIAL_INDEXED_LOCATIONS: IndexedLocation[] = [
  {
    id: 'idx-1',
    path: 'D:\\NH-48_Six_Laning_Project',
    name: 'NH-48 Six Laning Project (Package-II)',
    drive: 'D:',
    fileCount: 14820,
    isIncluded: true,
  },
  {
    id: 'idx-2',
    path: 'D:\\MoRTH_and_IRC_Technical_Standards',
    name: 'MoRTH & IRC Technical Standards Library',
    drive: 'D:',
    fileCount: 4210,
    isIncluded: true,
  },
  {
    id: 'idx-3',
    path: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts',
    name: 'Engineer Personal Documents & Notes',
    drive: 'C:',
    fileCount: 1840,
    isIncluded: true,
  },
  {
    id: 'idx-4',
    path: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD',
    name: 'LiDAR & Alignment CAD Archive',
    drive: 'E:',
    fileCount: 6390,
    isIncluded: true,
  },
];

export const EXCLUDED_LOCATIONS: string[] = [
  'C:\\Windows',
  'C:\\Program Files',
  'C:\\Program Files (x86)',
  'C:\\Users\\ProjectEngineer\\AppData\\Local\\Temp',
  'D:\\$RECYCLE.BIN',
];

export const SAMPLE_FILES: FileItem[] = [
  // FOLDERS - D:\NH-48_Six_Laning_Project
  {
    id: 'f-root-nh48',
    name: 'NH-48_Six_Laning_Project',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project',
    parentPath: 'D:',
    category: 'folder',
    size: 0,
    createdDate: '2024-01-10T09:00:00Z',
    modifiedDate: '2026-09-24T16:30:00Z',
    isFolder: true,
    itemCount: 10,
    isPinned: true,
  },
  {
    id: 'f-dpr',
    name: '01_DPR_Detailed_Project_Report',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-01-15T10:00:00Z',
    modifiedDate: '2026-02-18T11:20:00Z',
    isFolder: true,
    itemCount: 6,
    isPinned: true,
  },
  {
    id: 'f-mpr',
    name: '02_MPR_Monthly_Progress_Reports',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-02-01T08:30:00Z',
    modifiedDate: '2026-09-25T17:45:00Z',
    isFolder: true,
    itemCount: 8,
    isPinned: true,
  },
  {
    id: 'f-billing',
    name: '03_Billing_and_Invoices',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-02-10T14:15:00Z',
    modifiedDate: '2026-09-22T19:10:00Z',
    isFolder: true,
    itemCount: 9,
    isPinned: true,
  },
  {
    id: 'f-contracts',
    name: '04_Contracts_and_Agreements',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-01-05T11:00:00Z',
    modifiedDate: '2026-04-12T10:00:00Z',
    isFolder: true,
    itemCount: 5,
    isPinned: true,
  },
  {
    id: 'f-correspondence',
    name: '05_Correspondence_and_Letters',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-02-15T09:00:00Z',
    modifiedDate: '2026-09-20T14:22:00Z',
    isFolder: true,
    itemCount: 8,
    isPinned: true,
  },
  {
    id: 'f-cad',
    name: '06_Engineering_Drawings_CAD',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-01-20T10:30:00Z',
    modifiedDate: '2026-08-30T11:40:00Z',
    isFolder: true,
    itemCount: 7,
    isPinned: true,
  },
  {
    id: 'f-qaqc',
    name: '07_QA_QC_and_Testing',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-02-18T13:00:00Z',
    modifiedDate: '2026-09-23T15:10:00Z',
    isFolder: true,
    itemCount: 10,
    isPinned: true,
  },
  {
    id: 'f-boq',
    name: '08_BOQ_and_Rate_Analysis',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-01-12T16:00:00Z',
    modifiedDate: '2026-07-15T18:00:00Z',
    isFolder: true,
    itemCount: 6,
  },
  {
    id: 'f-photos',
    name: '09_Site_Photographs',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-03-01T10:00:00Z',
    modifiedDate: '2026-09-26T12:00:00Z',
    isFolder: true,
    itemCount: 6,
  },
  {
    id: 'f-presentations',
    name: '10_Presentations_and_Reviews',
    extension: '',
    path: 'D:\\NH-48_Six_Laning_Project\\10_Presentations_and_Reviews',
    parentPath: 'D:\\NH-48_Six_Laning_Project',
    category: 'folder',
    size: 0,
    createdDate: '2024-03-10T12:00:00Z',
    modifiedDate: '2026-09-18T09:30:00Z',
    isFolder: true,
    itemCount: 4,
  },

  // 01 DPR FILES
  {
    id: 'doc-dpr-1',
    name: 'DPR_Vol_I_Executive_Summary_NH48.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report\\DPR_Vol_I_Executive_Summary_NH48.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    category: 'pdf',
    size: 14250000,
    createdDate: '2024-01-15T10:00:00Z',
    modifiedDate: '2025-11-20T14:15:00Z',
    isFolder: false,
    tags: ['DPR', 'Detailed Project Report', 'Executive Summary', 'NH-48', 'Alignment', 'Traffic'],
    metadata: {
      'Project Name': 'NH-48 Six Laning Project',
      'Chainage': 'Km 140+000 to Km 195+500',
      'Authority': 'NHAI',
      'Contract Mode': 'EPC Mode',
      'Total Length': '55.500 Km',
    },
    contentFull: `DETAILED PROJECT REPORT (DPR) - VOLUME I: EXECUTIVE SUMMARY
Project: Six Laning of NH-48 from Km 140+000 to Km 195+500 in the State of Maharashtra under Bharatmala Pariyojana.
Authority: National Highways Authority of India (NHAI).
Concessionaire / Contractor: EPC Contractor Package-2.
Project Cost: ₹ 1,480.25 Crores.
Scope of Work: Capacity augmentation from existing 4-lane divided carriageway to 6-lane divided carriageway with 2-lane service roads on both sides in urban stretches.
Major Structures: 2 Major Bridges across River Krishna, 48 Minor Bridges, 112 Box Culverts, 4 Vehicular Underpasses (VUP), 6 Light Vehicular Underpasses (LVUP), 2 Interchanges with rotary slip roads at Km 162+300 and Km 184+900.
Pavement Composition: Flexible pavement designed for 150 MSA as per IRC:37-2018 guidelines. Bituminous Concrete (BC) 40mm, Dense Bituminous Macadam (DBM) 150mm, Wet Mix Macadam (WMM) 250mm, Granular Sub-base (GSB) 200mm.`,
  },
  {
    id: 'doc-dpr-2',
    name: 'DPR_Vol_II_Traffic_Survey_and_Projections.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report\\DPR_Vol_II_Traffic_Survey_and_Projections.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    category: 'excel',
    size: 6850000,
    createdDate: '2024-01-16T11:20:00Z',
    modifiedDate: '2025-10-14T09:40:00Z',
    isFolder: false,
    tags: ['DPR', 'Traffic Survey', 'CVC', 'Axle Load', 'Toll Plaza', 'PCU'],
    metadata: {
      'Average Daily PCU': '48,250',
      'Design MSA': '150 MSA',
      'Toll Plaza Chainage': 'Km 168+200',
    },
    contentFull: `TRAFFIC SURVEY DATA SHEET & AXLE LOAD SPECTRUM
Classified Volume Count (CVC) 7-day 24-hour round-the-clock survey at Km 144+200 and Km 182+600.
Average Daily Traffic: 38,420 Vehicles (48,250 PCU/day).
Commercial Vehicles: 14,800 CVPD comprising 2-Axle, 3-Axle, Multi-Axle Vehicles (MAV) and Semi-Articulated trailers.
Vehicle Damage Factor (VDF): Commercial VDF calculated at 4.85 based on mobile axle load scale surveys.
Projected Growth Rate: 6.5% compound annual growth. 20-year design horizon traffic estimated at 182 MSA.`,
  },
  {
    id: 'doc-dpr-3',
    name: 'DPR_Vol_III_Geotechnical_and_Pavement_Design.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report\\DPR_Vol_III_Geotechnical_and_Pavement_Design.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    category: 'pdf',
    size: 21500000,
    createdDate: '2024-01-18T14:00:00Z',
    modifiedDate: '2025-12-05T15:30:00Z',
    isFolder: false,
    tags: ['DPR', 'Pavement Design', 'Geotechnical', 'CBR', 'IRC:37-2018', 'IITPAVE', 'Subgrade'],
    metadata: {
      'Subgrade CBR': '8.0%',
      'Design Period': '20 Years',
      'Design Speed': '100 km/h',
    },
    contentFull: `GEOTECHNICAL INVESTIGATION & PAVEMENT DESIGN REPORT
Pavement design formulated using IRC:37-2018 'Guidelines for the Design of Flexible Pavements' via IITPAVE linear elastic multilayer analysis.
Subgrade soil characteristics: Clayey sand with silt (SC-SM), average soaked CBR value 8.0%.
Resilient Modulus of subgrade: 68 MPa.
Fatigue cracking criterion in DBM layer and rutting strain criterion at top of subgrade evaluated under 40°C annual average pavement temperature.
Total crust thickness: 640mm. Bituminous layer 190mm (40mm BC + 150mm DBM) using VG-40 paving bitumen with anti-stripping agent.`,
  },
  {
    id: 'doc-dpr-4',
    name: 'DPR_Vol_IV_Hydrological_Study_and_Drainage.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report\\DPR_Vol_IV_Hydrological_Study_and_Drainage.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    category: 'pdf',
    size: 18400000,
    createdDate: '2024-01-20T10:00:00Z',
    modifiedDate: '2025-09-12T11:15:00Z',
    isFolder: false,
    tags: ['DPR', 'Hydrology', 'Drainage', 'HFL', 'Catchment', 'IRC:SP:13', 'Bridges'],
    contentFull: `HYDROLOGICAL & HYDRAULIC DESIGN OF CROSS DRAINAGE STRUCTURES
Calculations carried out in compliance with IRC:5-1998, IRC:SP:13 and IRC:78.
50-year return flood discharge calculated using Dickens formula and Rational Method for 112 Box Culverts.
100-year return period design discharge for Krishna River Major Bridge: Q100 = 8,450 m³/sec.
Scour depth calculations based on Lacey's silt factor f = 1.25. Maximum design scour level: RL 210.45m.`,
  },
  {
    id: 'doc-dpr-5',
    name: 'DPR_Vol_V_Cost_Estimate_and_Financial_Model.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report\\DPR_Vol_V_Cost_Estimate_and_Financial_Model.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\01_DPR_Detailed_Project_Report',
    category: 'excel',
    size: 4950000,
    createdDate: '2024-01-22T16:30:00Z',
    modifiedDate: '2025-08-19T14:10:00Z',
    isFolder: false,
    tags: ['DPR', 'Cost Estimate', 'Financial Model', 'MoRTH Rates', 'BOQ', 'Budget'],
    contentFull: `PROJECT COST ESTIMATE & BILL OF QUANTITIES SUMMARY
Civil Construction Cost: ₹ 1,280,45,00,000
Land Acquisition & R&R Compensation: ₹ 284,50,00,000
Utility Shifting (Water pipelines, 33kV & 110kV HT lines): ₹ 48,20,00,000
Environmental & Forest Mitigation: ₹ 18,30,00,000
Independent Engineer & PMC Fees: ₹ 24,00,00,000
Total Capital Cost: ₹ 1,655,45,00,000.`,
  },

  // 02 MPR FILES (Monthly Progress Reports)
  {
    id: 'doc-mpr-sep26',
    name: 'MPR_2026_09_September_Progress_Report_Rev0.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports\\MPR_2026_09_September_Progress_Report_Rev0.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports',
    category: 'pdf',
    size: 8900000,
    createdDate: '2026-09-24T10:00:00Z',
    modifiedDate: '2026-09-25T17:45:00Z',
    isFolder: false,
    tags: ['MPR', 'Monthly Progress Report', 'September 2026', 'S-Curve', 'NH-48', 'Milestone'],
    metadata: {
      'Reporting Period': 'September 2026',
      'Target Physical': '89.4%',
      'Actual Physical': '84.8%',
      'Cumulative Financial': '₹ 1,248.50 Cr',
    },
    contentFull: `MONTHLY PROGRESS REPORT (MPR) NO. 32 FOR SEPTEMBER 2026
NH-48 Six Laning Project (Km 140+000 to Km 195+500).
1. Executive Summary: Cumulative physical progress achieved till 20th September 2026 is 84.8% against scheduled target of 89.4%.
Slippage of 4.6% attributed to unseasonal monsoon showers and right of way handover delays at Ch 162+000 to 166+000.
2. Major Milestones: Milestone-1 (20% progress) and Milestone-2 (50% progress) completed. Milestone-3 (75% progress) certified.
3. Pavement Progress: Earthwork in subgrade completed 52.4 km (94.4%). Granular Sub-base (GSB) 50.8 km (91.5%). Dense Bituminous Macadam (DBM) 46.2 km (83.2%). Bituminous Concrete (BC) 42.1 km (75.8%).
4. Structures: Krishna River Major Bridge pier shafts 100% cast, 8 of 10 deck spans erected. All 112 Box Culverts completed.
5. IPC Status: IPC No. 28 submitted for certified gross payment of ₹ 18.45 Crores.`,
  },
  {
    id: 'doc-mpr-aug26',
    name: 'MPR_2026_08_August_Progress_Report.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports\\MPR_2026_08_August_Progress_Report.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports',
    category: 'pdf',
    size: 7850000,
    createdDate: '2026-08-25T09:00:00Z',
    modifiedDate: '2026-08-28T16:20:00Z',
    isFolder: false,
    tags: ['MPR', 'Monthly Progress Report', 'August 2026', 'Progress', 'NH-48'],
    contentFull: `MONTHLY PROGRESS REPORT (MPR) NO. 31 FOR AUGUST 2026
Cumulative physical progress: 81.2% against planned 85.0%.
Financial billing cumulative: ₹ 1,195.20 Crores.
Rainfall recorded during August 2026: 310mm, affecting earthwork compaction and bituminous plant operations for 14 working days.
Machinery deployed: 6 WMM Plants (200 TPH), 4 Hot Mix Batch Plants (160 TPH), 8 Sensor Pavers, 18 Tandem Vibratory Rollers.`,
  },
  {
    id: 'doc-mpr-jul26',
    name: 'MPR_2026_07_July_Progress_Report.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports\\MPR_2026_07_July_Progress_Report.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports',
    category: 'pdf',
    size: 7600000,
    createdDate: '2026-07-26T11:00:00Z',
    modifiedDate: '2026-07-30T15:10:00Z',
    isFolder: false,
    tags: ['MPR', 'July 2026', 'Monthly Progress Report'],
    contentFull: `MONTHLY PROGRESS REPORT (MPR) FOR JULY 2026. Cumulative progress 78.4%. Independent Engineer inspection of RE Wall panels at Ch 162+300.`,
  },
  {
    id: 'doc-mpr-scurve',
    name: 'MPR_Physical_and_Financial_S_Curve_2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports\\MPR_Physical_and_Financial_S_Curve_2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\02_MPR_Monthly_Progress_Reports',
    category: 'excel',
    size: 3420000,
    createdDate: '2026-01-05T09:30:00Z',
    modifiedDate: '2026-09-22T14:10:00Z',
    isFolder: false,
    tags: ['MPR', 'S-Curve', 'Financial', 'Physical', 'Earned Value', 'Variance'],
    contentFull: `S-CURVE TRACKER & EARNED VALUE MANAGEMENT
Month-by-month Planned Value (PV), Earned Value (EV), and Actual Cost (AC).
Schedule Performance Index (SPI): 0.95
Cost Performance Index (CPI): 1.02
Forecasted Completion Date: 31st March 2027 taking into account Extension of Time (EOT) claim of 342 days.`,
  },

  // 03 BILLING AND INVOICES (IPC, RA Bills, Subcontractor Bills, Measurement Sheets)
  {
    id: 'doc-bill-ipc28',
    name: 'IPC_28_Certified_Interim_Payment_Certificate_Aug2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\IPC_28_Certified_Interim_Payment_Certificate_Aug2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 2850000,
    createdDate: '2026-08-30T10:00:00Z',
    modifiedDate: '2026-09-18T16:20:00Z',
    isFolder: false,
    tags: ['IPC', 'Interim Payment Certificate', 'Billing', 'RA Bill', 'Payment', 'Invoice', 'NHAI'],
    metadata: {
      'IPC Number': 'IPC No. 28',
      'Certified Gross': '₹ 18,45,20,000',
      'Net Payable': '₹ 14,82,45,210',
      'Bill Period': 'August 2026',
      'Status': 'Certified by IE',
    },
    contentFull: `INTERIM PAYMENT CERTIFICATE NO. 28 (IPC-28)
Contract: EPC Agreement for 6-Laning of NH-48 Km 140+000 to Km 195+500.
Employer: National Highways Authority of India (NHAI).
Contractor: ABC Infrastructure Ltd.
Independent Engineer: M/s Mott MacDonald - Louis Berger JV.
1. Gross Value of Work Done up to IPC-28: ₹ 1,248,50,42,000
2. Gross Value in current Bill (Month of Aug 2026): ₹ 18,45,20,000
3. Deductions & Recoveries:
   - Retention Money (5%): ₹ 92,26,000
   - Mobilization Advance Principal Recovery: ₹ 1,84,52,000
   - Mobilization Advance Interest Recovery (8.5% p.a.): ₹ 31,44,790
   - Statutory TDS under IT Act (2%): ₹ 36,90,400
   - GST TDS (2%): ₹ 36,90,400
   - Labor Cess (1%): ₹ 18,45,200
4. NET CERTIFIED PAYABLE TO CONTRACTOR: ₹ 14,82,45,210 (Rupees Fourteen Crores Eighty Two Lakhs Forty Five Thousand Two Hundred and Ten only).
Certified by Team Leader / Resident Engineer, Independent Engineer.`,
  },
  {
    id: 'doc-bill-ipc27',
    name: 'IPC_27_Interim_Payment_Certificate_July2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\IPC_27_Interim_Payment_Certificate_July2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 2750000,
    createdDate: '2026-07-28T09:00:00Z',
    modifiedDate: '2026-08-15T11:30:00Z',
    isFolder: false,
    tags: ['IPC', 'Interim Payment Certificate', 'Billing', 'July 2026'],
    contentFull: `INTERIM PAYMENT CERTIFICATE NO. 27 (IPC-27). Certified Gross: ₹ 16,92,30,000. Net Payable: ₹ 13,54,12,800. Certified on 15/08/2026.`,
  },
  {
    id: 'doc-bill-ipc26',
    name: 'IPC_26_Interim_Payment_Certificate_June2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\IPC_26_Interim_Payment_Certificate_June2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 2680000,
    createdDate: '2026-06-25T14:00:00Z',
    modifiedDate: '2026-07-10T12:00:00Z',
    isFolder: false,
    tags: ['IPC', 'Interim Payment Certificate', 'Billing', 'June 2026'],
    contentFull: `INTERIM PAYMENT CERTIFICATE NO. 26 (IPC-26). Certified Gross: ₹ 21,30,10,000. Net Payable: ₹ 17,14,50,000. Certified on 10/07/2026.`,
  },
  {
    id: 'doc-bill-ra32',
    name: 'RA_Bill_32_Contractor_Monthly_Bill_Sept2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\RA_Bill_32_Contractor_Monthly_Bill_Sept2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 4200000,
    createdDate: '2026-09-20T10:00:00Z',
    modifiedDate: '2026-09-22T19:10:00Z',
    isFolder: false,
    tags: ['RA Bill', 'Running Account Bill', 'Billing', 'Contractor Bill', 'Measurement', 'BOQ'],
    metadata: {
      'Bill Ref': 'RA Bill No. 32',
      'Gross Claim': '₹ 19,80,40,000',
      'Period': '01/09/2026 to 20/09/2026',
    },
    contentFull: `RUNNING ACCOUNT BILL NO. 32 (RA BILL 32)
Abstract of Quantities executed:
Item 2.02: Roadway Excavation in Soil (Ch 172+000 to 175+000) - 48,200 m³ @ ₹ 185/m³ = ₹ 89,17,000
Item 3.01: Granular Sub-base (GSB) compacted - 18,400 m³ @ ₹ 1,420/m³ = ₹ 2,61,28,000
Item 4.01: Wet Mix Macadam (WMM) compacted - 15,200 m³ @ ₹ 1,890/m³ = ₹ 2,87,28,000
Item 5.01: Dense Bituminous Macadam (DBM) with VG-40 - 8,900 MT @ ₹ 6,450/MT = ₹ 5,74,05,000
Item 5.02: Bituminous Concrete (BC) wearing course - 6,200 MT @ ₹ 7,120/MT = ₹ 4,41,44,000
Item 6.04: High Performance Concrete M40 in Pier Caps - 420 m³ @ ₹ 11,200/m³ = ₹ 47,04,000. Total Bill Amount: ₹ 19,80,40,000.`,
  },
  {
    id: 'doc-bill-ra31',
    name: 'RA_Bill_31_Contractor_Monthly_Bill_Aug2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\RA_Bill_31_Contractor_Monthly_Bill_Aug2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 3950000,
    createdDate: '2026-08-22T11:00:00Z',
    modifiedDate: '2026-08-28T14:30:00Z',
    isFolder: false,
    tags: ['RA Bill', 'Running Account Bill', 'August 2026'],
    contentFull: `RUNNING ACCOUNT BILL NO. 31 (RA BILL 31). Submitted by Contractor. Gross Claimed: ₹ 18,45,20,000. Includes GSB, DBM and Box Culvert barrel concrete.`,
  },
  {
    id: 'doc-bill-sub1',
    name: 'Subcontractor_Bill_Earthwork_Pkg2_Aug2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\Subcontractor_Bill_Earthwork_Pkg2_Aug2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 1650000,
    createdDate: '2026-08-25T15:00:00Z',
    modifiedDate: '2026-08-31T17:20:00Z',
    isFolder: false,
    tags: ['Subcontractor Bill', 'Earthwork', 'Excavation', 'Billing'],
    contentFull: `SUBCONTRACTOR RUNNING BILL - EARTHWORK & SUBGRADE PACKAGE
Subcontractor: M/s Shiva Earthmovers Pvt Ltd.
Chainage: Ch 148+000 to Ch 162+000. Embankment filling 62,400 cum, Subgrade compaction 28,100 cum. Net payable ₹ 1,42,80,000.`,
  },
  {
    id: 'doc-bill-sub2',
    name: 'Subcontractor_Bill_Structural_Concrete_Flyover_Aug2026.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\Subcontractor_Bill_Structural_Concrete_Flyover_Aug2026.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 1820000,
    createdDate: '2026-08-26T16:00:00Z',
    modifiedDate: '2026-09-02T11:45:00Z',
    isFolder: false,
    tags: ['Subcontractor Bill', 'Concrete', 'Flyover', 'Structures'],
    contentFull: `SUBCONTRACTOR BILL - FLYOVER & VUP STRUCTURES
Subcontractor: M/s Landmark Infra Structures. Pier P1 to P8 casting, Pier caps, Bearings installation. Certified Amount ₹ 2,15,40,000.`,
  },
  {
    id: 'doc-bill-meas1',
    name: 'Joint_Measurement_Sheet_Ch140_to_155_Earthwork.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\Joint_Measurement_Sheet_Ch140_to_155_Earthwork.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 5120000,
    createdDate: '2026-08-18T10:00:00Z',
    modifiedDate: '2026-08-24T18:15:00Z',
    isFolder: false,
    tags: ['Measurement Sheet', 'Joint Measurement', 'Level Book', 'Earthwork', 'Chainage'],
    contentFull: `JOINT MEASUREMENT SHEET - CROSS-SECTION LEVEL BOOK
Chainage 140+000 to 155+000 (Both Carriageways LHS & RHS).
Original Ground Levels (OGL), Final Subgrade Levels (FSL). Level measurements recorded jointly by Contractor Quality Engineer and Independent Engineer Assistant Resident Engineer. Total computed volume: 384,200 m³.`,
  },
  {
    id: 'doc-bill-meas2',
    name: 'Measurement_Sheet_Crust_Thickness_Core_Records.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices\\Measurement_Sheet_Crust_Thickness_Core_Records.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\03_Billing_and_Invoices',
    category: 'excel',
    size: 2480000,
    createdDate: '2026-08-20T14:00:00Z',
    modifiedDate: '2026-09-12T16:00:00Z',
    isFolder: false,
    tags: ['Measurement Sheet', 'Crust Thickness', 'Core Cutter', 'DBM', 'BC', 'Quality'],
    contentFull: `MEASUREMENT SHEET & CORE TEST RECORD FOR BITUMINOUS CRUST
Bituminous Concrete core thickness verification at 50m intervals. Average thickness obtained: 41.2mm (Specified: 40mm).
Dense Bituminous Macadam (DBM) core average thickness: 152.4mm (Specified: 150mm). Core density complies with MoRTH Clause 507.`,
  },

  // 04 CONTRACTS AND AGREEMENTS
  {
    id: 'doc-con-1',
    name: 'Concession_Agreement_NH48_EPC_Contract.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements\\Concession_Agreement_NH48_EPC_Contract.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements',
    category: 'pdf',
    size: 28400000,
    createdDate: '2024-01-05T11:00:00Z',
    modifiedDate: '2024-01-08T15:00:00Z',
    isFolder: false,
    tags: ['Contract', 'Agreement', 'EPC', 'Concession', 'Clauses', 'NHAI'],
    metadata: {
      'Contract Value': '₹ 1,480.25 Crores',
      'Construction Period': '910 Days',
      'Appointed Date': '15/02/2024',
    },
    contentFull: `ENGINEERING, PROCUREMENT AND CONSTRUCTION (EPC) AGREEMENT
Between National Highways Authority of India (Authority) and ABC Infrastructure Limited (Contractor).
Article 4: Conditions Precedent.
Article 8: Right of Way (ROW) - Authority shall provide at least 90% encumbrance-free Right of Way on the Appointed Date.
Article 10: Extension of Time - If the Contractor is delayed by reason of Authority Default or Force Majeure, Contractor shall be entitled to an extension of time.
Article 13: Change of Scope (Variation) - Authority may require additions or modifications within 10% of Contract Price.
Article 26: Dispute Resolution Mechanism - Conciliation and Arbitration under Arbitration and Conciliation Act 1996.`,
  },
  {
    id: 'doc-con-2',
    name: 'Tripartite_Escrow_Agreement_SBI_NHAI_Contractor.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements\\Tripartite_Escrow_Agreement_SBI_NHAI_Contractor.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements',
    category: 'pdf',
    size: 5400000,
    createdDate: '2024-01-10T12:00:00Z',
    modifiedDate: '2024-01-12T10:00:00Z',
    isFolder: false,
    tags: ['Agreement', 'Escrow', 'Banking', 'Contract'],
    contentFull: `TRIPARTITE ESCROW AGREEMENT with State Bank of India (Escrow Bank), NHAI, and ABC Infrastructure Ltd. Operation of project escrow account and waterfall mechanism.`,
  },
  {
    id: 'doc-con-3',
    name: 'Contract_Performance_Bank_Guarantee_Valid_2027.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements\\Contract_Performance_Bank_Guarantee_Valid_2027.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements',
    category: 'pdf',
    size: 3200000,
    createdDate: '2024-01-12T14:00:00Z',
    modifiedDate: '2026-01-15T09:00:00Z',
    isFolder: false,
    tags: ['Bank Guarantee', 'PBG', 'Contract', 'Financial'],
    contentFull: `IRREVOCABLE PERFORMANCE SECURITY BANK GUARANTEE. Amount: ₹ 74,01,25,000 (5% of Contract Price). Issued by HDFC Bank Ltd, valid up to 30th September 2027.`,
  },
  {
    id: 'doc-con-4',
    name: 'MoRTH_Circular_Escalation_Price_Indices_2026.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements\\MoRTH_Circular_Escalation_Price_Indices_2026.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\04_Contracts_and_Agreements',
    category: 'pdf',
    size: 2100000,
    createdDate: '2026-03-01T10:00:00Z',
    modifiedDate: '2026-04-12T10:00:00Z',
    isFolder: false,
    tags: ['MoRTH', 'Escalation', 'Circular', 'WPI', 'Bitumen', 'Cement'],
    contentFull: `MINISTRY OF ROAD TRANSPORT & HIGHWAYS CIRCULAR NO. RW/NH-33044/2026-S&R(P&B). Price escalation formula and publication of wholesale price index (WPI) for highway contracts.`,
  },

  // 05 CORRESPONDENCE AND LETTERS (Crucial: Letter_234.pdf with Extension of Time 342 days!)
  {
    id: 'doc-corr-234',
    name: 'Letter_234_Contractor_to_NHAI_EOT_Claim_Notice.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters\\Letter_234_Contractor_to_NHAI_EOT_Claim_Notice.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    category: 'pdf',
    size: 2450000,
    createdDate: '2026-08-10T10:30:00Z',
    modifiedDate: '2026-09-18T14:20:00Z',
    isFolder: false,
    tags: ['Correspondence', 'Letter', 'EOT', 'Extension of Time', 'Notice', 'Claims', 'NHAI'],
    metadata: {
      'Letter Ref': 'ABC/NH48/EOT/2026/234',
      'Subject': 'Extension of Time Claim',
      'Days Claimed': '342 Days',
      'Addressee': 'Project Director, NHAI PIU',
    },
    contentFull: `LETTER REF: ABC/NH48/EOT/2026/234
Date: 18th September 2026
To:
The Project Director,
Project Implementation Unit (PIU),
National Highways Authority of India (NHAI).

Subject: Six-Laning of NH-48 from Km 140+000 to Km 195+500 - Formal request for Extension of Time of 342 days due to delay in handing over of encumbrance-free Right of Way (ROW) and shifting of public utilities.

Ref:
1. EPC Agreement dated 15/01/2024
2. Monthly Progress Reports (MPR) #01 to #31
3. Contractor letter ABC/NH48/ROW/2025/112 dated 14/05/2025

Dear Sir,
In terms of Article 10 of the EPC Agreement, we hereby submit our comprehensive claim and request for Extension of Time of 342 days (three hundred and forty-two days) for the completion of the project.

The major grounds for delay affecting the critical path of the project schedule are detailed below:
1. Delay in handing over 3H Right of Way (ROW) between Km 162+000 and Km 178+500 (affecting 16.5 km of main carriageway) by 284 days beyond the stipulated timeline in Schedule-A.
2. Delay in shifting of 110 kV High Tension electrical overhead lines by Maharashtra State Electricity Transmission Co. Ltd (MSETCL) at Ch 164+800 and Ch 182+100.
3. Tree felling permissions and stage-II forest clearances along the ghat section (Km 188+000 to 194+000).

Detailed Time Impact Analysis (TIA) prepared using Primavera P6 showing the critical path delay of 342 days is enclosed as Annexure-A. We request your prompt approval of interim extension to prevent imposition of liquidated damages.

Yours faithfully,
For ABC Infrastructure Ltd,
Chief Project Manager.`,
  },
  {
    id: 'doc-corr-235',
    name: 'Letter_235_IE_Recommendation_on_EOT_Interim_Approval.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters\\Letter_235_IE_Recommendation_on_EOT_Interim_Approval.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    category: 'pdf',
    size: 2180000,
    createdDate: '2026-09-12T14:00:00Z',
    modifiedDate: '2026-09-19T11:10:00Z',
    isFolder: false,
    tags: ['Correspondence', 'Letter', 'IE', 'EOT', 'Extension of Time', 'Recommendation'],
    contentFull: `INDEPENDENT ENGINEER LETTER REF: IE/NH48/EOT/2026/235.
Recommendation on Contractor's Extension of Time proposal of 342 days. Having reviewed the site handover records, the Independent Engineer confirms that 196 days of delay are attributable to NHAI ROW acquisition delays and recommends interim EOT of 180 days without penalty.`,
  },
  {
    id: 'doc-corr-236',
    name: 'Letter_236_NHAI_PD_Approval_Interim_EOT_180_Days.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters\\Letter_236_NHAI_PD_Approval_Interim_EOT_180_Days.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    category: 'pdf',
    size: 1950000,
    createdDate: '2026-09-20T10:00:00Z',
    modifiedDate: '2026-09-20T14:22:00Z',
    isFolder: false,
    tags: ['Correspondence', 'Letter', 'NHAI', 'EOT', 'Approval'],
    contentFull: `NHAI PIU LETTER: NHAI/PIU/NH48/2026/EOT/236. Approval of Interim Extension of Time for 180 days under Clause 10.3 of EPC Contract. Revised scheduled completion date shifted to 31/01/2027.`,
  },
  {
    id: 'doc-corr-189',
    name: 'Letter_189_Notice_of_Dispute_Clause_26_Dispute_Resolution.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters\\Letter_189_Notice_of_Dispute_Clause_26_Dispute_Resolution.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    category: 'word',
    size: 840000,
    createdDate: '2026-06-14T09:30:00Z',
    modifiedDate: '2026-06-18T16:00:00Z',
    isFolder: false,
    tags: ['Notice', 'Dispute', 'Clause 26', 'Contract', 'Arbitration'],
    contentFull: `FORMAL NOTICE OF DISPUTE UNDER ARTICLE 26.
Contractor raises dispute regarding wrongful deduction of ₹ 4.25 Crores towards alleged compaction deficiency at Ch 154+000 which was independently re-tested and certified by CRRI.`,
  },
  {
    id: 'doc-corr-cos3',
    name: 'Change_of_Scope_Proposal_CoS_03_Ch174_Foot_Overbridge.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters\\Change_of_Scope_Proposal_CoS_03_Ch174_Foot_Overbridge.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\05_Correspondence_and_Letters',
    category: 'word',
    size: 1120000,
    createdDate: '2026-05-10T14:00:00Z',
    modifiedDate: '2026-05-18T10:45:00Z',
    isFolder: false,
    tags: ['Change of Scope', 'CoS', 'Variation', 'FOB', 'Structures'],
    contentFull: `CHANGE OF SCOPE PROPOSAL NO. 03 (CoS-03)
Provision of Pedestrian Foot Overbridge (FOB) with ramp facilities at Ch 174+200 near rural school. Estimated cost: ₹ 2.45 Crores. Approved in principle by NHAI RO Pune.`,
  },

  // 06 ENGINEERING DRAWINGS & CAD (Plan & Profile, DWG, DXF)
  {
    id: 'doc-cad-pp1',
    name: 'P_and_P_Plan_Profile_Ch140_to_Ch155_Sheet_01.dwg',
    extension: 'dwg',
    path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD\\P_and_P_Plan_Profile_Ch140_to_Ch155_Sheet_01.dwg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD',
    category: 'cad',
    size: 32400000,
    createdDate: '2024-02-10T09:00:00Z',
    modifiedDate: '2026-06-12T17:00:00Z',
    isFolder: false,
    tags: ['CAD', 'DWG', 'Plan & Profile', 'P&P', 'Drawings', 'Alignment', 'Chainage'],
    metadata: {
      'Sheet Number': 'SH-01/14',
      'Scale': '1:2500 H / 1:250 V',
      'Chainage Range': 'Km 140+000 to Km 155+000',
      'Horizontal Radius': 'R = 1500m',
      'Max Gradient': '1.8%',
    },
    contentFull: `HIGHWAY PLAN AND PROFILE DRAWING (P&P) - SHEET 1 OF 14
Scale: Horizontal 1:2500, Vertical 1:250.
Chainage: Km 140+000 to Km 155+000.
Plan View: Horizontal curve at Ch 144+300, R=1500m, Transition curve length Ls=90m, Super-elevation 4.2%.
Right-of-Way boundary lines (60m ROW), Median width 5.0m, Carriageway 2 x 10.5m, Paved shoulder 2 x 1.5m, Earthen shoulder 2 x 2.0m.
Profile View: Existing ground level (OGL), proposed finished road level (FRL), vertical intersection point (VIP) at Ch 148+250, Elevation 284.50m.
Culverts located at Ch 141+200 (2x2 Box), Ch 143+850 (1x1.5 Pipe), Ch 151+400 (3x3 Box).`,
  },
  {
    id: 'doc-cad-pp2',
    name: 'P_and_P_Plan_Profile_Ch155_to_Ch170_Sheet_02.dwg',
    extension: 'dwg',
    path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD\\P_and_P_Plan_Profile_Ch155_to_Ch170_Sheet_02.dwg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD',
    category: 'cad',
    size: 34100000,
    createdDate: '2024-02-12T11:00:00Z',
    modifiedDate: '2026-07-18T14:30:00Z',
    isFolder: false,
    tags: ['CAD', 'DWG', 'Plan & Profile', 'P&P', 'Drawings'],
    contentFull: `HIGHWAY PLAN & PROFILE DRAWING - SHEET 2 OF 14. Chainage Km 155+000 to Km 170+000. Includes Toll Plaza layout at Km 168+200 with 16 lanes and weigh-in-motion (WIM) sensors.`,
  },
  {
    id: 'doc-cad-tcs',
    name: 'Typical_Cross_Section_TCS_1_Four_to_Six_Laning.dxf',
    extension: 'dxf',
    path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD\\Typical_Cross_Section_TCS_1_Four_to_Six_Laning.dxf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD',
    category: 'cad',
    size: 14200000,
    createdDate: '2024-01-25T14:00:00Z',
    modifiedDate: '2025-11-10T12:00:00Z',
    isFolder: false,
    tags: ['CAD', 'DXF', 'TCS', 'Cross Section', 'Drawings'],
    contentFull: `TYPICAL CROSS SECTION TCS-1 (CONCENTRIC 6-LANING WIDENING)
Shows eccentric and concentric widening details, sub-surface drains, median barrier, metal beam crash barrier, and slope protection.`,
  },
  {
    id: 'doc-cad-krishna',
    name: 'Major_Bridge_River_Krishna_General_Arrangement_Drawing_GAD.dwg',
    extension: 'dwg',
    path: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD\\Major_Bridge_River_Krishna_General_Arrangement_Drawing_GAD.dwg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\06_Engineering_Drawings_CAD',
    category: 'cad',
    size: 28900000,
    createdDate: '2024-03-01T10:00:00Z',
    modifiedDate: '2026-08-30T11:40:00Z',
    isFolder: false,
    tags: ['CAD', 'DWG', 'Bridge', 'GAD', 'Krishna River', 'Structures'],
    contentFull: `GENERAL ARRANGEMENT DRAWING (GAD) - MAJOR BRIDGE OVER KRISHNA RIVER
Length: 10 Spans of 45m each = 450m Total.
Superstructure: Post-tensioned Prestressed Concrete (PSC) Box Girders.
Substructure: Cast-in-situ RCC circular piers of 2.2m diameter on 1200mm dia bored piles socketed in hard basalt rock.`,
  },

  // 07 QA/QC, TESTING, MoRTH, IRC, METHOD STATEMENTS, NCR, RFI
  {
    id: 'doc-qa-morth',
    name: 'MoRTH_Specifications_Road_and_Bridge_Works_5th_Rev.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\MoRTH_Specifications_Road_and_Bridge_Works_5th_Rev.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'pdf',
    size: 45000000,
    createdDate: '2024-01-02T08:00:00Z',
    modifiedDate: '2024-01-02T08:00:00Z',
    isFolder: false,
    tags: ['MoRTH', 'Specifications', 'IRC', 'Standard', 'QA/QC', 'Quality', 'Codes'],
    metadata: {
      'Title': 'MoRTH 5th Revision',
      'Publisher': 'Indian Roads Congress (IRC)',
      'Scope': 'National Highway Works',
    },
    contentFull: `MINISTRY OF ROAD TRANSPORT & HIGHWAYS (MoRTH)
SPECIFICATIONS FOR ROAD AND BRIDGE WORKS (FIFTH REVISION)
Section 100: General
Section 200: Site Clearance
Section 300: Earthwork, Erosion Control and Drainage (Clause 305 Embankment and Subgrade compaction 98% MDD)
Section 400: Sub-Bases, Bases (Non-Bituminous) and Shoulders (Clause 401 GSB, Clause 406 Wet Mix Macadam)
Section 500: Bases and Surface Courses (Bituminous) (Clause 505 DBM, Clause 507 Bituminous Concrete, Marshall Stability > 12 kN)
Section 900: Quality Control for Road Works (Tolerance of surface levels, frequency of tests in Table 900-3 & 900-4)
Section 1000: Materials for Structures
Section 1100: Pile Foundations
Section 1500: Formwork
Section 1700: Structural Concrete.`,
  },
  {
    id: 'doc-qa-irc37',
    name: 'IRC_37_2018_Guidelines_for_Design_of_Flexible_Pavement.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\IRC_37_2018_Guidelines_for_Design_of_Flexible_Pavement.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'pdf',
    size: 16800000,
    createdDate: '2024-01-03T10:00:00Z',
    modifiedDate: '2024-01-03T10:00:00Z',
    isFolder: false,
    tags: ['IRC', 'IRC:37-2018', 'Pavement Design', 'Codes', 'IITPAVE'],
    contentFull: `INDIAN ROADS CONGRESS - IRC:37-2018
Guidelines for the Design of Flexible Pavements (Fourth Revision).
Design traffic calculations, vehicle damage factors, bottom-up fatigue cracking models, rutting models, cemented base and sub-base design.`,
  },
  {
    id: 'doc-qa-ms-dbm',
    name: 'Method_Statement_MS_01_DBM_Bituminous_Paving_Sensor_Paver.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\Method_Statement_MS_01_DBM_Bituminous_Paving_Sensor_Paver.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'word',
    size: 1450000,
    createdDate: '2024-04-10T11:00:00Z',
    modifiedDate: '2026-03-15T15:20:00Z',
    isFolder: false,
    tags: ['Method Statement', 'MS', 'DBM', 'Bituminous', 'Sensor Paver', 'QA/QC'],
    contentFull: `METHOD STATEMENT NO. MS-01: LAYING AND COMPACTION OF DENSE BITUMINOUS MACADAM (DBM)
1. Scope: Execution of 150mm DBM in two layers of 75mm each using VG-40 paving grade bitumen.
2. Equipment: Continuous Hot Mix Batch Plant 160 TPH, Electronic Sensor Paver with ski sensor, 8-10 Ton Tandem Steel Rollers, 15-25 Ton Pneumatic Tyre Rollers (PTR).
3. Temperature controls: Bitumen heating 150-165°C, Mix laying temperature minimum 140°C, Breakdown rolling starting at 135°C.
4. Compaction criteria: Density shall not be less than 99% of laboratory Marshall density.`,
  },
  {
    id: 'doc-qa-itp-bc',
    name: 'ITP_Inspection_and_Test_Plan_Asphalt_Concrete_BC.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\ITP_Inspection_and_Test_Plan_Asphalt_Concrete_BC.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'word',
    size: 980000,
    createdDate: '2024-04-15T14:00:00Z',
    modifiedDate: '2026-02-20T10:15:00Z',
    isFolder: false,
    tags: ['ITP', 'Inspection Test Plan', 'QA/QC', 'Bituminous Concrete', 'Testing'],
    contentFull: `INSPECTION & TEST PLAN (ITP) - BITUMINOUS CONCRETE (BC)
Hold points and witness points:
1. Aggregate gradation check (Every 100 MT) - Contractor QC (Performs), IE (Witnesses)
2. Bitumen binder content by Soxhlet extraction (2 tests per 200 MT) - Hold Point
3. Laying temperature and mat thickness - 100% continuous monitoring
4. Core cutting for density and thickness (1 core per 700 m²) - Joint testing with IE.`,
  },
  {
    id: 'doc-qa-ncr42',
    name: 'NCR_42_Bituminous_Layer_Temperature_Non_Conformance.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\NCR_42_Bituminous_Layer_Temperature_Non_Conformance.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'pdf',
    size: 1540000,
    createdDate: '2026-09-08T16:00:00Z',
    modifiedDate: '2026-09-15T11:20:00Z',
    isFolder: false,
    tags: ['NCR', 'Non Conformance Report', 'QA/QC', 'Quality', 'Temperature', 'MoRTH'],
    metadata: {
      'NCR No': 'NCR-42',
      'Location': 'Km 156+400 to Km 156+750 RHS',
      'Status': 'Closed with Rectification',
    },
    contentFull: `NON-CONFORMANCE REPORT (NCR) NO. 42
Issued by: Independent Engineer (M/s Mott MacDonald JV).
Contractor: ABC Infrastructure Ltd.
Date of Issue: 08/09/2026.
Description of Non-Conformance: DBM bituminous mix delivered at site at 126°C, below the mandatory MoRTH Table 500-2 minimum laying temperature of 140°C. Contractor continued rolling despite verbal warning.
Root Cause: Breakdown of dumper in transit from hot mix plant at Km 142.
Corrective Action & Disposition: The entire affected stretch of 350 meters milled out and relaid with fresh mix under IE supervision. NCR Closed on 15/09/2026.`,
  },
  {
    id: 'doc-qa-ncr43',
    name: 'NCR_43_Subgrade_Field_Density_Compaction_Deficiency.pdf',
    extension: 'pdf',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\NCR_43_Subgrade_Field_Density_Compaction_Deficiency.pdf',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'pdf',
    size: 1320000,
    createdDate: '2026-09-14T11:00:00Z',
    modifiedDate: '2026-09-20T17:00:00Z',
    isFolder: false,
    tags: ['NCR', 'Non Conformance', 'Subgrade', 'Compaction', 'Density', 'QA/QC'],
    contentFull: `NON-CONFORMANCE REPORT NCR-43. Subgrade layer 3 between Ch 171+200 and 171+600 achieved 95.8% MDD against required 97% MDD. Scarified, moisture adjusted to OMC +1%, and re-rolled with 12-ton vibratory padfoot roller.`,
  },
  {
    id: 'doc-qa-rfi542',
    name: 'RFI_542_Inspection_of_Subgrade_Top_Layer_Ch154_to_156.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\RFI_542_Inspection_of_Subgrade_Top_Layer_Ch154_to_156.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'word',
    size: 720000,
    createdDate: '2026-09-21T09:00:00Z',
    modifiedDate: '2026-09-21T18:00:00Z',
    isFolder: false,
    tags: ['RFI', 'Request for Inspection', 'Subgrade', 'QA/QC', 'Inspection'],
    contentFull: `REQUEST FOR INSPECTION (RFI) NO. 542
Activity: Inspection of Top of Subgrade (Layer-4) from Ch 154+000 to Ch 156+000 LHS.
Field Dry Density test results attached: 10 tests passed (average 98.4% MDD). Approved by ARE (Roads), Independent Engineer.`,
  },
  {
    id: 'doc-qa-rfi543',
    name: 'RFI_543_Pour_Card_Deck_Slab_Span_3_Krishna_Bridge.docx',
    extension: 'docx',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\RFI_543_Pour_Card_Deck_Slab_Span_3_Krishna_Bridge.docx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'word',
    size: 890000,
    createdDate: '2026-09-22T10:00:00Z',
    modifiedDate: '2026-09-23T15:10:00Z',
    isFolder: false,
    tags: ['RFI', 'Pour Card', 'Krishna River', 'Bridge', 'Concrete', 'Deck Slab'],
    contentFull: `REQUEST FOR INSPECTION RFI-543: Concrete Pour Card for Deck Slab Span-3, River Krishna Major Bridge. Grade M45, Volume 280 m³. Reinforcement spacing and cover clearance inspected and approved.`,
  },
  {
    id: 'doc-qa-qc-reg',
    name: 'Daily_QC_Test_Register_Soil_CBR_LL_PL_Proctor.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing\\Daily_QC_Test_Register_Soil_CBR_LL_PL_Proctor.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\07_QA_QC_and_Testing',
    category: 'excel',
    size: 6150000,
    createdDate: '2024-02-01T08:00:00Z',
    modifiedDate: '2026-09-22T16:00:00Z',
    isFolder: false,
    tags: ['QC Register', 'QA/QC', 'Soil', 'CBR', 'Atterberg', 'Proctor', 'Testing'],
    contentFull: `DAILY QUALITY CONTROL TEST REGISTER (SOIL & BORROW AREA)
Borrow area identification, Liquid Limit (LL < 40%), Plasticity Index (PI < 15%), Maximum Dry Density (MDD), Optimum Moisture Content (OMC), 4-day soaked CBR results.`,
  },

  // 08 BOQ AND RATE ANALYSIS
  {
    id: 'doc-boq-master',
    name: 'BOQ_Item_Rate_Master_Bill_of_Quantities_NH48.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis\\BOQ_Item_Rate_Master_Bill_of_Quantities_NH48.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis',
    category: 'excel',
    size: 7800000,
    createdDate: '2024-01-12T16:00:00Z',
    modifiedDate: '2026-07-15T18:00:00Z',
    isFolder: false,
    tags: ['BOQ', 'Bill of Quantities', 'Item Rate', 'Estimates', 'Abstracts', 'MoRTH Rates'],
    metadata: {
      'Total Items': '142',
      'Total Value': '₹ 1,480,25,00,000',
      'Schedule': 'Schedule-H',
    },
    contentFull: `MASTER BILL OF QUANTITIES (BOQ) - 6-LANING OF NH-48
Bill 1: Site Clearance and Dismantling (Clearing & grubbing 320 Hectares)
Bill 2: Earthwork (Roadway excavation in all types of soil 2,840,000 cum, Embankment filling 3,450,000 cum, Subgrade 840,000 cum)
Bill 3: Sub-Bases and Bases (Granular Sub-Base 410,000 cum, Wet Mix Macadam 365,000 cum)
Bill 4: Bituminous Courses (Prime coat 1,240,000 sqm, Tack coat 2,480,000 sqm, Dense Bituminous Macadam DBM 285,000 MT, Bituminous Concrete BC 192,000 MT)
Bill 5: Cross Drainage Structures (Box Culverts 112 Nos, Pipe Culverts 34 Nos)
Bill 6: Bridges & Flyovers (Cast-in-situ bored piles 1200mm dia 4,800 running meters, Structural steel reinforcement Fe 500D 18,400 MT, Concrete M35/M40/M45 92,000 cum)
Bill 7: Road Furniture & Safety (Metal beam crash barrier W-beam 110 km, Retro-reflective signage, Thermoplastic road marking paint).`,
  },
  {
    id: 'doc-boq-abstract',
    name: 'Abstract_of_Cost_Civil_Structures_and_Bridges.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis\\Abstract_of_Cost_Civil_Structures_and_Bridges.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis',
    category: 'excel',
    size: 2900000,
    createdDate: '2024-01-20T10:00:00Z',
    modifiedDate: '2026-06-10T14:30:00Z',
    isFolder: false,
    tags: ['Abstract', 'Cost Estimate', 'Structures', 'Bridges', 'BOQ'],
    contentFull: `ABSTRACT OF COST FOR STRUCTURES: River Krishna Major Bridge ₹ 84.5 Cr, 48 Minor Bridges ₹ 142.8 Cr, 112 Box Culverts ₹ 78.4 Cr, 4 VUPs ₹ 64.2 Cr. Total ₹ 369.9 Crores.`,
  },
  {
    id: 'doc-boq-escalation',
    name: 'Bitumen_Price_Variation_Escalation_Statement_IOCL.xlsx',
    extension: 'xlsx',
    path: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis\\Bitumen_Price_Variation_Escalation_Statement_IOCL.xlsx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\08_BOQ_and_Rate_Analysis',
    category: 'excel',
    size: 1950000,
    createdDate: '2026-02-15T11:00:00Z',
    modifiedDate: '2026-09-10T15:00:00Z',
    isFolder: false,
    tags: ['Bitumen', 'Price Escalation', 'Variation', 'IOCL', 'VG-40', 'Billing'],
    contentFull: `BITUMEN PRICE VARIATION STATEMENT AS PER INDIAN OIL CORPORATION (IOCL) MUMBAI REFINERY
Base price of Bulk Bitumen VG-40 on bid due date: ₹ 44,800/MT.
Current price in August 2026: ₹ 52,400/MT.
Price difference: + ₹ 7,600/MT. Escalation claimed in IPC-28: ₹ 67,64,000.`,
  },

  // 09 SITE PHOTOGRAPHS
  {
    id: 'doc-img-krishna',
    name: 'Site_Photo_Krishna_River_Major_Bridge_Pier_Cap_Casting.jpg',
    extension: 'jpg',
    path: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs\\Site_Photo_Krishna_River_Major_Bridge_Pier_Cap_Casting.jpg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs',
    category: 'images',
    size: 4200000,
    createdDate: '2026-09-14T11:30:00Z',
    modifiedDate: '2026-09-14T11:30:00Z',
    isFolder: false,
    tags: ['Site Photo', 'Krishna River', 'Bridge', 'Pier Cap', 'Concrete', 'Inspection'],
    metadata: {
      'Chainage': 'Km 152+800',
      'Structure': 'Major Bridge MBR-01 Pier P6',
      'Date Taken': '14/09/2026 11:30 AM',
    },
    contentFull: `SITE INSPECTION PHOTOGRAPH: Pier Cap Casting Pier P-6, Major Bridge on Krishna River at Km 152+800. Boom placer pump discharging M45 self-compacting concrete into pier cap shutters.`,
  },
  {
    id: 'doc-img-paving',
    name: 'Site_Photo_Bituminous_Concrete_Wearing_Course_Laying.jpg',
    extension: 'jpg',
    path: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs\\Site_Photo_Bituminous_Concrete_Wearing_Course_Laying.jpg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs',
    category: 'images',
    size: 5100000,
    createdDate: '2026-09-18T15:20:00Z',
    modifiedDate: '2026-09-18T15:20:00Z',
    isFolder: false,
    tags: ['Site Photo', 'Bituminous Concrete', 'Wearing Course', 'Paver', 'Paving'],
    metadata: {
      'Chainage': 'Km 146+200 RHS',
      'Temperature': '152 deg C',
    },
    contentFull: `SITE PHOTOGRAPH: Bituminous Concrete (BC) 40mm wearing course laying using Vogele Super 2100-3 sensor paver across 10.5m carriageway width with infrared heat cameras checking mat uniformity.`,
  },
  {
    id: 'doc-img-rewall',
    name: 'Site_Photo_Reinforced_Earth_RE_Wall_Facing_Panels_Ch162.jpg',
    extension: 'jpg',
    path: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs\\Site_Photo_Reinforced_Earth_RE_Wall_Facing_Panels_Ch162.jpg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs',
    category: 'images',
    size: 3800000,
    createdDate: '2026-08-28T09:40:00Z',
    modifiedDate: '2026-08-28T09:40:00Z',
    isFolder: false,
    tags: ['Site Photo', 'RE Wall', 'Reinforced Earth', 'Flyover Approach'],
    contentFull: `SITE PHOTOGRAPH: Reinforced Earth (RE) wall cruciform fascia panel erection and polymeric geogrid strip placement at Flyover Approach Km 162+300.`,
  },
  {
    id: 'doc-img-culvert',
    name: 'Site_Photo_Box_Culvert_Wing_Wall_Concrete_Ch148.jpg',
    extension: 'jpg',
    path: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs\\Site_Photo_Box_Culvert_Wing_Wall_Concrete_Ch148.jpg',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\09_Site_Photographs',
    category: 'images',
    size: 3400000,
    createdDate: '2026-08-15T16:10:00Z',
    modifiedDate: '2026-08-15T16:10:00Z',
    isFolder: false,
    tags: ['Site Photo', 'Box Culvert', 'Concrete', 'Culvert'],
    contentFull: `SITE PHOTOGRAPH: Completed 2x2.5m twin cell RCC Box Culvert with splayed wing walls and apron pitching at Ch 148+450.`,
  },

  // 10 PRESENTATIONS AND REVIEWS
  {
    id: 'doc-ppt-review',
    name: 'NHAI_Chairman_Quarterly_Review_Presentation_Q2_2026.pptx',
    extension: 'pptx',
    path: 'D:\\NH-48_Six_Laning_Project\\10_Presentations_and_Reviews\\NHAI_Chairman_Quarterly_Review_Presentation_Q2_2026.pptx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\10_Presentations_and_Reviews',
    category: 'ppt',
    size: 18500000,
    createdDate: '2026-06-28T14:00:00Z',
    modifiedDate: '2026-07-02T10:30:00Z',
    isFolder: false,
    tags: ['Presentation', 'PPT', 'Quarterly Review', 'NHAI', 'Milestone', 'Highway'],
    contentFull: `HIGHWAY PROJECT PERFORMANCE REVIEW PRESENTATION
Q2 2026 Review before Member (Projects), NHAI HQ New Delhi.
Slide 1: Project At a Glance (55.5 Km 6-laning NH-48).
Slide 2: Physical & Financial Achievement against Bharat Mala Targets.
Slide 3: Right of Way (ROW) Status & Pending 3H Land Acquisition Notifications.
Slide 4: Major Bridge Construction Status & River Training Works.
Slide 5: Toll Plaza Implementation, FASTag electronic toll collection infrastructure.`,
  },
  {
    id: 'doc-ppt-safety',
    name: 'Safety_Audit_Stage_3_Road_Safety_Presentation.pptx',
    extension: 'pptx',
    path: 'D:\\NH-48_Six_Laning_Project\\10_Presentations_and_Reviews\\Safety_Audit_Stage_3_Road_Safety_Presentation.pptx',
    parentPath: 'D:\\NH-48_Six_Laning_Project\\10_Presentations_and_Reviews',
    category: 'ppt',
    size: 12400000,
    createdDate: '2026-08-10T11:00:00Z',
    modifiedDate: '2026-08-14T17:00:00Z',
    isFolder: false,
    tags: ['Presentation', 'Safety Audit', 'Traffic', 'Signage'],
    contentFull: `ROAD SAFETY AUDIT (STAGE-3: DURING CONSTRUCTION)
Blackspot identification, work zone traffic management plan, diversion signage, solar blinkers and retro-reflective delineators.`,
  },

  // C:\ DRIVE FILES (Engineer's drafts)
  {
    id: 'f-c-drafts',
    name: 'Highway_Drafts',
    extension: '',
    path: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts',
    parentPath: 'C:\\Users\\ProjectEngineer\\Documents',
    category: 'folder',
    size: 0,
    createdDate: '2025-03-01T09:00:00Z',
    modifiedDate: '2026-09-24T18:00:00Z',
    isFolder: true,
    itemCount: 4,
  },
  {
    id: 'doc-c-draft-eot',
    name: 'Draft_EOT_Calculation_Spreadsheet_Primavera_Analysis.xlsx',
    extension: 'xlsx',
    path: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts\\Draft_EOT_Calculation_Spreadsheet_Primavera_Analysis.xlsx',
    parentPath: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts',
    category: 'excel',
    size: 3100000,
    createdDate: '2026-08-05T14:20:00Z',
    modifiedDate: '2026-09-17T19:30:00Z',
    isFolder: false,
    tags: ['EOT', 'Extension of Time', 'Draft', 'Primavera', 'Time Impact Analysis'],
    contentFull: `INTERNAL DRAFT: Extension of Time delay computation model. Total cumulative delay claimed 342 days. Critical path analysis comparing Baseline Schedule vs As-Built Schedule.`,
  },
  {
    id: 'doc-c-draft-notes',
    name: 'Site_Meeting_Notes_With_Independent_Engineer_Sept2026.docx',
    extension: 'docx',
    path: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts\\Site_Meeting_Notes_With_Independent_Engineer_Sept2026.docx',
    parentPath: 'C:\\Users\\ProjectEngineer\\Documents\\Highway_Drafts',
    category: 'word',
    size: 580000,
    createdDate: '2026-09-20T17:00:00Z',
    modifiedDate: '2026-09-21T08:30:00Z',
    isFolder: false,
    tags: ['Meeting Notes', 'IE', 'Independent Engineer', 'Site', 'Discussions'],
    contentFull: `MINUTES OF WEEKLY PROGRESS REVIEW MEETING HELD AT IE SITE CAMP
Date: 20th September 2026. Attended by Team Leader IE, Project Director NHAI, CPM Contractor. Discussion on IPC-28 certification and EOT claim.`,
  },

  // E:\ DRIVE FILES (CAD & Drone Archive)
  {
    id: 'f-e-drone',
    name: 'LiDAR_Drone_Surveys_and_Alignment_CAD',
    extension: '',
    path: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD',
    parentPath: 'E:',
    category: 'folder',
    size: 0,
    createdDate: '2024-03-15T10:00:00Z',
    modifiedDate: '2026-08-20T16:00:00Z',
    isFolder: true,
    itemCount: 3,
  },
  {
    id: 'doc-e-lidar-dwg',
    name: 'LiDAR_Drone_Survey_Digital_Terrain_Model_DTM_NH48.dwg',
    extension: 'dwg',
    path: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD\\LiDAR_Drone_Survey_Digital_Terrain_Model_DTM_NH48.dwg',
    parentPath: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD',
    category: 'cad',
    size: 84000000,
    createdDate: '2024-04-10T12:00:00Z',
    modifiedDate: '2026-05-18T14:15:00Z',
    isFolder: false,
    tags: ['CAD', 'DWG', 'LiDAR', 'Drone Survey', 'DTM', 'Contours', 'Point Cloud'],
    contentFull: `AERIAL LIDAR DRONE SURVEY - DIGITAL TERRAIN MODEL (DTM) & 3D CONTOURS
Full 55.5 Km highway corridor 3D point cloud, contour intervals 0.5m, orthomosaic aerial imagery resolution 2.5cm/pixel, ground control points (GCP) tied to Survey of India GTS benchmarks.`,
  },
  {
    id: 'doc-e-profile-culvert',
    name: 'Culvert_Schedule_and_Cross_Drainage_Longitudinal_Profiles.dwg',
    extension: 'dwg',
    path: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD\\Culvert_Schedule_and_Cross_Drainage_Longitudinal_Profiles.dwg',
    parentPath: 'E:\\LiDAR_Drone_Surveys_and_Alignment_CAD',
    category: 'cad',
    size: 26500000,
    createdDate: '2024-05-12T09:30:00Z',
    modifiedDate: '2026-06-25T11:00:00Z',
    isFolder: false,
    tags: ['CAD', 'DWG', 'Culverts', 'Drainage', 'Profile'],
    contentFull: `LONGITUDINAL PROFILE DRAWING OF 112 BOX CULVERTS. Invert levels, bed slope, barrel length, cushioning over culvert slab, headwall details.`,
  },
];
