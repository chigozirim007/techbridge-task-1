/**
 * TechBridge Internship Platform - Interactive Task Tracker
 * Task 4: Interactive Internship Roadmap — Two Tracks
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * 
 * Demonstrates:
 *  1. Variables (state management for active track)
 *  2. Arrays & Objects (structured curriculum data for both tracks)
 *  3. Functions (rendering cards, timelines, and active states)
 *  4. Event Listeners (click & keyboard events for track switching)
 *  5. Conditional Logic (track selection, difficulty styling, state checks)
 *  6. DOM Manipulation (dynamic rendering without page refresh)
 */

// ============================================================================
// 1. DATA STRUCTURE: 30-Day Practical Internship Tracks Data
// ============================================================================
const tracksData = {
  webdev: {
    key: 'webdev',
    name: 'Web Development',
    code: 'WD-30',
    tagline: 'Build real web platforms using modern HTML5, CSS3, and JavaScript from scratch to production.',
    duration: '30-Day Practical Internship',
    totalTasks: 8,
    difficultyRange: 'Beginner → Intermediate',
    accentColor: '#10D000',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    tasks: [
      {
        id: 1,
        taskNumber: 'Task 1',
        taskBadge: 'Task 01',
        title: 'Build the TechBridge Homepage',
        day: 'Day 1',
        dayNumber: 1,
        difficulty: 'Beginner',
        difficultyClass: 'diff-beginner',
        shortLabel: 'Homepage',
        description: 'Create the first version of the TechBridge website using HTML and CSS.',
        detailedNotes: 'Establish the core layout, hero section, navigation bar, value propositions, and mobile viewport styling to introduce the TechBridge learning platform.',
        skills: ['HTML5 Semantic Structure', 'CSS3 Layouts & Styling', 'Responsive Design', 'Brand Identity'],
        deliverables: [
          'Header with TechBridge logo, brand slogan, and navigation links.',
          'Hero banner introducing TechBridge by Baselink Services Limited.',
          'Value propositions, program cards, and community invitation.',
          'Fully responsive layout adapting gracefully down to mobile screens.'
        ]
      },
      {
        id: 2,
        taskNumber: 'Task 2',
        taskBadge: 'Task 02',
        title: 'Build the TechBridge Programs Experience',
        day: 'Day 4',
        dayNumber: 4,
        difficulty: 'Beginner',
        difficultyClass: 'diff-beginner',
        shortLabel: 'Programs',
        description: "Create a Programs experience presenting TechBridge's available learning programs.",
        detailedNotes: 'Design and develop a dedicated program catalog presenting curriculum modules, hands-on outcomes, and clear paths to apply.',
        skills: ['Information Architecture', 'Program Cards & Grids', 'Curriculum Breakdown', 'Multi-Page Navigation'],
        deliverables: [
          'Dedicated Programs page (programs.html) detailing Data Analytics and Web Dev.',
          'Detailed curriculum outlines, technologies covered, and practical projects.',
          'Direct CTAs linking to official registration and community channels.',
          'Consistent branding, typography, and color tokens matching the homepage.'
        ]
      },
      {
        id: 3,
        taskNumber: 'Task 3',
        taskBadge: 'Task 03',
        title: 'Build the Internship Tasks Experience',
        day: 'Day 8',
        dayNumber: 8,
        difficulty: 'Beginner → Intermediate',
        difficultyClass: 'diff-beg-int',
        shortLabel: 'Tasks UI',
        description: 'Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.',
        detailedNotes: 'Design an interactive task roadmap communicating the 30-day timeline, day milestones, task requirements, and difficulty progression.',
        skills: ['Roadmap Architecture', 'Progress Indicators', 'Milestone Mapping', 'Expandable Details UX'],
        deliverables: [
          'Dedicated Internship Tasks page with full 30-day timeline visualization.',
          'Milestone cards with task days, titles, descriptions, and difficulty badges.',
          'Expandable task details showing deliverables and skills practiced.',
          'Unified navigation connecting Home, Programs, Tasks, and Registration.'
        ]
      },
      {
        id: 4,
        taskNumber: 'Task 4',
        taskBadge: 'Task 04',
        title: 'Build an Interactive Internship Roadmap',
        day: 'Day 11',
        dayNumber: 11,
        difficulty: 'Beginner → Intermediate',
        difficultyClass: 'diff-beg-int',
        shortLabel: 'Tracker (JS)',
        description: 'Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.',
        detailedNotes: 'Introduce JavaScript fundamentals to render dynamic content, manage track state, toggle active controls, and update the roadmap without browser reload.',
        skills: ['Vanilla JavaScript (ES6+)', 'DOM Manipulation', 'Event Listeners', 'State Management', 'Arrays & Objects'],
        deliverables: [
          'Interactive track switcher buttons for [ Data Analytics ] and [ Web Development ].',
          'Dynamic track switching without page refresh via client-side DOM updates.',
          'Display all 8 tasks with number, title, day, description, and difficulty.',
          'Prominent "Currently Viewing" status indicator and active 30-day progression bar.'
        ]
      },
      {
        id: 5,
        taskNumber: 'Task 5',
        taskBadge: 'Task 05',
        title: 'Build the Intern Registration Experience',
        day: 'Day 15',
        dayNumber: 15,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Registration',
        description: 'Create a professional registration and onboarding interface for TechBridge interns.',
        detailedNotes: 'Build an accessible, responsive application portal with client-side form validation, track selection, and confirmation handling.',
        skills: ['Form UX & Validation', 'Input Sanitization', 'Accessibility (ARIA)', 'Onboarding Workflows'],
        deliverables: [
          'Structured onboarding form collecting intern profile and track preference.',
          'Real-time input validation feedback with clear error messaging.',
          'Accessible form controls with proper labels, helper text, and focus states.',
          'Seamless navigation returning to homepage and program curriculum.'
        ]
      },
      {
        id: 6,
        taskNumber: 'Task 6',
        taskBadge: 'Task 06',
        title: 'Build the Task Submission System',
        day: 'Day 19',
        dayNumber: 19,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Submissions',
        description: 'Create an interface through which interns can prepare and submit their task work.',
        detailedNotes: 'Implement a structured workflow for interns to submit project links, GitHub repositories, live demo URLs, and notes for evaluation.',
        skills: ['Submission Workflows', 'Link Verification UI', 'Status Indicators', 'Work Review States'],
        deliverables: [
          'Interactive task submission interface with repository & demo URL inputs.',
          'Form state verification preventing empty or malformed URL submissions.',
          'Submission confirmation and review status indicators.',
          'Clear guidance on submission guidelines and code review criteria.'
        ]
      },
      {
        id: 7,
        taskNumber: 'Task 7',
        taskBadge: 'Task 07',
        title: 'Build the Intern Dashboard',
        day: 'Day 22',
        dayNumber: 22,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Dashboard',
        description: 'Create a dashboard where an intern can view their profile, progress, tasks and submissions.',
        detailedNotes: 'Synthesize intern performance, completion percentage, task statuses, and upcoming deadlines into an intuitive dashboard layout.',
        skills: ['Dashboard Layouts', 'Progress Analytics', 'Status Badges', 'Data Representation'],
        deliverables: [
          'Intern profile overview with active track and enrollment status.',
          'Visual progress gauge tracking completed vs. remaining tasks.',
          'Quick-action task list with submission statuses and feedback states.',
          'Responsive grid layout optimized across mobile and desktop devices.'
        ]
      },
      {
        id: 8,
        taskNumber: 'Task 8',
        taskBadge: 'Task 08',
        title: 'Build the Complete TechBridge Internship Platform',
        day: 'Day 26',
        dayNumber: 26,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Full Platform',
        description: 'Combine the different components created during the internship into a complete TechBridge platform.',
        detailedNotes: 'Unify all previous components (Homepage, Programs, Roadmap, Registration, Submissions, Dashboard) into a cohesive, production-ready web application.',
        skills: ['Modular Architecture', 'Unified Navigation', 'Performance Optimization', 'End-to-End Testing'],
        deliverables: [
          'Unified TechBridge platform with cohesive styling and inter-page navigation.',
          'Polished animations, accessible interactive elements, and optimized assets.',
          'Complete end-to-end user journey from visitor discovery to intern capstone.',
          'Clean, well-documented codebase ready for deployment.'
        ]
      }
    ]
  },
  analytics: {
    key: 'analytics',
    name: 'Data Analytics',
    code: 'DA-30',
    tagline: 'Master spreadsheets, SQL, and business data visualization to extract high-value insights from raw data.',
    duration: '30-Day Practical Internship',
    totalTasks: 8,
    difficultyRange: 'Beginner → Intermediate',
    accentColor: '#38BDF8',
    iconSvg: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
    tasks: [
      {
        id: 1,
        taskNumber: 'Task 1',
        taskBadge: 'Task 01',
        title: 'Data Cleaning Basics',
        day: 'Day 1',
        dayNumber: 1,
        difficulty: 'Beginner',
        difficultyClass: 'diff-beginner',
        shortLabel: 'Cleaning',
        description: 'Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.',
        detailedNotes: 'Learn professional data hygiene practices to transform unformatted raw data into analysis-ready structured spreadsheets.',
        skills: ['Google Sheets & Excel', 'Deduplication', 'Handling Missing Data', 'Data Type Formatting', 'Text Functions (TRIM, CLEAN)'],
        deliverables: [
          'Cleaned spreadsheet with zero duplicate records and standardized headers.',
          'Resolved blank cells using appropriate imputation or flag values.',
          'Standardized date, currency, and numerical formats across all records.',
          'Data cleaning log documenting issues identified and corrections made.'
        ]
      },
      {
        id: 2,
        taskNumber: 'Task 2',
        taskBadge: 'Task 02',
        title: 'Formulas & Pivot Tables',
        day: 'Day 4',
        dayNumber: 4,
        difficulty: 'Beginner',
        difficultyClass: 'diff-beginner',
        shortLabel: 'Formulas',
        description: 'Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.',
        detailedNotes: 'Harness conditional aggregation functions and dynamic pivot tables to summarize multi-variable datasets and answer key business questions.',
        skills: ['SUMIFS & COUNTIFS', 'AVERAGEIFS', 'Pivot Tables', 'Calculated Fields', 'Spreadsheet Analysis'],
        deliverables: [
          'Summary analysis sheet utilizing multi-condition arithmetic formulas.',
          'Configured Pivot Tables aggregating performance by category, region, and date.',
          'Key insight answers addressing core operational and revenue questions.',
          'Clear layout formatting highlighting significant trends and totals.'
        ]
      },
      {
        id: 3,
        taskNumber: 'Task 3',
        taskBadge: 'Task 03',
        title: 'Data Visualization',
        day: 'Day 8',
        dayNumber: 8,
        difficulty: 'Beginner → Intermediate',
        difficultyClass: 'diff-beg-int',
        shortLabel: 'Visualization',
        description: 'Create charts and a simple dashboard that communicate useful insights from a dataset.',
        detailedNotes: 'Translate numerical findings into compelling visual stories using bar charts, trend lines, and interactive dashboard slicers.',
        skills: ['Data Visualization Principles', 'Chart Selection & Formatting', 'Dashboard Architecture', 'KPI Scorecards'],
        deliverables: [
          'Visual dashboard with clear executive summary KPI cards.',
          'Tailored chart visualisations (bar, line, and composition charts).',
          'Interactive slicers/filters allowing dynamic timeframe drill-downs.',
          'Data storytelling notes highlighting high-impact findings.'
        ]
      },
      {
        id: 4,
        taskNumber: 'Task 4',
        taskBadge: 'Task 04',
        title: 'Introduction to SQL',
        day: 'Day 11',
        dayNumber: 11,
        difficulty: 'Beginner → Intermediate',
        difficultyClass: 'diff-beg-int',
        shortLabel: 'Intro to SQL',
        description: 'Practice basic SQL queries and use them to answer real-world questions about data.',
        detailedNotes: 'Connect to relational database engines and construct fundamental SQL queries to query, filter, sort, and slice structured data tables.',
        skills: ['SQL Fundamentals', 'SELECT & FROM Clauses', 'WHERE Conditionals', 'ORDER BY & LIMIT', 'Relational Filtering'],
        deliverables: [
          'SQL script file (.sql) containing documented queries solving business questions.',
          'Filtered result sets targeting specific customer segments and date ranges.',
          'Sorted query outputs showing top-performing entities and outliers.',
          'Written explanation of relational data schema and query execution.'
        ]
      },
      {
        id: 5,
        taskNumber: 'Task 5',
        taskBadge: 'Task 05',
        title: 'SQL Joins & Aggregations',
        day: 'Day 15',
        dayNumber: 15,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Joins & Aggs',
        description: 'Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.',
        detailedNotes: 'Synthesize data distributed across relational tables by executing INNER and LEFT JOINs coupled with grouped statistical aggregations.',
        skills: ['INNER JOIN & LEFT JOIN', 'GROUP BY & HAVING', 'COUNT, SUM, AVG, MIN, MAX', 'Multi-Table Analysis'],
        deliverables: [
          'Complex SQL queries joining customers, orders, and products tables.',
          'Grouped aggregate queries calculating total revenue and average basket size.',
          'HAVING clauses filtering out aggregated groups below threshold criteria.',
          'Exported result datasets validated against spreadsheet totals.'
        ]
      },
      {
        id: 6,
        taskNumber: 'Task 6',
        taskBadge: 'Task 06',
        title: 'Lookup Functions & Data Wrangling',
        day: 'Day 19',
        dayNumber: 19,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Lookups',
        description: 'Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.',
        detailedNotes: 'Master advanced spreadsheet lookup capabilities to merge disconnected tables, reconcile naming mismatches, and automate data validation.',
        skills: ['XLOOKUP & VLOOKUP', 'INDEX & MATCH', 'Handling #N/A Errors (IFERROR)', 'Data Reconciliation'],
        deliverables: [
          'Integrated master worksheet combining two previously separate data files.',
          'Error handling logic utilizing IFERROR to gracefully catch missing lookup keys.',
          'Data validation rules ensuring consistent category inputs.',
          'Reconciliation report identifying unmatched records between datasets.'
        ]
      },
      {
        id: 7,
        taskNumber: 'Task 7',
        taskBadge: 'Task 07',
        title: 'Mini Analysis Project',
        day: 'Day 22',
        dayNumber: 22,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Mini Project',
        description: 'Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.',
        detailedNotes: 'Execute a comprehensive data analysis cycle on a real-world scenario from raw ingestion to strategic business recommendations.',
        skills: ['End-to-End Analytics', 'Data Cleaning', 'Pivot Tables & Formulas', 'Visual Dashboards', 'Actionable Recommendations'],
        deliverables: [
          'Cleaned and verified source dataset with transformation documentation.',
          'Analytical model utilizing formulas, Pivot Tables, and visual charts.',
          'Executive presentation deck or report summarizing 3-5 core takeaways.',
          'Actionable, data-backed business recommendations for decision makers.'
        ]
      },
      {
        id: 8,
        taskNumber: 'Task 8',
        taskBadge: 'Task 08',
        title: 'Capstone Project',
        day: 'Day 26',
        dayNumber: 26,
        difficulty: 'Intermediate',
        difficultyClass: 'diff-intermediate',
        shortLabel: 'Capstone',
        description: 'Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.',
        detailedNotes: 'Demonstrate professional-grade analytics competency by querying a multi-table database using SQL, exporting to spreadsheets, and delivering a comprehensive business dashboard.',
        skills: ['Multi-Table SQL Extraction', 'Advanced Spreadsheet Modeling', 'Cross-Tool Integration', 'Executive Dashboarding'],
        deliverables: [
          'SQL queries extracting and joining records across at least two related database tables.',
          'Polished spreadsheet dashboard incorporating formulas, pivot tables, and KPI charts.',
          'Comprehensive analytics report highlighting operational findings and trends.',
          'Final capstone portfolio artifact demonstrating job-ready data analyst skills.'
        ]
      }
    ]
  }
};

