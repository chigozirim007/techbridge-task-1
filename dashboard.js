/**
 * TechBridge Platform - Interactive Intern Dashboard
 * Task 6: Build the TechBridge Intern Dashboard
 * Technologies: Pure Vanilla JavaScript (ES6+)
 * 
 * Demonstrates:
 *  1. State Management & LocalStorage Persistence for 8 Internship Tasks
 *  2. Real-time Progress Calculations (Completed, Remaining, Percentage, Progress Bar)
 *  3. Interactive Task Status Toggling without Page Refresh
 *  4. Task Filtering (All, Completed, In Progress, Not Started)
 *  5. View Task Details Modal with Deep-Dive Specifications
 *  6. Connection with Task 5 Challenge Hub
 *  7. Interactive Modern Web Technologies Explorer (Next.js, Vue.js, Angular, Backend)
 */

// ============================================================================
// 1. DATASET: 8 Official Web Development Internship Tasks
// ============================================================================
const initialTasksData = [
  {
    id: 1,
    taskNumber: 'TASK 1',
    taskBadge: 'Task 01',
    title: 'Build the TechBridge Homepage',
    day: 'Day 1',
    dayNumber: 1,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    status: 'Completed', // 'Completed' | 'In Progress' | 'Not Started'
    shortDesc: 'Create the first version of the TechBridge website using structured HTML5 and CSS3 to establish the organization online presence.',
    objective: 'Establish core brand identity, navigation bar, hero banner, value proposition sections, and responsive viewports for TechBridge by Baselink Services Limited.',
    skills: ['HTML5 Semantic Markup', 'CSS3 Flexbox & Grid', 'Brand Typography', 'Mobile Responsive Layouts'],
    deliverables: [
      'Structured index.html with header, hero banner, programs overview, benefits, and footer.',
      'Custom style.css implementing CSS variables, color tokens, and button styles.',
      'Mobile-friendly hamburger navigation menu functioning seamlessly across viewports.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'A modern, responsive company homepage introducing TechBridge to prospective interns and partners.'
  },
  {
    id: 2,
    taskNumber: 'TASK 2',
    taskBadge: 'Task 02',
    title: 'Build the TechBridge Programs Experience',
    day: 'Day 4',
    dayNumber: 4,
    difficulty: 'Beginner',
    difficultyClass: 'diff-beginner',
    status: 'Completed',
    shortDesc: 'Create a dedicated Programs experience presenting TechBridge available learning tracks in Data Analytics and Web Development.',
    objective: 'Design and develop an engaging curriculum catalog that communicates syllabus modules, practical skills, and clear enrollment paths for prospective interns.',
    skills: ['Information Architecture', 'Program Cards & Grids', 'Curriculum Breakdown', 'Multi-Page Navigation'],
    deliverables: [
      'Dedicated programs.html page detailing Data Analytics and Web Development tracks.',
      'Curriculum breakdown cards outlining module progression and practical outcomes.',
      'Direct call-to-action buttons linking to application form and community channels.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'An intuitive program discovery catalog helping visitors choose their ideal learning track.'
  },
  {
    id: 3,
    taskNumber: 'TASK 3',
    taskBadge: 'Task 03',
    title: 'Build the Internship Tasks Experience',
    day: 'Day 8',
    dayNumber: 8,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    status: 'Completed',
    shortDesc: 'Create an interface that presents the TechBridge internship tasks and helps users understand the 30-day learning journey.',
    objective: 'Map out the complete 30-day milestone timeline, task schedules, and difficulty progression from foundational basics to capstone project.',
    skills: ['Roadmap Architecture', 'Timeline Indicators', 'Milestone Mapping', 'Expandable Details UX'],
    deliverables: [
      'Dedicated tasks.html page with 30-day step-by-step milestone progression bar.',
      'Interactive task cards with expandable milestone deliverables and skills lists.',
      'Unified cross-page navigation linking Home, Programs, Tasks, and Application Form.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'A transparent 30-day roadmap showing interns exactly what they will build from Day 1 to Day 26.'
  },
  {
    id: 4,
    taskNumber: 'TASK 4',
    taskBadge: 'Task 04',
    title: 'Build an Interactive Internship Roadmap',
    day: 'Day 11',
    dayNumber: 11,
    difficulty: 'Beginner → Intermediate',
    difficultyClass: 'diff-beg-int',
    status: 'Completed',
    shortDesc: 'Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks without refreshing the page.',
    objective: 'Introduce core JavaScript fundamentals (variables, arrays of objects, functions, event listeners, DOM manipulation) to render dual-track curricula dynamically.',
    skills: ['Vanilla JavaScript (ES6+)', 'DOM Manipulation', 'Event Listeners', 'State Management', 'Dynamic Rendering'],
    deliverables: [
      'Interactive track switcher buttons for [ Data Analytics ] and [ Web Development ].',
      'Dynamic track switching updating the 8 tasks and timeline without page reload.',
      'Prominent "Currently Viewing" status card with live indicator dot.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'A fluid, client-side interactive roadmap demonstrating pure JavaScript state and DOM control.'
  },
  {
    id: 5,
    taskNumber: 'TASK 5',
    taskBadge: 'Task 05',
    title: 'Build the TechBridge Challenge Hub',
    day: 'Day 15',
    dayNumber: 15,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    status: 'Completed',
    shortDesc: 'Create an interactive Challenge Hub with 20 practical challenges spanning 30 days, multi-level filtering, search, and detailed project brief modals.',
    objective: 'Provide prospective and active interns with a hands-on challenge repository where they can filter challenges by track and difficulty, search by keyword, and inspect project briefs.',
    skills: ['Multi-Level Filtering', 'Real-Time Search', 'Accessible Modal Dialogs', 'Dynamic Card Grids', 'Keyboard Navigation'],
    deliverables: [
      'Dedicated challenges.html and challenges.js with 20 practical challenges across 30 days.',
      'Track filters (All, Analytics, Web Dev) and Difficulty filters (All, Beginner, Intermediate, Advanced).',
      'Interactive modal popup detailing challenge objectives, tools, deliverables, and estimated time.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'An interactive challenge repository showcasing real-world projects that interns tackle during their 30 days.'
  },
  {
    id: 6,
    taskNumber: 'TASK 6',
    taskBadge: 'Task 06',
    title: 'Build the TechBridge Intern Dashboard',
    day: 'Day 19',
    dayNumber: 19,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    status: 'In Progress',
    shortDesc: 'Build an interactive dashboard for interns to view their progress, toggle task completions, track percentage, and explore modern web technologies.',
    objective: 'Create a centralized student portal that calculates completion metrics dynamically, allows task status updates without refresh, and introduces modern frameworks.',
    skills: ['Dashboard UI Architecture', 'Real-time Calculations', 'LocalStorage Persistence', 'Interactive Technology Explorer', 'Component State'],
    deliverables: [
      'Interactive dashboard.html and dashboard.js with real-time progress calculations.',
      'Task status toggle buttons dynamically updating completed count, remaining count, and percentage.',
      'Interactive Modern Web Technologies explorer covering Next.js, Vue, Angular, and Backend.'
    ],
    estimatedTime: '4–6 hours',
    expectedResult: 'A functional, empowering intern workspace that mirrors professional learning management platforms.'
  },
  {
    id: 7,
    taskNumber: 'TASK 7',
    taskBadge: 'Task 07',
    title: 'Build the Task Submission & Review Portal',
    day: 'Day 22',
    dayNumber: 22,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    status: 'Not Started',
    shortDesc: 'Create an interface through which interns can prepare, review, and submit their completed task repositories and live demo links.',
    objective: 'Develop a structured submission workflow with client-side link verification, submission history logs, and code evaluation review criteria.',
    skills: ['Submission Workflows', 'URL Pattern Validation', 'Review Status Tags', 'Evaluation Feedback UI'],
    deliverables: [
      'Task submission form accepting GitHub repository links and deployed live preview URLs.',
      'Automated URL format verification preventing empty or broken submissions.',
      'Submission history table showing evaluation status and mentor feedback notes.'
    ],
    estimatedTime: '4–5 hours',
    expectedResult: 'A seamless task submission pipeline facilitating project reviews and mentor feedback.'
  },
  {
    id: 8,
    taskNumber: 'TASK 8',
    taskBadge: 'Task 08',
    title: 'Build the Complete TechBridge Internship Platform',
    day: 'Day 26',
    dayNumber: 26,
    difficulty: 'Intermediate',
    difficultyClass: 'diff-intermediate',
    status: 'Not Started',
    shortDesc: 'Combine all individual components created during the internship into a complete, unified TechBridge production platform.',
    objective: 'Unify Homepage, Programs, Roadmap, Challenge Hub, Dashboard, Application, and Submissions into an interconnected, optimized web platform.',
    skills: ['Platform Architecture', 'Cross-Page State Harmony', 'Performance Optimization', 'SEO & Accessibility Compliance', 'Production Deployment'],
    deliverables: [
      'Seamless multi-page platform with zero broken links and uniform styling tokens.',
      'Optimized load times, clean asset organization, and responsive design down to 400px.',
      'Complete end-to-end documentation ready for final capstone submission and deployment.'
    ],
    estimatedTime: '5–6 hours',
    expectedResult: 'An enterprise-grade flagship web platform demonstrating full junior full-stack frontend capability.'
  }
];

// ============================================================================
// 2. DATASET: Modern Web Technologies Guide
// ============================================================================
const modernTechnologiesData = {
  nextjs: {
    key: 'nextjs',
    name: 'Next.js',
    category: 'React Production Framework',
    badgeClass: 'tech-badge-next',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>`,
    tagline: 'The React Framework for the Web — Built for Speed, SEO, and Scale.',
    overview: 'Next.js is a flexible React framework developed by Vercel that gives developers building blocks to create fast, full-stack web applications. Rather than building a React app purely on the client side, Next.js handles tooling, routing, data fetching, and rendering automatically.',
    coreFeatures: [
      'Server-Side Rendering (SSR) & Static Site Generation (SSG) for lightning-fast page loads and peak SEO rankings.',
      'App Router architecture with React Server Components, streaming, and nested layouts.',
      'Built-in API Routes to create serverless backend endpoints without setting up a separate server.',
      'Automatic image, font, and script optimization directly out of the box.'
    ],
    commonUseCases: 'E-commerce storefronts (e.g., Nike, Target), marketing websites, SaaS customer portals, high-traffic blogs, and enterprise web applications that demand top search engine visibility and sub-second load times.',
    whyLearnIt: 'Next.js is currently the most popular React framework in the global tech industry, making it an essential resume asset for modern web developers.'
  },
  vue: {
    key: 'vue',
    name: 'Vue.js',
    category: 'Progressive Reactive Framework',
    badgeClass: 'tech-badge-vue',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 22 8.5 12 15 2 8.5 12 2"></polygon><polygon points="12 15 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 15"></polygon></svg>`,
    tagline: 'An approachable, performant, and versatile framework for building user interfaces.',
    overview: 'Vue.js is an open-source model–view–viewmodel frontend JavaScript framework created by Evan You. It is designed to be incrementally adoptable: you can embed Vue into a single HTML page like a lightweight library, or scale it up to power massive single-page applications (SPAs).',
    coreFeatures: [
      'Declarative Rendering with an intuitive HTML-based template syntax that feels natural to web developers.',
      'Reactivity System utilizing JavaScript Proxies to track state changes and automatically update the DOM with minimal overhead.',
      'Single-File Components (.vue files) encapsulating HTML template, JavaScript logic, and scoped CSS in one clean file.',
      'Rich official ecosystem including Vue Router, Pinia for state management, and Nuxt.js for full-stack apps.'
    ],
    commonUseCases: 'Single-page applications (SPAs), interactive dashboards, content management interfaces, lightweight widgets embedded in existing legacy sites, and rapid prototyping.',
    whyLearnIt: 'Vue is renowned for having the gentlest learning curve among major frontend frameworks while providing incredible speed and flexibility.'
  },
  angular: {
    key: 'angular',
    name: 'Angular',
    category: 'Enterprise TypeScript Framework',
    badgeClass: 'tech-badge-angular',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    tagline: 'The application-design framework and development platform for creating efficient, sophisticated SPAs.',
    overview: 'Angular is a comprehensive, opinionated web framework developed and maintained by Google. Unlike libraries where you pick and choose tools, Angular comes as a complete "batteries-included" platform written in TypeScript with built-in conventions for everything from routing to HTTP communication.',
    coreFeatures: [
      'First-Class TypeScript Integration delivering strong type safety, autocompletion, and compile-time error detection.',
      'Dependency Injection (DI) system providing modular architecture and effortless unit testing.',
      'Two-Way Data Binding keeping your model and view synchronized in real time.',
      'Angular CLI for scaffolding, testing, building, and deploying production-grade enterprise codebases.'
    ],
    commonUseCases: 'Large-scale enterprise software, banking and financial portals, government applications, internal administrative dashboards, and mission-critical multi-team software suites.',
    whyLearnIt: 'Angular is heavily favored by Fortune 500 companies and enterprise institutions that prioritize strict architectural standards and long-term maintainability.'
  },
  backend: {
    key: 'backend',
    name: 'Backend Development',
    category: 'Server-Side Architecture & APIs',
    badgeClass: 'tech-badge-backend',
    iconSvg: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    tagline: 'Powering the Web Behind the Scenes: Data, Security, and Business Logic.',
    overview: 'Backend development refers to the server-side code that runs behind the scenes. While the frontend (HTML, CSS, JavaScript) handles what users see and touch in their browsers, the backend handles database queries, user authentication, security, server business logic, and API endpoints.',
    coreFeatures: [
      'Client-Server Architecture: Frontend sends HTTP requests (GET, POST, PUT, DELETE) and backend returns JSON data or HTML.',
      'Database Management: Storing and manipulating structured data via SQL (PostgreSQL, MySQL) or NoSQL (MongoDB).',
      'Authentication & Authorization: Handling secure logins with JWT tokens, session cookies, and encrypted passwords.',
      'REST & GraphQL APIs: Creating structured pathways for web and mobile apps to interact with servers.'
    ],
    commonUseCases: 'Payment processing (Stripe, PayPal), user authentication systems, database operations, background worker queues, cloud integrations, and transactional email dispatch.',
    whyLearnIt: 'Understanding how the backend communicates with the frontend turns you from a simple webpage builder into a versatile full-stack software engineer.',
    technologiesList: [
      {
        name: 'Node.js & Express.js',
        desc: 'Enables developers to use JavaScript on both the frontend and backend. Express is the industry-standard minimalist web server framework for building high-concurrency microservices and REST APIs.'
      },
      {
        name: 'Python (Django & Flask)',
        desc: 'Python web powerhouses. Django is a "batteries-included" framework with built-in ORM and admin panel, while Flask is a lightweight microframework perfect for AI integrations and data services.'
      },
      {
        name: 'PHP (Laravel)',
        desc: 'An elegant, productive MVC web framework featuring expressive syntax, the Eloquent ORM, built-in queue systems, and robust authentication tooling powering millions of web apps worldwide.'
      },
      {
        name: 'C# (.NET Core)',
        desc: 'Microsoft high-performance, cross-platform, typed enterprise framework renowned for raw speed, enterprise security, cloud scalability (Azure), and multi-tier corporate architectures.'
      }
    ]
  }
};

// ============================================================================
// 3. STATE MANAGEMENT & LOCAL STORAGE
// ============================================================================
const STORAGE_KEY = 'techbridge_intern_tasks_v1';

// Load saved tasks from localStorage or initialize with defaults
let tasksList = loadTasksFromStorage();
let activeFilter = 'all'; // 'all' | 'Completed' | 'In Progress' | 'Not Started'
let activeTechKey = 'nextjs';

/**
 * Loads tasks list from localStorage with graceful fallback
 */
function loadTasksFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === 8) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Could not read localStorage, loading initial tasks dataset:', e);
  }
  return JSON.parse(JSON.stringify(initialTasksData));
}

/**
 * Persists current tasks list to localStorage
 */
function saveTasksToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasksList));
  } catch (e) {
    console.warn('Could not write to localStorage:', e);
  }
}

