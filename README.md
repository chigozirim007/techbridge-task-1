# TechBridge Platform — Tasks 1, 2, 3, 4 & 5

**Organization**: TechBridge by Baselink Services Limited  
**Tagline**: Bridging Learning to Real-World Experience  
**Tech Stack**: HTML5 + CSS3 + Pure Vanilla JavaScript (ES6+, Zero Frameworks)  
**Official Application Form**: [TechBridge Internship Application Form](https://forms.gle/8EbdSy5ttGfLZfjv5?utm_source=chatgpt.com)  

---

## 📝 Developer Note (Task 5: TechBridge Challenge Hub)

In **Task 5**, I developed the **Interactive TechBridge Challenge Hub** (`challenges.html` & `challenges.js`), answering the question: *"What kind of challenges will I actually be working on during the internship?"*.

Rather than just listing the tracks, visitors can now explore **20 realistic, practical challenges** (10 Data Analytics + 10 Web Development) structured across the **30-day internship timeline** (from Day 2 up to the Day 30 Capstones).

### Core Features:
1. **30-Day Spanning Curriculum (20 Challenges)**:
   - **Data Analytics Track**: 10 challenges covering data cleaning, multi-branch formulas & pivot tables, demographic segmentation, executive dashboards, SQL querying, multi-table joins, supply chain wrangling (XLOOKUP), SaaS churn analytics, e-commerce deep-dive, and enterprise BI capstone.
   - **Web Development Track**: 10 challenges covering startup landing pages, portfolio grids, form validation UI, e-commerce product catalogs, personal budget trackers, dynamic quiz apps, Kanban task boards, weather API dashboards, intern analytics portals, and unified enterprise capstone platforms.
2. **Interactive Dual-Level Filtering**:
   - **Track Filter**: `All Tracks` | `Data Analytics` | `Web Development`
   - **Difficulty Filter**: `All Levels` | `Beginner` | `Intermediate` | `Advanced`
   - Both filters work in harmony with active glowing visual indicators.
3. **Real-Time Keyword Search**: Instant search filtering challenges across titles, descriptions, competencies, and day milestones.
4. **Interactive Modal Popups**: Clicking "View Challenge" opens a rich project brief modal without refreshing the page, displaying the objective, skills practiced, tools used, deliverables checklist, estimated time, and expected results.
5. **Dynamic Counter & Empty State**: Live counter badge (e.g. *"Showing 20 of 20 Challenges"*) and a dedicated empty state with a 1-click *"Reset All Filters"* action.
6. **Zero Frameworks**: 100% pure HTML5, CSS3, and modern Vanilla JavaScript with keyboard accessibility (ESC to close, focus trapping).

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

## 🎯 30-Day Challenge Hub Curriculum (20 Challenges)

### 📈 Data Analytics Track (`DA-30`)
1. **Day 2**: *Retail Store Sales Data Cleaning* | `Beginner` | 2–3 hours | Google Sheets / Excel
2. **Day 5**: *Multi-Branch Revenue & Expense Analysis* | `Beginner` | 3–4 hours | Pivot Tables & Conditional Formulas
3. **Day 8**: *Customer Demographics & Behavior Segmentation* | `Beginner → Intermediate` | 3–4 hours | Nested Logic & RFM Tiers
4. **Day 11**: *Executive KPI Sales Performance Dashboard* | `Beginner → Intermediate` | 4–5 hours | Interactive Slicers & Scorecards
5. **Day 14**: *Introduction to SQL Querying & Order Extraction* | `Beginner → Intermediate` | 3–4 hours | SELECT, WHERE, ORDER BY, LIMIT
6. **Day 17**: *Multi-Table SQL Joins & Product Sales Aggregations* | `Intermediate` | 4–5 hours | INNER/LEFT JOIN, GROUP BY, HAVING
7. **Day 20**: *Supply Chain Inventory Wrangling with XLOOKUP* | `Intermediate` | 3–4 hours | XLOOKUP, IFERROR, Dynamic Arrays
8. **Day 23**: *SaaS Customer Churn & Retention Analytics* | `Intermediate` | 4–5 hours | Churn Modeling & Cohort Analysis
9. **Day 26**: *End-to-End E-Commerce Performance Deep-Dive* | `Advanced` | 5–6 hours | Multi-Table SQL + Financial Modeling
10. **Day 30**: *Enterprise Business Intelligence Capstone* | `Advanced` | 6–8 hours | Full Enterprise Turnaround Intelligence

### 💻 Web Development Track (`WD-30`)
1. **Day 2**: *Modern Startup Landing Page with Semantic HTML5 & CSS3* | `Beginner` | 2–3 hours | HTML5, Flexbox, CSS Variables
2. **Day 5**: *Developer Portfolio Website with Dynamic Theme & Project Grid* | `Beginner` | 3–4 hours | CSS Grid, Card Layouts
3. **Day 8**: *Interactive Contact Form with Validation & Feedback UI* | `Beginner → Intermediate` | 3–4 hours | Form Validation & ARIA
4. **Day 11**: *Responsive E-Commerce Product Showcase & Filter System* | `Beginner → Intermediate` | 4–5 hours | DOM Generation, Array Methods
5. **Day 14**: *Interactive Personal Expense & Budget Tracker* | `Beginner → Intermediate` | 4–5 hours | CRUD DOM, LocalStorage
6. **Day 17**: *Dynamic Quiz & Knowledge Assessment Web App* | `Intermediate` | 4–5 hours | Timing Functions, State Machines
7. **Day 20**: *Kanban Task Management Board with Drag & Drop Simulation* | `Intermediate` | 5–6 hours | Workflow UI, Task Columns
8. **Day 23**: *Weather Forecast App with REST API Integration Simulation* | `Intermediate` | 4–5 hours | Async/Await, JSON Parsing
9. **Day 26**: *Full-Featured Intern Dashboard & Analytics Portal* | `Advanced` | 5–6 hours | Dashboard Grid, Metrics Cards
10. **Day 30**: *Unified Enterprise Web Platform Capstone* | `Advanced` | 6–8 hours | Modular Architecture, Production Capstone

---

## 🧪 Testing & Verification Checklist

- [x] **Challenge Hub Page**: Accessible at `challenges.html` with introduction, stats, and unified header/footer.
- [x] **30-Day Coverage**: 20 challenges spanning Days 2 to 30 (10 Data Analytics + 10 Web Development).
- [x] **Track Filtering**: Switching between *All Tracks*, *Data Analytics*, and *Web Development* instantly re-renders the cards without page reload.
- [x] **Difficulty Filtering**: Filtering by *Beginner*, *Intermediate*, or *Advanced* updates results accurately.
- [x] **Combined Filtering**: Track filter + difficulty filter work together simultaneously.
- [x] **Real-Time Search**: Instant keyword search filters challenges across titles, descriptions, and skills.
- [x] **Interactive Modal Dialog**: Clicking "View Challenge" opens a modal displaying objective, skills, tools, deliverables, time, and expected results.
- [x] **Modal Accessibility**: Closes on close button click, backdrop click, or ESC keyboard press. Body scroll locked while open.
- [x] **Empty State & Reset**: Clear empty state rendered when no challenges match, with a working *"Reset All Filters"* button.
- [x] **Cross-Page Navigation**: Navigation menu and footer updated across `index.html`, `programs.html`, `tasks.html`, `challenges.html`, and `form.html`.
- [x] **Responsive Design**: Tested and optimized down to 400px minimum width.
