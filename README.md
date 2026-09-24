# TechBridge Platform — Tasks 1, 2, 3, 4, 5, 6 & 7

**Organization**: TechBridge by Baselink Services Limited  
**Tagline**: Bridging Learning to Real-World Experience  
**Tech Stack**: HTML5 + CSS3 + Pure Vanilla JavaScript (Frontend) • Node.js + Express.js + JSON Persistence (Backend API)  
**Official Application Form**: [TechBridge Internship Application Form](https://forms.gle/8EbdSy5ttGfLZfjv5?utm_source=chatgpt.com)  

---

## 📝 Developer Note (Task 7: Build a TechBridge Task Management API)

In **Task 7**, I engineered a dedicated **Node.js & Express.js REST API Server** (`backend/server.js`) backed by JSON storage (`backend/data/tasks.json`) and connected it to the **TechBridge Intern Dashboard** (`dashboard.html` & `dashboard.js`).

This connects the frontend UI directly to a live server backend, demonstrating how data flows from Client → Server → Storage.

### Task 7 Highlights:
1. **Node.js & Express REST API Backend** (`backend/server.js`):
   - Configured on Port 3000 with CORS middleware enabled for seamless client communication.
   - `GET /api/health` — System health check reporting server status, port, and timestamp.
   - `GET /api/tasks` — Retrieves all 8 official TechBridge internship tasks.
   - `GET /api/tasks/:id` — Retrieves detailed specifications for a specific task.
   - `PUT /api/tasks/:id` — Updates task status (`completed`, `in-progress`, `not-started`) and persists to `tasks.json`.
   - `POST /api/tasks` & `DELETE /api/tasks/:id` — Extensible endpoints for full CRUD operations.
   - Static asset hosting: Can also serve the complete web application directly from `http://localhost:3000/`.
2. **Real-Time Backend Status Badge**:
   - Live visual indicator displaying `Backend API: Connected (Port 3000)` with a pulsing emerald dot when the Node server is active.
   - Switches dynamically to `Backend API: Offline` with an amber/red dot if the server is stopped or unreachable.
   - Periodic 10-second background heartbeat keeps connection status synchronized in real time.
3. **Asynchronous Client Integration (`fetch()`)**:
   - `fetchTasksFromApi()` loads tasks dynamically on page load with an animated loading spinner.
   - `toggleTaskStatus()` issues asynchronous `PUT` requests when tasks are marked as completed or in progress.
   - `openTaskModal()` queries `GET /api/tasks/:id` to fetch fresh task deliverables and objectives.
   - Graceful offline fallback: if backend is offline, alerts user with a clear error card, "Retry Connection" button, or option to continue with cached local storage.
4. **Task Search Box**:
   - Live filter input allowing interns to search across tasks by title, skill keywords, or milestone numbers.
5. **REST API Documentation Card**:
   - Clean reference table embedded directly in the dashboard displaying all endpoints, HTTP methods, and sample payloads.

An intern can now track their real-time progress across all 8 practical internship tasks, interactively mark tasks as completed, inspect detailed milestone briefs in an accessible modal dialog, access the Challenge Hub from Task 5, and explore modern web frameworks (Next.js, Vue.js, Angular, and Backend Development).

### Core Features:
1. **Welcome & Profile Header**:
   - Displays intern name (*Alex Johnson*), active track (*Web Development Intern*), cohort status (*Status: In Progress*), and timeline indicator (*Day 19 of 30*).
2. **Real-Time Internship Progress Engine**:
   - Displays Total Tasks (8), Completed Tasks, Remaining Tasks, and Progress Percentage.
   - Animated progress bar updates width and ratio text dynamically without page refresh.
   - State persistence using browser `localStorage` with a *"Reset Progress Defaults"* action.
   - Milestone celebration banner triggers when all 8 tasks are marked as completed.
3. **Interactive Task Tracker (Tasks 1–8)**:
   - Dynamic JavaScript data model generating all 8 task cards.
   - Color-coded status badges: `Completed` (Green), `In Progress` (Amber), `Not Started` (Slate).
   - Instant status toggling: clicking *"Mark as Completed"* / *"Mark In Progress"* recalculates counts, percentage, and progress bar in real time.
4. **Task Status Filtering**:
   - Instant filter pills: `[ All (8) ]` `[ Completed ]` `[ In Progress ]` `[ Not Started ]`.
   - Re-renders cards dynamically without page reload.
5. **View Task Details Modal**:
   - In-depth modal dialog displaying task objective, skills practiced, deliverables checklist, estimated time, expected results, and status toggle.
6. **Task 5 Challenge Hub Integration**:
   - Dedicated connection widget inviting interns to explore 20 practical challenges across the 30-day timeline with a 1-click jump to `challenges.html`.
7. **Modern Web Technologies Interactive Explorer**:
   - Interactive switcher tabs: `[ Next.js ]` `[ Vue.js ]` `[ Angular ]` `[ Backend Development ]`.
   - Explains what each technology is, what developers use it for, core architectural features, real-world use cases, and how client-server APIs connect frontend to backend.
   - Detailed breakdown of backend technologies: Node.js, Express.js, Django, Flask, Laravel, and .NET.
8. **100% Pure Vanilla JS**:
   - Zero external libraries or frameworks (no React, Vue, or Next.js required to run).
   - Full keyboard accessibility and responsive design down to 400px.

---

## 📁 Repository Structure

```
techbridge-task-1/
├── index.html          # TechBridge Homepage (Task 1)
├── programs.html       # TechBridge Dedicated Programs Experience (Task 2)
├── tasks.html          # Interactive Two-Track Roadmap (Tasks 3 & 4)
├── tracker.js          # Two-Track Task Switcher Engine (Task 4)
├── challenges.html     # Interactive TechBridge Challenge Hub (Task 5)
├── challenges.js       # 30-Day Challenge Engine & Filtering System (Task 5)
├── dashboard.html      # Interactive TechBridge Intern Dashboard (Task 6)
├── dashboard.js        # Progress Calculation & Task Tracker Engine (Task 6)
├── form.html           # Official Application Portal & Navigation Page
├── style.css           # Complete Pure CSS3 Design System & Responsive Rules
├── README.md           # Developer Documentation & Progress Notes
└── images/
    ├── logo.png                # Official TechBridge Logo Image
    ├── logo.jpg                # Official TechBridge Logo Copy
    ├── logo.svg                # Vector Logo Asset
    ├── favicon.svg             # Site Favicon
    ├── hero-graphic.svg        # Hero Section Animation Graphic
    ├── program-webdev.svg      # Web Development Program Mockup
    ├── program-analytics.svg   # Data Analytics Program Dashboard
    └── internship-badge.svg    # 30-Day Practical Internship Seal
```

---

## 📊 8-Task Dashboard Curriculum Tracking (Web Development)

| Task | Title | Day | Default Status | Key Focus & Milestone Deliverable |
| :--- | :--- | :--- | :--- | :--- |
| **Task 1** | Build the TechBridge Homepage | Day 1 | `Completed` | First version of TechBridge website using structured HTML5 & CSS3. |
| **Task 2** | Build the TechBridge Programs Experience | Day 4 | `Completed` | Dedicated Programs catalog detailing Data Analytics and Web Development. |
| **Task 3** | Build the Internship Tasks Experience | Day 8 | `Completed` | 30-day timeline visualization and expandable milestone deliverables. |
| **Task 4** | Build an Interactive Internship Roadmap | Day 11 | `Completed` | Pure Vanilla JS dual-track switcher (Data Analytics & Web Dev). |
| **Task 5** | Build the TechBridge Challenge Hub | Day 15 | `Completed` | 20 practical challenges spanning 30 days with filtering & modals. |
| **Task 6** | Build the TechBridge Intern Dashboard | Day 19 | `In Progress` | Student dashboard with real-time progress calculations & tech explorer. |
| **Task 7** | Build the Task Submission & Review Portal | Day 22 | `Not Started` | Submission interface accepting repository links and live URLs. |
| **Task 8** | Build the Complete TechBridge Platform | Day 26 | `Not Started` | Production unification of all components into an enterprise platform. |

---

## 🚀 Modern Web Technologies Covered in Explorer

1. **Next.js**: React production framework by Vercel; Server-Side Rendering (SSR), Static Site Generation (SSG), App Router, file-based routing, and built-in API routes.
2. **Vue.js**: Progressive reactive framework by Evan You; declarative templates, reactive proxy system, Single-File Components (.vue), and Pinia state management.
3. **Angular**: Comprehensive enterprise TypeScript platform by Google; two-way data binding, dependency injection (DI), RxJS observables, and Angular CLI.
4. **Backend Development**: Server-side logic, database interaction (SQL & NoSQL), authentication (JWT/sessions), and REST/GraphQL APIs. Details Node.js + Express, Python (Django & Flask), PHP (Laravel), and C# (.NET Core).

---

## 🧪 Testing & Verification Checklist

- [x] **Dashboard Page**: Accessible at `dashboard.html` with welcome profile, metric cards, and responsive layout.
- [x] **Progress Metrics**: Real-time calculation of total tasks (8), completed count, remaining count, and percentage.
- [x] **Animated Progress Bar**: Updates smoothly and proportionally whenever task statuses are toggled.
- [x] **Interactive Task Tracker**: Tasks 1–8 rendered dynamically via JavaScript with status badges.
- [x] **Status Toggling**: Clicking *"Mark as Completed"* immediately updates status, completed counter, remaining counter, and percentage without page reload.
- [x] **Task Filtering**: Filtering by `All`, `Completed`, `In Progress`, and `Not Started` updates cards dynamically.
- [x] **View Task Details Modal**: Modal dialog opens displaying objectives, skills, deliverables, time estimates, and status toggle.
- [x] **Challenge Hub Connection**: Widget directly links to Task 5 Challenge Hub (`challenges.html`).
- [x] **Technology Explorer**: Clicking `Next.js`, `Vue.js`, `Angular`, and `Backend Development` dynamically updates panel content.
- [x] **Storage Persistence**: Task statuses persist in `localStorage` across browser refreshes, with a working reset option.
- [x] **Cross-Page Navigation**: All 6 pages (`index.html`, `programs.html`, `tasks.html`, `challenges.html`, `dashboard.html`, `form.html`) share unified navigation and footer links.
- [x] **Responsive Design**: Tested and verified down to 400px minimum viewport width.
- [x] **REST API Server**: Endpoints verified (`GET /api/health`, `GET /api/tasks`, `GET /api/tasks/:id`, `PUT /api/tasks/:id`).
- [x] **Cloud Ready for Render**: Root `package.json` and `render.yaml` blueprint configured for zero-setup deployment.

---

## ☁️ How to Host on Render (Step-by-Step)

The repository is pre-configured with a root [package.json](file:///c:/Users/nwoke/techbridge-task-1/package.json) and [render.yaml](file:///c:/Users/nwoke/techbridge-task-1/render.yaml) so that it deploys seamlessly to Render as a **Web Service**.

### Option 1: Standard Web Service (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com/) and sign in with GitHub.
2. Click **New +** at the top right and select **Web Service**.
3. Choose your repository: `chigozirim007/techbridge-task-1`.
4. Configure the settings (most are auto-detected):
   - **Name**: `techbridge-platform` (or any custom name)
   - **Region**: Choose the closest region (e.g. Frankfurt, Oregon, Ohio)
   - **Branch**: `main`
   - **Root Directory**: *(Leave empty)*
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Click **Deploy Web Service**.
6. Render will build and launch your full-stack app. Once complete, your live site URL will be:
   - **Homepage**: `https://<your-service-name>.onrender.com/`
   - **Intern Dashboard**: `https://<your-service-name>.onrender.com/dashboard.html`
   - **Health Check**: `https://<your-service-name>.onrender.com/api/health`
   - **REST API Tasks**: `https://<your-service-name>.onrender.com/api/tasks`

### Option 2: Render Blueprint (1-Click)
1. Click **New +** $\rightarrow$ **Blueprint**.
2. Connect `chigozirim007/techbridge-task-1`.
3. Render automatically reads `render.yaml` and provisions the Web Service with health check monitoring at `/api/health`.
4. Click **Apply**.