// ============================================================================
// 4. CACHED DOM ELEMENTS
// ============================================================================
const totalTasksEl = document.getElementById('stat-total-tasks');
const completedTasksEl = document.getElementById('stat-completed-tasks');
const remainingTasksEl = document.getElementById('stat-remaining-tasks');
const progressPercentageEl = document.getElementById('stat-progress-percentage');
const progressBarFillEl = document.getElementById('dashboard-progress-bar');
const progressRatioTextEl = document.getElementById('progress-ratio-text');
const progressRemainingTextEl = document.getElementById('progress-remaining-text');
const celebrationBannerEl = document.getElementById('celebration-banner');

const tasksGridEl = document.getElementById('dashboard-tasks-grid');
const filterButtons = document.querySelectorAll('.task-filter-btn');
const resetTasksBtn = document.getElementById('reset-tasks-btn');

// Tech Explorer Elements
const techNavBtns = document.querySelectorAll('.tech-tab-btn');
const techDisplayPanel = document.getElementById('tech-display-panel');

// Modal Elements
const taskModal = document.getElementById('task-details-modal');
const modalBackdrop = document.getElementById('task-modal-backdrop');
const modalCloseBtn = document.getElementById('task-modal-close-btn');
const modalBodyContent = document.getElementById('task-modal-body');

