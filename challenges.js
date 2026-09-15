/**
 * TechBridge Platform - Interactive Challenge Hub
 * Task 5: Build a TechBridge Challenge Section
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * 
 * Demonstrates:
 *  1. 30-Day Spanning Challenge Curriculum (20 challenges: 10 Data Analytics + 10 Web Development)
 *  2. Dual-level filtering: Track (All, Data Analytics, Web Development) + Difficulty (All, Beginner, Intermediate, Advanced)
 *  3. Real-time keyword search across titles, descriptions, and skills
 *  4. In-depth interactive modal popup with full challenge brief without page reload
 *  5. Dynamic counters and empty state with one-click filter reset
 *  6. Keyboard accessibility (ESC to close, Tab focus, ARIA attributes)
 */

// ============================================================================
// 1. DATASET: 20 Practical Challenges Spanning the 30-Day Internship
// ============================================================================
const challengesData = [
  // --------------------------------------------------------------------------
  // DATA ANALYTICS TRACK (10 Challenges spanning Days 1 to 30)
  // --------------------------------------------------------------------------
  {
    id: 'da-01',
    title: 'Retail Store Sales Data Cleaning',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 2',
    dayNumber: 2,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    estimatedTime: '2–3 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    shortDesc: 'Identify and repair duplicate transaction records, blank cells, inconsistent date formats, and corrupted currency values in a retail dataset.',
    expectedOutcome: 'Produce an audit-ready, standardized spreadsheet free of duplicate entries, trailing whitespace, and formatting discrepancies.',
    objective: 'Transform a messy, simulated 1,500-row retail transaction dump into a clean, analysis-ready dataset adhering to institutional data hygiene standards.',
    skills: ['Data Hygiene', 'Spreadsheet Cleaning', 'Text Functions (TRIM, PROPER)', 'Deduplication', 'Data Type Standardization'],
    tools: ['Google Sheets', 'Microsoft Excel', 'Data Validation Rules'],
    deliverables: [
      'Master cleaned spreadsheet with zero duplicate rows and unified header formatting.',
      'Documented cleaning change log detailing every transformation applied.',
      'Verification checks confirming numeric data types for quantities and prices.'
    ],
    expectedResult: 'A spotless, reliable spreadsheet ready for statistical formulas and pivot table aggregations.'
  },
  {
    id: 'da-02',
    title: 'Multi-Branch Revenue & Expense Analysis',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 5',
    dayNumber: 5,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    shortDesc: 'Use mathematical formulas, conditional logic (SUMIFS, COUNTIFS), and Pivot Tables to compare financial health across four store branches.',
    expectedOutcome: 'A comparative financial report highlighting top-performing branches, profit margins, and high-expense anomalies.',
    objective: 'Apply conditional spreadsheet calculations and pivot summary tables to calculate net profit margins, gross revenues, and operational efficiency across company regional branches.',
    skills: ['SUMIFS & COUNTIFS', 'AVERAGEIFS', 'Pivot Tables & Grouping', 'Profit Margin Calculations', 'Conditional Formatting'],
    tools: ['Google Sheets', 'Excel Pivot Engine', 'Financial Formula Models'],
    deliverables: [
      'Summary financial workbook featuring automated branch revenue calculations.',
      'Pivot table summarizing quarterly performance by product line and branch location.',
      'Conditional heat-map highlighting branches exceeding expense budgets.'
    ],
    expectedResult: 'An automated financial summary that answers key executive questions about branch profitability.'
  },
  {
    id: 'da-03',
    title: 'Customer Demographics & Behavior Segmentation',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 8',
    dayNumber: 8,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    shortDesc: 'Segment customer profiles into purchasing tiers based on age groups, order frequency, and average order value (AOV).',
    expectedOutcome: 'A visual segmentation analysis classifying customers into High-Value, Regular, and Dormant cohorts.',
    objective: 'Evaluate a customer demographic dataset to discover which age cohorts and geographical regions yield the highest lifetime purchase values.',
    skills: ['Customer Segmentation', 'Nested IF / IFS Logic', 'RFM Concept (Recency, Frequency, Monetary)', 'Data Binning', 'Cohort Analysis'],
    tools: ['Google Sheets', 'Microsoft Excel', 'Histogram Visualizations'],
    deliverables: [
      'Customer database enhanced with computed spending tiers and loyalty categories.',
      'Cross-tabulation pivot tables mapping age demographics against product preferences.',
      'Three actionable marketing recommendations based on segment behavior.'
    ],
    expectedResult: 'Clear customer personas supported by quantitative spending data for targeted campaigns.'
  },
  {
    id: 'da-04',
    title: 'Executive KPI Sales Performance Dashboard',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 11',
    dayNumber: 11,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    shortDesc: 'Design an interactive, professional spreadsheet dashboard communicating monthly revenue trends, top products, and regional targets.',
    expectedOutcome: 'An executive-ready visual dashboard complete with dynamic KPI scorecards and interactive slicers.',
    objective: 'Combine pivot charts, visual KPI scorecards, and interactive dropdown slicers into an intuitive dashboard that allows business stakeholders to filter insights by date and category.',
    skills: ['Dashboard UI Architecture', 'Data Storytelling', 'Dynamic Chart Formatting', 'Interactive Slicers', 'Scorecard Metrics (MoM, YoY)'],
    tools: ['Google Sheets Dashboard', 'Excel Charts', 'Visual Hierarchy Principles'],
    deliverables: [
      'Interactive executive dashboard sheet with 4 core KPI summary metric boxes.',
      'Time-series line chart tracking monthly revenue trajectory against targets.',
      'Category breakdown bar chart and regional sales contribution donut chart.',
      'Single-click slicers filtering all charts simultaneously.'
    ],
    expectedResult: 'A clean, intuitive visual control center presenting company performance at a glance.'
  },
  {
    id: 'da-05',
    title: 'Introduction to SQL Querying & Order Extraction',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 14',
    dayNumber: 14,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    shortDesc: 'Write fundamental SQL SELECT queries with WHERE filters, ORDER BY sorting, and LIMIT clauses to query an e-commerce order database.',
    expectedOutcome: 'A documented SQL script file containing structured queries that answer operational business questions.',
    objective: 'Extract specific subsets of customer order records from a relational database, filtering for high-value purchases, specific countries, and completed order statuses.',
    skills: ['SQL Fundamentals', 'SELECT & FROM Clauses', 'WHERE Filtering & Logical Operators (AND, OR, NOT)', 'ORDER BY & LIMIT', 'Relational Syntax'],
    tools: ['PostgreSQL / SQLite / MySQL', 'DBeaver / pgAdmin', 'SQL Editor'],
    deliverables: [
      'Documented .sql query file answering 6 distinct operational business prompts.',
      'Filtered query results exported to CSV verifying accurate data extraction.',
      'Written commentary explaining query execution flow and filtering logic.'
    ],
    expectedResult: 'Validated SQL queries successfully retrieving precision subsets from relational tables.'
  },
  {
    id: 'da-06',
    title: 'Multi-Table SQL Joins & Product Sales Aggregations',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 17',
    dayNumber: 17,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>`,
    shortDesc: 'Execute INNER and LEFT JOINs across customers, orders, and products tables with GROUP BY and aggregate functions (SUM, AVG, COUNT).',
    expectedOutcome: 'Comprehensive relational queries revealing total customer spend, popular categories, and top customer loyalty metrics.',
    objective: 'Connect multiple relational tables to uncover end-to-end purchasing journeys, evaluating total revenue generated per product category and customer retention frequency.',
    skills: ['INNER JOIN & LEFT JOIN', 'GROUP BY & HAVING Clauses', 'Aggregate Functions (SUM, COUNT, AVG)', 'Table Aliases', 'Relational Integrity'],
    tools: ['PostgreSQL / SQLite', 'SQL Client', 'Database Diagram Tools'],
    deliverables: [
      'Multi-table join query calculating total units sold and revenue per brand.',
      'Customer lifetime value query using LEFT JOIN to retain non-purchasing accounts.',
      'HAVING filter isolating high-spending client accounts over $2,500.'
    ],
    expectedResult: 'Seamless cross-table reporting synthesizing transactional and master data.'
  },
  {
    id: 'da-07',
    title: 'Supply Chain Inventory Wrangling with XLOOKUP',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 20',
    dayNumber: 20,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>`,
    shortDesc: 'Merge supplier cost sheets, warehouse stock levels, and store re-order thresholds using modern XLOOKUP and IFERROR handling.',
    expectedOutcome: 'An integrated inventory tracker automatically identifying out-of-stock risks and calculating reorder replenishment costs.',
    objective: 'Harmonize separate inventory datasets with inconsistent product SKU naming formats to compute stock valuation and critical reorder lead times.',
    skills: ['XLOOKUP & VLOOKUP', 'INDEX & MATCH', 'Error Handling (IFERROR)', 'Data Validation Lists', 'Stock Replenishment Logic'],
    tools: ['Google Sheets', 'Excel Dynamic Arrays', 'Inventory Models'],
    deliverables: [
      'Unified inventory sheet dynamically retrieving supplier pricing via XLOOKUP.',
      'Re-order status indicator flagging items beneath safety buffer levels.',
      'Automated replenishment purchase order cost estimation model.'
    ],
    expectedResult: 'A zero-error master inventory workbook providing real-time stock visibility.'
  },
  {
    id: 'da-08',
    title: 'SaaS Customer Churn & Retention Analytics',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 23',
    dayNumber: 23,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>`,
    shortDesc: 'Analyze subscription renewal data, calculate churn rates across subscription plans, and identify early churn warning signals.',
    expectedOutcome: 'A churn analysis presentation complete with churn driver identification and mitigation strategies.',
    objective: 'Investigate 2,000 SaaS customer subscription records to uncover why subscribers cancel, correlating contract tenure, support tickets, and pricing plans.',
    skills: ['Churn Rate Formula Modeling', 'Tenure Distribution', 'Correlation Analysis', 'Executive Reporting', 'Strategic Recommendations'],
    tools: ['Google Sheets / Excel', 'Cohort Retention Grids', 'Business Slides Deck'],
    deliverables: [
      'Calculated Monthly Recurring Revenue (MRR) and Gross Churn Percentage model.',
      'Correlation matrix linking support ticket response times to cancellation probability.',
      'Executive summary presentation detailing 3 high-impact customer retention levers.'
    ],
    expectedResult: 'Data-driven insights explaining customer attrition with strategic recommendations for retention.'
  },
  {
    id: 'da-09',
    title: 'End-to-End E-Commerce Performance Deep-Dive',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 26',
    dayNumber: 26,
    difficulty: 'Advanced',
    difficultyClass: 'diff-advanced',
    estimatedTime: '5–6 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    shortDesc: 'Execute a full analysis cycle: SQL extraction from multi-table order databases, spreadsheet modeling, and an executive dashboard presentation.',
    expectedOutcome: 'A complete end-to-end analytical project portfolio piece with business recommendations.',
    objective: 'Simulate a senior junior analyst role: pull raw data from a database with complex joins, clean and structure in spreadsheets, synthesize trends, and deliver an executive report.',
    skills: ['Full Analytics Lifecycle', 'Advanced SQL Joins & Subqueries', 'Statistical Spreadsheets', 'Visual Storytelling', 'Executive Stakeholder Pitch'],
    tools: ['SQL Database', 'Excel / Sheets Engine', 'Presentation Software'],
    deliverables: [
      'Documented SQL extraction script joining customers, orders, payments, and reviews.',
      'Analytical modeling workbook computing customer acquisition cost vs. lifetime value.',
      'Interactive visual dashboard summarizing key revenue and satisfaction KPIs.',
      'Executive report with strategic recommendations for product catalog expansion.'
    ],
    expectedResult: 'A comprehensive, interview-ready analytical case study ready for a professional portfolio.'
  },
  {
    id: 'da-10',
    title: 'Enterprise Business Intelligence Capstone',
    track: 'analytics',
    trackLabel: 'Data Analytics',
    trackCode: 'DA-30',
    day: 'Day 30',
    dayNumber: 30,
    difficulty: 'Advanced',
    difficultyClass: 'diff-advanced',
    estimatedTime: '6–8 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    shortDesc: 'The final 30-day capstone: architect an enterprise-grade analytics suite answering strategic questions for senior leadership.',
    expectedOutcome: 'A definitive capstone portfolio project combining multi-table database extraction, complex modeling, and executive dashboarding.',
    objective: 'Demonstrate total mastery of the 30-day TechBridge Data Analytics curriculum by solving a complex business turnaround scenario using spreadsheets, SQL, and data visualization.',
    skills: ['Enterprise Analytics', 'Relational Schema Design', 'Complex SQL Aggregations', 'Forecasting & Trend Modeling', 'Strategic Decision Support'],
    tools: ['Relational Database (SQL)', 'Advanced Spreadsheets', 'Executive Dashboard', 'Portfolio Showcase'],
    deliverables: [
      'Comprehensive SQL script repository with normalized table structures and queries.',
      'Multi-sheet financial and operational forecast model with scenario toggles.',
      'High-impact executive dashboard presenting operational metrics and forecasts.',
      'Formal capstone presentation deck justifying data-backed business transformations.'
    ],
    expectedResult: 'A premier capstone project proving job-ready data analytics capability for modern industry roles.'
  },

  // --------------------------------------------------------------------------
  // WEB DEVELOPMENT TRACK (10 Challenges spanning Days 1 to 30)
  // --------------------------------------------------------------------------
  {
    id: 'wd-01',
    title: 'Modern Startup Landing Page with Semantic HTML5 & CSS3',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 2',
    dayNumber: 2,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    estimatedTime: '2–3 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    shortDesc: 'Build a sleek, high-converting product landing page using semantic HTML5 elements, CSS Flexbox layouts, and custom typography.',
    expectedOutcome: 'A fully responsive startup landing page with hero banner, feature highlights, and call-to-action sections.',
    objective: 'Implement standard web design principles to create an engaging homepage featuring a sticky header, hero callout, feature cards, and accessible navigation.',
    skills: ['HTML5 Semantic Elements', 'CSS Flexbox Layouts', 'Typography & Spacing', 'Color Schemes & Variables', 'Responsive Viewports'],
    tools: ['VS Code / Editor', 'HTML5 & CSS3', 'Modern Web Browser'],
    deliverables: [
      'Structured index.html using header, main, section, and footer elements.',
      'Modular style.css defining custom CSS variables for color tokens and typography.',
      'Responsive navigation bar that adapts gracefully down to mobile screens.'
    ],
    expectedResult: 'A polished, modern landing page ready to showcase real products or organizations.'
  },
  {
    id: 'wd-02',
    title: 'Developer Portfolio Website with Dynamic Theme & Project Grid',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 5',
    dayNumber: 5,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
    shortDesc: 'Create a personal developer portfolio featuring an introduction bio, interactive skills badge showcase, and a responsive CSS Grid project gallery.',
    expectedOutcome: 'A professional online resume website showcasing your practical projects, technical proficiencies, and contact information.',
    objective: 'Build a portfolio platform that establishes developer credibility, highlighting project links, technologies utilized, and personal milestones.',
    skills: ['CSS Grid Layouts', 'Card Component Design', 'Hover Micro-Interactions', 'Image Optimization', 'Semantic Portfolio Markup'],
    tools: ['HTML5', 'CSS3 Grid', 'Git & GitHub Pages'],
    deliverables: [
      'Interactive project gallery using CSS Grid auto-fit and minmax layout.',
      'Skills chip list categorizing frontend, backend, and database proficiencies.',
      'Mobile-friendly about me section with social and repository links.'
    ],
    expectedResult: 'An attractive personal developer website ready to share with potential employers.'
  },
  {
    id: 'wd-03',
    title: 'Interactive Contact Form with Validation & Feedback UI',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 8',
    dayNumber: 8,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '3–4 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    shortDesc: 'Build an accessible web contact form with real-time field validation, error alerts, floating labels, and a submission confirmation screen.',
    expectedOutcome: 'A robust user feedback form that prevents invalid submissions and guides users with clear validation indicators.',
    objective: 'Implement client-side form validation using HTML5 constraints and JavaScript event listeners to verify emails, required fields, and message lengths.',
    skills: ['Form Input Handling', 'JavaScript Event Listeners', 'Regex Pattern Matching', 'Accessible Form Attributes (ARIA)', 'DOM Error Manipulation'],
    tools: ['HTML5 Forms', 'CSS Input Styling', 'Vanilla JavaScript'],
    deliverables: [
      'Accessible form with labels, placeholders, aria-describedby error spans.',
      'JavaScript validation script catching empty inputs and invalid email formats.',
      'Smooth submission modal confirming received messages without page reload.'
    ],
    expectedResult: 'A seamless, friction-free contact form providing immediate, helpful user feedback.'
  },
  {
    id: 'wd-04',
    title: 'Responsive E-Commerce Product Showcase & Filter System',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 11',
    dayNumber: 11,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`,
    shortDesc: 'Create a dynamic product catalog page where visitors can filter items by category, price range, and sort by rating in real-time.',
    expectedOutcome: 'An interactive product catalog that filters and re-renders product cards dynamically without browser reload.',
    objective: 'Manage an array of product objects in JavaScript and update the DOM dynamically based on category buttons, search keywords, and price sliders.',
    skills: ['JavaScript Array Methods (filter, sort, map)', 'DOM Card Generation', 'State Management', 'Event Delegation', 'Responsive Catalog Grid'],
    tools: ['Vanilla JavaScript (ES6)', 'CSS Flexbox & Grid', 'HTML5 Templates'],
    deliverables: [
      'JavaScript dataset containing 12 structured product catalog objects.',
      'Category filter buttons and dynamic price slider updating the grid instantly.',
      'Empty state message displayed when no products match applied filters.'
    ],
    expectedResult: 'A responsive e-commerce product exploration experience matching modern retail standards.'
  },
  {
    id: 'wd-05',
    title: 'Interactive Personal Expense & Budget Tracker',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 14',
    dayNumber: 14,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    shortDesc: 'Develop a personal finance web app allowing users to add transactions, categorize income vs. expenses, and view remaining budget balances.',
    expectedOutcome: 'A functional budget calculator web app with real-time balance totals, transaction history list, and item deletion capability.',
    objective: 'Build an interactive CRUD (Create, Read, Delete) application in JavaScript that tracks financial entries and persists state in the browser.',
    skills: ['DOM CRUD Operations', 'State Calculations (reduce, filter)', 'Local Storage Persistence', 'Input Sanitization', 'Number Formatting'],
    tools: ['Vanilla JavaScript', 'Browser LocalStorage API', 'CSS Dashboard Styles'],
    deliverables: [
      'Transaction input form with amount, category dropdown, and date picker.',
      'Dynamic balance banner displaying Total Income, Total Expenses, and Net Balance.',
      'Interactive transaction history list with individual delete buttons and persistent storage.'
    ],
    expectedResult: 'A handy budget web utility that calculates totals in real time and retains entries upon refresh.'
  },
  {
    id: 'wd-06',
    title: 'Dynamic Quiz & Knowledge Assessment Web App',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 17',
    dayNumber: 17,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
    shortDesc: 'Construct an interactive timed quiz game featuring multiple-choice questions, score counters, instant feedback, and a summary results screen.',
    expectedOutcome: 'A multi-step knowledge quiz web app with progress bar, question timer, and final certificate evaluation.',
    objective: 'Manage state transitions through a sequence of questions, checking user selections against correct keys and presenting instant visual feedback.',
    skills: ['State Machine Logic', 'Timing Functions (setInterval, clearInterval)', 'Dynamic Score Computation', 'Animated Transitions', 'Conditional Rendering'],
    tools: ['Vanilla JavaScript (ES6)', 'CSS Keyframe Animations', 'HTML5 Audio (optional)'],
    deliverables: [
      'Configurable question array with options, correct indices, and explanation notes.',
      'Countdown timer per question with automatic advancement upon expiry.',
      'Final summary scorecard showing percentage accuracy and review of missed answers.'
    ],
    expectedResult: 'An engaging, polished interactive educational quiz application.'
  },
  {
    id: 'wd-07',
    title: 'Kanban Task Management Board with Drag & Drop Simulation',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 20',
    dayNumber: 20,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '5–6 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
    shortDesc: 'Build a productivity Kanban board with "To Do", "In Progress", and "Completed" columns, allowing users to create, move, and archive tasks.',
    expectedOutcome: 'A productivity workflow application where task cards can be transferred between status columns seamlessly.',
    objective: 'Implement columnar task management using JavaScript data structures and DOM manipulation, enabling task creation, column state transitions, and persistent storage.',
    skills: ['Drag and Drop API / Click-to-Move Controls', 'Complex State Management', 'Modular Component Functions', 'LocalStorage Synchronization', 'UI Ergonomics'],
    tools: ['HTML5 Drag & Drop API', 'CSS Flex Columns', 'Vanilla JavaScript'],
    deliverables: [
      'Three-column Kanban board layout with task counter badges.',
      'Modal form to create new tasks with title, priority tag, and description.',
      'Smooth column transition controls moving cards between To Do, Doing, and Done.'
    ],
    expectedResult: 'An intuitive project management board supporting real-world intern productivity.'
  },
  {
    id: 'wd-08',
    title: 'Weather Forecast App with REST API Integration Simulation',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 23',
    dayNumber: 23,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    estimatedTime: '4–5 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>`,
    shortDesc: 'Create a dynamic weather dashboard that fetches weather conditions for global cities, rendering temperatures, humidity, wind speeds, and 5-day forecasts.',
    expectedOutcome: 'A clean, responsive weather application demonstrating asynchronous data fetching and dynamic DOM rendering.',
    objective: 'Utilize JavaScript Promises and async/await to request external weather datasets, parse JSON responses, and gracefully handle network loading and error states.',
    skills: ['Asynchronous JavaScript (fetch, async/await)', 'JSON Data Parsing', 'Promise Error Handling (try/catch)', 'Loading Spinners & Skeletons', 'Dynamic Weather Badges'],
    tools: ['OpenWeather API / Mock Data Engine', 'Vanilla JS Async', 'CSS Glassmorphism UI'],
    deliverables: [
      'City search input bar with autocomplete and validation.',
      'Current condition widget displaying temperature, weather condition icon, and humidity.',
      'Five-day weather outlook cards populated via asynchronous JSON data.'
    ],
    expectedResult: 'A reliable, beautiful weather application handling asynchronous network operations flawlessly.'
  },
  {
    id: 'wd-09',
    title: 'Full-Featured Intern Dashboard & Analytics Portal',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 26',
    dayNumber: 26,
    difficulty: 'Advanced',
    difficultyClass: 'diff-advanced',
    estimatedTime: '5–6 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    shortDesc: 'Construct an intern management portal featuring profile stats, task completion metrics, submission history, and responsive sidebar navigation.',
    expectedOutcome: 'An enterprise-grade dashboard interface uniting metrics cards, task activity lists, and submission status tracking.',
    objective: 'Synthesize multi-component UI architecture into a comprehensive dashboard with responsive sidebar, notification bell, progress meters, and dynamic tabs.',
    skills: ['Dashboard UI Architecture', 'Multi-Tab State Switching', 'Custom CSS Progress Bars', 'Modular JS Organization', 'Accessible Dashboard UX'],
    tools: ['Vanilla JavaScript (ES6+)', 'CSS Grid & Flexbox', 'SVG Visual Assets'],
    deliverables: [
      'Responsive dashboard layout with collapsible sidebar and mobile bottom navigation.',
      'Metric cards calculating completed tasks, current milestone, and attendance streak.',
      'Interactive submission list with status badges (Approved, Pending Review, In Progress).'
    ],
    expectedResult: 'A comprehensive intern workspace mirroring professional enterprise web portals.'
  },
  {
    id: 'wd-10',
    title: 'Unified Enterprise Web Platform Capstone',
    track: 'webdev',
    trackLabel: 'Web Development',
    trackCode: 'WD-30',
    day: 'Day 30',
    dayNumber: 30,
    difficulty: 'Advanced',
    difficultyClass: 'diff-advanced',
    estimatedTime: '6–8 hours',
    iconSvg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
    shortDesc: 'The final 30-day capstone: unify all previous components into an integrated, production-ready web platform with cohesive state management.',
    expectedOutcome: 'A complete, deployable multi-page platform showcasing mastery of HTML5, CSS3, and JavaScript.',
    objective: 'Assemble the Homepage, Programs Experience, Task Tracker, Challenge Hub, and Onboarding Portals into an enterprise-ready flagship application.',
    skills: ['Full-Stack Frontend Architecture', 'Cross-Page Consistency', 'Performance Optimization', 'SEO & Accessibility Compliance', 'Production Code Quality'],
    tools: ['HTML5 / CSS3 / Vanilla JS', 'Git Version Control', 'GitHub Pages Deployment'],
    deliverables: [
      'Complete repository containing connected pages with synchronized navigation.',
      'Zero console warnings or broken links across the entire user journey.',
      'Comprehensive developer documentation and live deployment verification.'
    ],
    expectedResult: 'A definitive showcase platform demonstrating complete readiness for professional junior web developer positions.'
  }
];

