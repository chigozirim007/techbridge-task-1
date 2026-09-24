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

## 📁 Repository Structure (Modular Architecture with Git Submodules)

This parent repository (`techbridge-task-1`) orchestrates the full platform, linking two independent GitHub repositories as **Git Submodules**:

```
techbridge-task-1/ (Parent Umbrella Repository)
├── .gitmodules              # Submodule configuration linking frontend & backend
├── README.md                # Master Platform Documentation
│
├── backend/ (Submodule -> https://github.com/chigozirim007/techbridge-backend.git)
│   ├── server.js            # Node.js & Express REST API server
│   ├── package.json         # Backend dependencies (express, cors)
│   ├── package-lock.json
│   ├── render.yaml          # Render blueprint for backend Web Service
│   ├── README.md            # Standalone API documentation
│   └── data/
│       └── tasks.json       # JSON file database for 8 tasks
│
└── frontend/ (Submodule -> https://github.com/chigozirim007/techbridge-frontend.git)
    ├── index.html           # TechBridge Homepage (Task 1)
    ├── programs.html        # Programs Catalog (Task 2)
    ├── tasks.html           # Interactive Roadmap (Tasks 3 & 4)
    ├── tracker.js           # Roadmap Engine (Task 4)
    ├── challenges.html      # 30-Day Challenge Hub (Task 5)
    ├── challenges.js        # Challenge Hub Filtering Engine (Task 5)
    ├── dashboard.html       # Intern Dashboard (Tasks 6 & 7)
    ├── dashboard.js         # Progress Engine & API Connector (Tasks 6 & 7)
    ├── form.html            # Application Portal
    ├── style.css            # Complete Pure CSS3 Design System
    ├── README.md            # Standalone Frontend documentation
    └── images/              # Assets & branding vectors
```

---

## 🔗 The 3 Repositories on GitHub

1. **Parent Repository**: [`chigozirim007/techbridge-task-1`](https://github.com/chigozirim007/techbridge-task-1) (Contains both submodules).
2. **Backend Repository**: [`chigozirim007/techbridge-backend`](https://github.com/chigozirim007/techbridge-backend) (Standalone Node/Express API).
3. **Frontend Repository**: [`chigozirim007/techbridge-frontend`](https://github.com/chigozirim007/techbridge-frontend) (Standalone UI).

### Cloning the Parent Repo with Submodules:
```bash
git clone --recurse-submodules https://github.com/chigozirim007/techbridge-task-1.git
```

---

## ☁️ How to Host the Backend on Render (Step-by-Step)

Because the backend is its own standalone repository (`chigozirim007/techbridge-backend`), hosting on Render is clean and takes less than 1 minute:

1. Open **[Render Dashboard](https://dashboard.render.com/)** and sign in with GitHub.
2. Click **"New +"** $\rightarrow$ **"Web Service"**.
3. In the repository list, choose **`chigozirim007/techbridge-backend`** (click **Connect**).
4. Render will automatically detect the settings:
   - **Name**: `techbridge-backend` *(or any preferred name)*
   - **Root Directory**: *(Leave empty / blank)*
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. Click **"Deploy Web Service"**.
6. Once deployed, Render gives you a public URL (e.g. `https://techbridge-backend.onrender.com`).
   - Health check: `https://<your-backend>.onrender.com/api/health`
   - Tasks list: `https://<your-backend>.onrender.com/api/tasks`

### Connecting Frontend to Your Live Render Backend
Open `dashboard.html` in your browser (locally or on GitHub Pages). In the connection prompt, enter your Render URL (e.g. `https://techbridge-backend.onrender.com`) and click **"Connect"**. The badge will immediately switch to:
> `Backend API: Connected (Cloud Live)` with a pulsing green indicator.