// ============================================================================
// 5. PROGRESS CALCULATION & RENDERING
// ============================================================================

/**
 * Computes progress stats and updates the metrics cards and animated progress bar
 */
function updateProgressMetrics() {
  const total = tasksList.length;
  const completed = tasksList.filter(t => t.status === 'Completed').length;
  const remaining = total - completed;
  const percentage = Math.round((completed / total) * 100);

  // Update Metric Cards
  if (totalTasksEl) totalTasksEl.textContent = total;
  if (completedTasksEl) completedTasksEl.textContent = completed;
  if (remainingTasksEl) remainingTasksEl.textContent = remaining;
  if (progressPercentageEl) progressPercentageEl.textContent = `${percentage}%`;

  // Update Progress Bar & Subtexts
  if (progressBarFillEl) {
    progressBarFillEl.style.width = `${percentage}%`;
    progressBarFillEl.setAttribute('aria-valuenow', percentage);
  }

  if (progressRatioTextEl) {
    progressRatioTextEl.textContent = `${completed} / ${total} Tasks Completed`;
  }

  if (progressRemainingTextEl) {
    progressRemainingTextEl.textContent = `${remaining} Task${remaining === 1 ? '' : 's'} Remaining`;
  }

  // Show Celebration Banner when all 8 tasks are completed
  if (celebrationBannerEl) {
    if (completed === total) {
      celebrationBannerEl.style.display = 'block';
    } else {
      celebrationBannerEl.style.display = 'none';
    }
  }

  // Update filter pill counters if present
  updateFilterCounters(total, completed, remaining);
}