// ============================================================================
// 2. STATE MANAGEMENT & DOM ELEMENTS
// ============================================================================
let currentTrack = 'webdev'; // Default active track

// Cache DOM Elements
const btnWeb = document.getElementById('btn-track-web');
const btnData = document.getElementById('btn-track-data');
const viewingBadge = document.getElementById('currently-viewing-badge');
const viewingTrackTitle = document.getElementById('viewing-track-title');
const viewingTrackDesc = document.getElementById('viewing-track-desc');
const viewingTrackStats = document.getElementById('viewing-track-stats');
const timelineContainer = document.getElementById('progression-timeline');
const tasksContainer = document.getElementById('tasks-container');

// ============================================================================
// 3. RENDER FUNCTIONS
// ============================================================================

/**
 * Updates the "Currently Viewing" status header and track overview
 * @param {Object} track - The active track data object
 */
function renderTrackHeader(track) {
  if (viewingTrackTitle) {
    viewingTrackTitle.textContent = track.name;
  }
  
  if (viewingBadge) {
    viewingBadge.innerHTML = `
      <span class="live-indicator-dot"></span>
      <span>Currently Viewing: <strong>${track.name.toUpperCase()}</strong></span>
    `;
  }

  if (viewingTrackDesc) {
    viewingTrackDesc.textContent = track.tagline;
  }

  if (viewingTrackStats) {
    viewingTrackStats.innerHTML = `
      <div class="stat-pill">
        <span class="stat-pill-label">Duration</span>
        <span class="stat-pill-val">30 Days</span>
      </div>
      <div class="stat-pill">
        <span class="stat-pill-label">Curriculum</span>
        <span class="stat-pill-val">${track.totalTasks} Practical Tasks</span>
      </div>
      <div class="stat-pill">
        <span class="stat-pill-label">Progression</span>
        <span class="stat-pill-val">${track.difficultyRange}</span>
      </div>
    `;
  }
}

