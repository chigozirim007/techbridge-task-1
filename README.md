# TechBridge Platform — Tasks 1, 2, 3 & 4

**Organization**: TechBridge by Baselink Services Limited  
**Tagline**: Bridging Learning to Real-World Experience  
**Tech Stack**: HTML5 + CSS3 + Pure Vanilla JavaScript (ES6+, Zero Frameworks)  
**Official Application Form**: [TechBridge Internship Application Form](https://forms.gle/8EbdSy5ttGfLZfjv5?utm_source=chatgpt.com)  

---

## 📝 Developer Note (Task 4: Interactive Internship Task Tracker)

In **Task 4**, I developed the **Interactive Two-Track Internship Roadmap** (`tasks.html` & `tracker.js`), introducing Vanilla JavaScript to the TechBridge platform without any external frameworks (no React, Vue, or Next.js).

A visitor can now seamlessly switch between the **Data Analytics** and **Web Development** tracks without refreshing the page. The application demonstrates core JavaScript fundamentals:
1. **Variables**: Managing application state (`currentTrack`).
2. **Arrays & Objects**: Storing full curriculum data for both 8-task tracks (tasks, days, titles, descriptions, difficulty tiers, competencies, and deliverables).
3. **Functions**: Modular rendering functions (`renderTrackHeader`, `renderTimeline`, `renderTaskCards`, `switchTrack`).
4. **Event Listeners**: Click & keyboard event handlers on segmented tab buttons and timeline milestones.
5. **Conditional Logic**: Validating track keys, setting dynamic styling classes, and toggling ARIA attributes.
6. **DOM Manipulation**: Updating the "Currently Viewing" status banner, 30-day timeline nodes, and task cards in real-time.

---

## 📁 Repository Structure

```
techbridge-task-1/
├── index.html          # TechBridge Homepage (Task 1)
├── programs.html       # TechBridge Dedicated Programs Experience (Task 2)
├── tasks.html          # Interactive Two-Track Roadmap Interface (Tasks 3 & 4)
├── tracker.js          # Pure Vanilla JavaScript Interactive Task Tracker (Task 4)
├── form.html           # Official Application Portal & Navigation Page
├── style.css           # Pure CSS3 Design System & Responsive Rules
├── README.md           # Developer Documentation & Notes
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

## 📊 Official Two-Track Curriculum Comparison

### 💻 Web Development Track (`WD-30`)
| Task | Title | Day | Difficulty | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Task 1** | Build the TechBridge Homepage | Day 1 | `Beginner` | Create the first version of the TechBridge website using HTML and CSS. |
| **Task 2** | Build the TechBridge Programs Experience | Day 4 | `Beginner` | Create a Programs experience presenting TechBridge's available learning programs. |
| **Task 3** | Build the Internship Tasks Experience | Day 8 | `Beginner → Intermediate` | Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey. |
| **Task 4** | Build an Interactive Internship Roadmap | Day 11 | `Beginner → Intermediate` | Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks. |
| **Task 5** | Build the Intern Registration Experience | Day 15 | `Intermediate` | Create a professional registration and onboarding interface for TechBridge interns. |
| **Task 6** | Build the Task Submission System | Day 19 | `Intermediate` | Create an interface through which interns can prepare and submit their task work. |
| **Task 7** | Build the Intern Dashboard | Day 22 | `Intermediate` | Create a dashboard where an intern can view their profile, progress, tasks and submissions. |
| **Task 8** | Build the Complete TechBridge Internship Platform | Day 26 | `Intermediate` | Combine the different components created during the internship into a complete TechBridge platform. |

### 📈 Data Analytics Track (`DA-30`)
| Task | Title | Day | Difficulty | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Task 1** | Data Cleaning Basics | Day 1 | `Beginner` | Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types. |
| **Task 2** | Formulas & Pivot Tables | Day 4 | `Beginner` | Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset. |
| **Task 3** | Data Visualization | Day 8 | `Beginner → Intermediate` | Create charts and a simple dashboard that communicate useful insights from a dataset. |
| **Task 4** | Introduction to SQL | Day 11 | `Beginner → Intermediate` | Practice basic SQL queries and use them to answer real-world questions about data. |
| **Task 5** | SQL Joins & Aggregations | Day 15 | `Intermediate` | Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables. |
| **Task 6** | Lookup Functions & Data Wrangling | Day 19 | `Intermediate` | Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches. |
| **Task 7** | Mini Analysis Project | Day 22 | `Intermediate` | Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations. |
| **Task 8** | Capstone Project | Day 26 | `Intermediate` | Complete a larger project combining spreadsheet analysis and SQL using at least two related tables. |

---

## 🧪 Testing & Verification Checklist

- [x] **Test 1 — Initial Page Load**: Web Development track renders by default with "Currently Viewing: WEB DEVELOPMENT", 30-day timeline nodes, and all 8 tasks.
- [x] **Test 2 — Data Analytics Switch**: Clicking `[ Data Analytics ]` instantly updates the status badge to "Currently Viewing: DATA ANALYTICS", updates the 30-day progression timeline, and renders all 8 Data Analytics tasks with exact days, titles, descriptions, and difficulty badges.
- [x] **Test 3 — Web Development Switch**: Clicking `[ Web Development ]` smoothly switches back without browser reload.
- [x] **Test 4 — Multi-Switch Stability**: Repeated switching confirms state consistency, zero console errors, and instant DOM updates.
- [x] **Test 5 — Timeline Interaction**: Clicking any day milestone node smoothly scrolls to and highlights the target task card.
- [x] **Test 6 — Responsive Design**: Fully responsive across Desktop (>1024px), Tablet (768px-1023px), and Mobile down to 400px.
- [x] **Test 7 — Navigation Interconnectivity**: Nav links between Home (`index.html`), Programs (`programs.html`), Tasks (`tasks.html`), and Form (`form.html`) are completely functional.