/**
 * Updates filter button badge counts
 */
function updateFilterCounters(total, completed, remaining) {
  const inProgressCount = tasksList.filter(t => t.status === 'In Progress').length;
  const notStartedCount = tasksList.filter(t => t.status === 'Not Started').length;

  const countAll = document.getElementById('count-all');
  const countCompleted = document.getElementById('count-completed');
  const countInProgress = document.getElementById('count-inprogress');
  const countNotStarted = document.getElementById('count-notstarted');

  if (countAll) countAll.textContent = total;
  if (countCompleted) countCompleted.textContent = completed;
  if (countInProgress) countInProgress.textContent = inProgressCount;
  if (countNotStarted) countNotStarted.textContent = notStartedCount;
}

// ============================================================================
// 6. TASKS TRACKER RENDERING & TOGGLING
// ============================================================================

/**
 * Returns filtered list of tasks based on active filter
 */
function getFilteredTasks() {
  if (activeFilter === 'all') return tasksList;
  return tasksList.filter(task => task.status === activeFilter);
}

/**
 * Returns helper status badge HTML and classes
 */
function getStatusBadgeConfig(status) {
  switch (status) {
    case 'Completed':
      return {
        badgeClass: 'status-badge-completed',
        label: 'Completed',
        iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
        buttonText: 'Mark In Progress',
        buttonClass: 'btn-status-toggle btn-toggle-reopen',
        nextStatus: 'In Progress'
      };
    case 'In Progress':
      return {
        badgeClass: 'status-badge-progress',
        label: 'In Progress',
        iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        buttonText: 'Mark as Completed',
        buttonClass: 'btn-status-toggle btn-toggle-complete',
        nextStatus: 'Completed'
      };
    default:
      return {
        badgeClass: 'status-badge-notstarted',
        label: 'Not Started',
        iconSvg: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
        buttonText: 'Start Task',
        buttonClass: 'btn-status-toggle btn-toggle-start',
        nextStatus: 'In Progress'
      };
  }
}