/**
 * Renders the 30-Day Step-by-Step Progression Timeline
 * @param {Array} tasks - List of task objects for the active track
 */
function renderTimeline(tasks) {
  if (!timelineContainer) return;

  const stepsHtml = tasks.map((task, index) => {
    const isLast = index === tasks.length - 1;
    const arrowHtml = !isLast ? `<div class="progression-arrow" aria-hidden="true">→</div>` : '';
    
    return `
      <div class="progression-step-box" data-task-ref="${task.id}" tabindex="0" role="button" aria-label="Jump to Task ${task.id}: ${task.title}">
        <span class="prog-day">${task.day}</span>
        <span class="prog-label">${task.shortLabel}</span>
        <span class="diff-tag ${task.difficultyClass}">${task.difficulty}</span>
      </div>
      ${arrowHtml}
    `;
  }).join('');

  timelineContainer.innerHTML = stepsHtml;

  // Add click to jump to task card
  const stepBoxes = timelineContainer.querySelectorAll('.progression-step-box');
  stepBoxes.forEach((box) => {
    box.addEventListener('click', () => {
      const taskId = box.getAttribute('data-task-ref');
      const targetCard = document.getElementById(`task-card-${taskId}`);
      if (targetCard) {
        targetCard.setAttribute('open', 'true');
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.classList.add('task-card-highlight');
        setTimeout(() => targetCard.classList.remove('task-card-highlight'), 1800);
      }
    });
  });
}