// ============================================================================
// 2. STATE MANAGEMENT & CACHED DOM ELEMENTS
// ============================================================================
let activeTrack = 'all';        // 'all' | 'analytics' | 'webdev'
let activeDifficulty = 'all';   // 'all' | 'Beginner' | 'Intermediate' | 'Advanced'
let searchQuery = '';          // text search filter

// DOM Elements
const challengesGrid = document.getElementById('challenges-grid');
const resultsCountBadge = document.getElementById('results-count-badge');
const searchInput = document.getElementById('challenge-search-input');
const trackFilterBtns = document.querySelectorAll('.filter-track-btn');
const diffFilterBtns = document.querySelectorAll('.filter-diff-btn');
const emptyStateBox = document.getElementById('empty-state-box');
const resetFiltersBtn = document.getElementById('reset-filters-btn');

// Modal Elements
const challengeModal = document.getElementById('challenge-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalBody = document.getElementById('modal-body-content');

// ============================================================================
// 3. FILTERING LOGIC
// ============================================================================

/**
 * Filters the master challenges dataset based on current track, difficulty, and search query
 * @returns {Array} List of matching challenge objects
 */
function getFilteredChallenges() {
  return challengesData.filter(challenge => {
    // 1. Track Filter
    const matchesTrack = activeTrack === 'all' || challenge.track === activeTrack;

    // 2. Difficulty Filter
    let matchesDiff = true;
    if (activeDifficulty !== 'all') {
      if (activeDifficulty === 'Beginner') {
        matchesDiff = challenge.difficulty.includes('Beginner');
      } else if (activeDifficulty === 'Intermediate') {
        matchesDiff = challenge.difficulty.includes('Intermediate');
      } else if (activeDifficulty === 'Advanced') {
        matchesDiff = challenge.difficulty === 'Advanced';
      }
    }

    // 3. Search Query Filter
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = query === '' || 
      challenge.title.toLowerCase().includes(query) ||
      challenge.shortDesc.toLowerCase().includes(query) ||
      challenge.expectedOutcome.toLowerCase().includes(query) ||
      challenge.skills.some(skill => skill.toLowerCase().includes(query)) ||
      challenge.day.toLowerCase().includes(query);

    return matchesTrack && matchesDiff && matchesSearch;
  });
}

// ============================================================================
// 4. RENDERING FUNCTIONS
// ============================================================================

/**
 * Renders the filtered challenge cards into the grid
 */
function renderChallenges() {
  if (!challengesGrid) return;

  const filtered = getFilteredChallenges();

  // Update Results Counter Badge
  if (resultsCountBadge) {
    resultsCountBadge.textContent = `Showing ${filtered.length} of ${challengesData.length} Challenges`;
  }

  // Handle Empty State
  if (filtered.length === 0) {
    challengesGrid.innerHTML = '';
    if (emptyStateBox) {
      emptyStateBox.style.display = 'block';
    }
    return;
  }

  if (emptyStateBox) {
    emptyStateBox.style.display = 'none';
  }

  // Generate Cards HTML
  const cardsHtml = filtered.map(challenge => {
    const isWeb = challenge.track === 'webdev';
    const trackBadgeClass = isWeb ? 'badge-webdev' : 'badge-analytics';

    return `
      <div class="challenge-card glass-panel" data-challenge-id="${challenge.id}">
        <div class="challenge-card-top">
          <div class="challenge-badges-row">
            <span class="challenge-day-badge">${challenge.day}</span>
            <span class="challenge-track-badge ${trackBadgeClass}">${challenge.trackLabel}</span>
            <span class="diff-tag ${challenge.difficultyClass}">${challenge.difficulty}</span>
          </div>
          <div class="challenge-icon-box ${isWeb ? 'icon-web' : 'icon-analytics'}">
            ${challenge.iconSvg}
          </div>
        </div>

        <h3 class="challenge-card-title">${challenge.title}</h3>
        <p class="challenge-card-desc">${challenge.shortDesc}</p>

        <div class="challenge-outcome-box">
          <span class="outcome-label">🎯 Expected Outcome:</span>
          <p class="outcome-text">${challenge.expectedOutcome}</p>
        </div>

        <div class="challenge-card-footer">
          <div class="challenge-time-est">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>Est: ${challenge.estimatedTime}</span>
          </div>
          <button type="button" class="btn btn-view-challenge" data-view-id="${challenge.id}" aria-haspopup="dialog">
            <span>View Challenge</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  challengesGrid.innerHTML = cardsHtml;

  // Attach Event Listeners to "View Challenge" buttons
  const viewBtns = challengesGrid.querySelectorAll('.btn-view-challenge');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const challengeId = btn.getAttribute('data-view-id');
      openChallengeModal(challengeId);
    });
  });

  // Also make clicking the card open the modal
  const cards = challengesGrid.querySelectorAll('.challenge-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const challengeId = card.getAttribute('data-challenge-id');
      openChallengeModal(challengeId);
    });
  });
}

// ============================================================================
// 5. INTERACTIVE MODAL DIALOG LOGIC
// ============================================================================

/**
 * Opens the challenge modal populated with detailed specifications
 * @param {string} challengeId - Target challenge identifier
 */
function openChallengeModal(challengeId) {
  const challenge = challengesData.find(c => c.id === challengeId);
  if (!challenge || !challengeModal || !modalBody) return;

  const isWeb = challenge.track === 'webdev';
  const trackBadgeClass = isWeb ? 'badge-webdev' : 'badge-analytics';

  const skillsHtml = challenge.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
  const toolsHtml = challenge.tools.map(t => `<span class="tool-tag">${t}</span>`).join('');
  const deliverablesHtml = challenge.deliverables.map(d => `<li>${d}</li>`).join('');

  modalBody.innerHTML = `
    <div class="modal-challenge-header">
      <div class="challenge-badges-row" style="margin-bottom: 0.75rem;">
        <span class="challenge-day-badge">${challenge.day} (30-Day Internship)</span>
        <span class="challenge-track-badge ${trackBadgeClass}">${challenge.trackLabel}</span>
        <span class="diff-tag ${challenge.difficultyClass}">${challenge.difficulty}</span>
      </div>
      <h2 class="modal-challenge-title">${challenge.title}</h2>
      <p class="modal-challenge-desc">${challenge.shortDesc}</p>
    </div>

    <div class="modal-section-box">
      <h4 class="modal-sec-heading">🎯 Challenge Objective</h4>
      <p class="modal-sec-text">${challenge.objective}</p>
    </div>

    <div class="modal-grid-two">
      <div class="modal-section-box">
        <h4 class="modal-sec-heading">🧠 Skills Required &amp; Practiced</h4>
        <div class="modal-tags-list">
          ${skillsHtml}
        </div>
      </div>

      <div class="modal-section-box">
        <h4 class="modal-sec-heading">🛠️ Tools That May Be Used</h4>
        <div class="modal-tags-list">
          ${toolsHtml}
        </div>
      </div>
    </div>

    <div class="modal-section-box">
      <h4 class="modal-sec-heading">📋 What the Intern Needs to Produce (Deliverables)</h4>
      <ul class="modal-deliverables-list">
        ${deliverablesHtml}
      </ul>
    </div>

    <div class="modal-footer-stats">
      <div class="modal-stat-item">
        <span class="stat-meta-label">⏱️ Estimated Completion Time:</span>
        <span class="stat-meta-value">${challenge.estimatedTime}</span>
      </div>
      <div class="modal-stat-item">
        <span class="stat-meta-label">🏆 Expected Result:</span>
        <span class="stat-meta-value">${challenge.expectedResult}</span>
      </div>
    </div>

    <div class="modal-actions-bar">
      <a href="form.html" class="btn btn-primary" style="padding: 0.75rem 1.75rem;">
        <span>Apply for this Track</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
      <button type="button" class="btn btn-secondary btn-close-modal-action">
        <span>Close Brief</span>
      </button>
    </div>
  `;

  // Display Modal with Smooth Fade-in
  challengeModal.classList.add('modal-active');
  document.body.style.overflow = 'hidden'; // Prevent background page scroll

  // Attach internal close button handler
  const actionCloseBtn = modalBody.querySelector('.btn-close-modal-action');
  if (actionCloseBtn) {
    actionCloseBtn.addEventListener('click', closeChallengeModal);
  }
}

/**
 * Closes the challenge modal cleanly
 */
function closeChallengeModal() {
  if (!challengeModal) return;
  challengeModal.classList.remove('modal-active');
  document.body.style.overflow = ''; // Restore page scroll
}

// ============================================================================
// 6. EVENT LISTENERS & SETUP
// ============================================================================

function setupEventListeners() {
  // Track Filter Buttons
  trackFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      trackFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTrack = btn.getAttribute('data-track');
      renderChallenges();
    });
  });

  // Difficulty Filter Buttons
  diffFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      diffFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDifficulty = btn.getAttribute('data-difficulty');
      renderChallenges();
    });
  });

  // Search Input with Instant Typing Response
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderChallenges();
    });
  }

  // Reset Filters Button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      activeTrack = 'all';
      activeDifficulty = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';

      trackFilterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-track') === 'all');
      });

      diffFilterBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-difficulty') === 'all');
      });

      renderChallenges();
    });
  }

  // Modal Backdrop Click Closes Modal
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeChallengeModal);
  }

  // Modal Top-Right Close Button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeChallengeModal);
  }

  // Close Modal on Escape Key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && challengeModal && challengeModal.classList.contains('modal-active')) {
      closeChallengeModal();
    }
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  renderChallenges();
});