/**
 * Renders the 8 task cards into the dashboard grid
 */
function renderTasksGrid() {
  if (!tasksGridEl) return;

  const filteredTasks = getFilteredTasks();

  if (filteredTasks.length === 0) {
    tasksGridEl.innerHTML = `
      <div class="empty-filter-state glass-panel">
        <p>No tasks found with status: <strong>${activeFilter}</strong></p>
      </div>
    `;
    return;
  }

  const cardsHtml = filteredTasks.map(task => {
    const config = getStatusBadgeConfig(task.status);
    const isCompleted = task.status === 'Completed';

    return `
      <div class="dashboard-task-card glass-panel ${isCompleted ? 'card-is-completed' : ''}" id="task-card-${task.id}">
        
        <div class="task-card-header">
          <div class="task-number-row">
            <span class="dashboard-task-num">${task.taskNumber}</span>
            <span class="dashboard-task-day">${task.day}</span>
          </div>
          <span class="status-badge ${config.badgeClass}">
            ${config.iconSvg}
            <span>${config.label}</span>
          </span>
        </div>

        <h3 class="dashboard-task-title">${task.title}</h3>
        <p class="dashboard-task-desc">${task.shortDesc}</p>

        <div class="dashboard-task-footer">
          <button type="button" class="btn btn-view-task" data-view-id="${task.id}" aria-label="View details for ${task.title}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span>View Task</span>
          </button>

          <button type="button" class="btn ${config.buttonClass}" data-toggle-id="${task.id}" aria-label="Change status for ${task.title}">
            <span>${config.buttonText}</span>
            ${isCompleted ? 
              `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 12h18"></path></svg>` : 
              `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>`}
          </button>
        </div>

      </div>
    `;
  }).join('');

  tasksGridEl.innerHTML = cardsHtml;

  // Attach event listeners for status toggle buttons
  const toggleBtns = tasksGridEl.querySelectorAll('.btn-status-toggle');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = parseInt(btn.getAttribute('data-toggle-id'), 10);
      toggleTaskStatus(taskId);
    });
  });

  // Attach event listeners for "View Task" buttons
  const viewBtns = tasksGridEl.querySelectorAll('.btn-view-task');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const taskId = parseInt(btn.getAttribute('data-view-id'), 10);
      openTaskModal(taskId);
    });
  });
}

/**
 * Toggles a task status interactively:
 * If Completed -> switches to In Progress
 * If In Progress -> switches to Completed
 * If Not Started -> switches to In Progress
 */
function toggleTaskStatus(taskId) {
  const task = tasksList.find(t => t.id === taskId);
  if (!task) return;

  if (task.status === 'Completed') {
    task.status = 'In Progress';
  } else if (task.status === 'In Progress') {
    task.status = 'Completed';
  } else {
    task.status = 'Completed'; // Marking Not Started jumps directly to Completed when clicked
  }

  // Save to localStorage
  saveTasksToStorage();

  // Re-calculate progress and re-render without page reload
  updateProgressMetrics();
  renderTasksGrid();
}

// ============================================================================
// 7. TASK DETAILS MODAL
// ============================================================================

/**
 * Opens task details modal dialog
 */
function openTaskModal(taskId) {
  const task = tasksList.find(t => t.id === taskId);
  if (!task || !taskModal || !modalBodyContent) return;

  const config = getStatusBadgeConfig(task.status);
  const skillsHtml = task.skills.map(s => `<span class="skill-tag">${s}</span>`).join('');
  const deliverablesHtml = task.deliverables.map(d => `<li>${d}</li>`).join('');

  modalBodyContent.innerHTML = `
    <div class="modal-task-header">
      <div class="task-number-row" style="margin-bottom: 0.5rem;">
        <span class="dashboard-task-num">${task.taskNumber}</span>
        <span class="dashboard-task-day">${task.day} (30-Day Internship)</span>
        <span class="status-badge ${config.badgeClass}">${config.label}</span>
      </div>
      <h2 class="modal-task-title">${task.title}</h2>
      <p class="modal-task-desc">${task.shortDesc}</p>
    </div>

    <div class="modal-section-box">
      <h4 class="modal-sec-heading">🎯 Task Objective</h4>
      <p class="modal-sec-text">${task.objective}</p>
    </div>

    <div class="modal-section-box">
      <h4 class="modal-sec-heading">🧠 Skills Practiced</h4>
      <div class="modal-tags-list">
        ${skillsHtml}
      </div>
    </div>

    <div class="modal-section-box">
      <h4 class="modal-sec-heading">📋 Milestone Deliverables</h4>
      <ul class="modal-deliverables-list">
        ${deliverablesHtml}
      </ul>
    </div>

    <div class="modal-footer-stats">
      <div class="modal-stat-item">
        <span class="stat-meta-label">⏱️ Estimated Time:</span>
        <span class="stat-meta-value">${task.estimatedTime}</span>
      </div>
      <div class="modal-stat-item">
        <span class="stat-meta-label">🏆 Expected Result:</span>
        <span class="stat-meta-value">${task.expectedResult}</span>
      </div>
    </div>

    <div class="modal-actions-bar">
      <button type="button" class="btn ${config.buttonClass} btn-modal-status-toggle" data-modal-toggle-id="${task.id}">
        <span>${task.status === 'Completed' ? 'Mark as Incomplete' : 'Mark as Completed'}</span>
      </button>
      <button type="button" class="btn btn-secondary btn-close-modal-action">
        <span>Close Details</span>
      </button>
    </div>
  `;

  // Display modal
  taskModal.classList.add('modal-active');
  document.body.style.overflow = 'hidden';

  // Modal internal buttons
  const modalToggleBtn = modalBodyContent.querySelector('.btn-modal-status-toggle');
  if (modalToggleBtn) {
    modalToggleBtn.addEventListener('click', () => {
      toggleTaskStatus(task.id);
      openTaskModal(task.id); // Refresh modal view
    });
  }

  const modalCloseAction = modalBodyContent.querySelector('.btn-close-modal-action');
  if (modalCloseAction) {
    modalCloseAction.addEventListener('click', closeTaskModal);
  }
}

function closeTaskModal() {
  if (!taskModal) return;
  taskModal.classList.remove('modal-active');
  document.body.style.overflow = '';
}

// ============================================================================
// 8. MODERN WEB TECHNOLOGIES INTERACTIVE EXPLORER
// ============================================================================

/**
 * Switches the active technology and renders its detailed interactive breakdown
 */
function switchTechnology(techKey) {
  const tech = modernTechnologiesData[techKey];
  if (!tech || !techDisplayPanel) return;

  activeTechKey = techKey;

  // Update tab buttons active state
  techNavBtns.forEach(btn => {
    const isTarget = btn.getAttribute('data-tech') === techKey;
    btn.classList.toggle('active', isTarget);
    btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
  });

  // Fade out effect
  techDisplayPanel.style.opacity = '0';
  techDisplayPanel.style.transform = 'translateY(6px)';

  setTimeout(() => {
    let extraTechListHtml = '';
    if (tech.technologiesList) {
      extraTechListHtml = `
        <div class="tech-sub-grid">
          <h4 class="tech-sub-title">Major Backend Technologies to Know:</h4>
          <div class="backend-tech-cards-grid">
            ${tech.technologiesList.map(item => `
              <div class="backend-tech-card">
                <h5>${item.name}</h5>
                <p>${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    const featuresHtml = tech.coreFeatures.map(f => `<li>${f}</li>`).join('');

    techDisplayPanel.innerHTML = `
      <div class="tech-panel-header">
        <div class="tech-header-left">
          <div class="tech-icon-container">
            ${tech.iconSvg}
          </div>
          <div>
            <div class="tech-badge ${tech.badgeClass}">${tech.category}</div>
            <h3 class="tech-panel-title">${tech.name}</h3>
          </div>
        </div>
      </div>

      <p class="tech-tagline"><em>"${tech.tagline}"</em></p>
      <p class="tech-overview">${tech.overview}</p>

      <div class="tech-details-grid">
        <div class="tech-detail-box">
          <h4 class="detail-box-title">⚡ Core Architecture &amp; Capabilities</h4>
          <ul class="tech-features-list">
            ${featuresHtml}
          </ul>
        </div>

        <div class="tech-detail-box">
          <h4 class="detail-box-title">💼 Common Real-World Use Cases</h4>
          <p class="detail-box-text">${tech.commonUseCases}</p>
          
          <h4 class="detail-box-title" style="margin-top: 1.25rem;">🚀 Why It Matters to You</h4>
          <p class="detail-box-text">${tech.whyLearnIt}</p>
        </div>
      </div>

      ${extraTechListHtml}
    `;

    techDisplayPanel.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    techDisplayPanel.style.opacity = '1';
    techDisplayPanel.style.transform = 'translateY(0)';
  }, 120);
}

// ============================================================================
// 9. EVENT LISTENERS & SETUP
// ============================================================================

function setupDashboardEvents() {
  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter');
      renderTasksGrid();
    });
  });

  // Reset tasks button (resets back to initial state in storage)
  if (resetTasksBtn) {
    resetTasksBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your task tracking progress back to defaults?')) {
        tasksList = JSON.parse(JSON.stringify(initialTasksData));
        saveTasksToStorage();
        updateProgressMetrics();
        renderTasksGrid();
      }
    });
  }

  // Tech Explorer tab buttons
  techNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const techKey = btn.getAttribute('data-tech');
      switchTechnology(techKey);
    });
  });

  // Modal close handlers
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeTaskModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeTaskModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && taskModal && taskModal.classList.contains('modal-active')) {
      closeTaskModal();
    }
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  setupDashboardEvents();
  updateProgressMetrics();
  renderTasksGrid();
  switchTechnology('nextjs'); // Default tech tab
});