/**
 * Renders all 8 Task Cards dynamically for the selected track
 * @param {Array} tasks - List of task objects for the active track
 */
function renderTaskCards(tasks) {
  if (!tasksContainer) return;

  // Fade out effect before replacing content
  tasksContainer.style.opacity = '0';
  tasksContainer.style.transform = 'translateY(8px)';

  setTimeout(() => {
    const cardsHtml = tasks.map((task, index) => {
      // Open the first two tasks by default for immediate preview
      const isOpen = index < 2 ? 'open' : '';

      const skillsHtml = task.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
      const deliverablesHtml = task.deliverables.map(deliv => `<li>${deliv}</li>`).join('');

      return `
        <details class="glass-panel task-card" id="task-card-${task.id}" ${isOpen}>
          <summary class="task-card-summary">
            <div class="task-header-left">
              <span class="task-number-badge">${task.taskBadge}</span>
              <span class="task-day-badge">${task.day}</span>
            </div>
            <div class="task-title-wrap">
              <h3 class="task-card-title">${task.title}</h3>
              <span class="diff-tag ${task.difficultyClass}">${task.difficulty}</span>
            </div>
            <span class="faq-icon" aria-hidden="true">+</span>
          </summary>
          
          <div class="task-card-content">
            <div class="task-desc-wrap">
              <p class="task-brief-desc">${task.description}</p>
              ${task.detailedNotes ? `<p class="task-notes-desc">${task.detailedNotes}</p>` : ''}
            </div>

            <div class="task-skills-list" aria-label="Core Competencies">
              ${skillsHtml}
            </div>

            <div class="task-deliverables-box">
              <h4>🎯 Key Milestones &amp; Deliverables:</h4>
              <ul>
                ${deliverablesHtml}
              </ul>
            </div>
          </div>
        </details>
      `;
    }).join('');

    tasksContainer.innerHTML = cardsHtml;

    // Trigger smooth fade-in
    tasksContainer.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    tasksContainer.style.opacity = '1';
    tasksContainer.style.transform = 'translateY(0)';
  }, 120);
}

/**
 * Main Track Switcher Function
 * @param {string} trackKey - 'webdev' or 'analytics'
 */
function switchTrack(trackKey) {
  // Validate track key using conditional logic
  if (!tracksData[trackKey]) {
    console.error(`Invalid track key: ${trackKey}`);
    return;
  }

  currentTrack = trackKey;
  const activeTrackData = tracksData[trackKey];

  // 1. Update button active states and ARIA attributes
  if (btnWeb && btnData) {
    if (trackKey === 'webdev') {
      btnWeb.classList.add('active');
      btnWeb.setAttribute('aria-selected', 'true');
      btnData.classList.remove('active');
      btnData.setAttribute('aria-selected', 'false');
    } else {
      btnData.classList.add('active');
      btnData.setAttribute('aria-selected', 'true');
      btnWeb.classList.remove('active');
      btnWeb.setAttribute('aria-selected', 'false');
    }
  }

  // 2. Render Header Information
  renderTrackHeader(activeTrackData);

  // 3. Render 30-Day Step-by-Step Progression Timeline
  renderTimeline(activeTrackData.tasks);

  // 4. Render All 8 Tasks for the selected track
  renderTaskCards(activeTrackData.tasks);

  // 5. Update URL hash without jumping page (enables direct bookmarking & sharing)
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', `#track-${trackKey}`);
  }
}

// ============================================================================
// 4. EVENT LISTENERS & INITIALIZATION
// ============================================================================

function initTrackTracker() {
  // Attach event listener for Web Development track button
  if (btnWeb) {
    btnWeb.addEventListener('click', (e) => {
      e.preventDefault();
      switchTrack('webdev');
    });
  }

  // Attach event listener for Data Analytics track button
  if (btnData) {
    btnData.addEventListener('click', (e) => {
      e.preventDefault();
      switchTrack('analytics');
    });
  }

  // Check URL hash for initial deep link (e.g., tasks.html#track-analytics)
  const hash = window.location.hash.toLowerCase();
  let initialTrack = 'webdev';
  if (hash.includes('analytics') || hash.includes('data')) {
    initialTrack = 'analytics';
  }

  // Initial Render
  switchTrack(initialTrack);
}

// Initialize when DOM is fully parsed
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTrackTracker);
} else {
  initTrackTracker();
}
