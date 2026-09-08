# TechBridge Platform — Tasks 1, 2 & 3

**Organization**: TechBridge by Baselink Services Limited  
**Tagline**: Bridging Learning to Real-World Experience  
**Tech Stack**: 100% Pure HTML5 + CSS3 (Zero JavaScript)  
**Official Application Form**: [TechBridge Internship Application Form](https://forms.gle/8EbdSy5ttGfLZfjv5?utm_source=chatgpt.com)  

---

## 📝 Developer Note (Tasks 1, 2 & 3)

Across Tasks 1, 2, and 3, I developed the TechBridge internship web platform for Baselink Services Limited. For **Task 3**, I built a dedicated **Internship Tasks Experience** (`tasks.html`) that answers *"What am I expected to complete during this internship?"*. The page maps out the complete 30-day journey across all **8 official practical tasks**, displaying task numbers, titles, day milestones (Day 1 to Day 26), descriptions, and difficulty progression tiers (*Beginner* to *Advanced Capstone*). Each task features an expandable details panel built using native HTML5 `<details>` and `<summary>` elements to reveal deliverables and skill tags without any JavaScript. The entire platform maintains 100% design system consistency, responsive layouts down to 400px, and interconnects Home (`index.html`), Programs (`programs.html`), Tasks (`tasks.html`), and Application (`form.html`).

---

## 📁 Repository Structure

```
techbridge-task-1/
├── index.html          # TechBridge Homepage (Task 1)
├── programs.html       # TechBridge Dedicated Programs Experience (Task 2)
├── tasks.html          # TechBridge Internship Tasks Experience (Task 3)
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

## 📋 Official 8-Task Curriculum Roadmap

| Task | Title | Day | Difficulty Tier | Core Focus & Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **Task 1** | Build the TechBridge Homepage | Day 1 | `Beginner` | First version of TechBridge website using structured HTML5 & CSS3. |
| **Task 2** | Build the TechBridge Programs Experience | Day 4 | `Beginner → Intermediate` | Dedicated Programs page presenting Data Analytics & Web Development. |
| **Task 3** | Build the Internship Tasks Experience | Day 8 | `Intermediate` | Dedicated Task Journey page mapping out the 8-task 30-day progression. |
| **Task 4** | Build an Interactive Task Tracker | Day 11 | `Intermediate` | JavaScript progress tracking, state persistence, and completion checkboxes. |
| **Task 5** | Build the Intern Registration Experience | Day 15 | `Intermediate → Advanced` | Professional onboarding registration form with field validations. |
| **Task 6** | Build the Task Submission System | Day 19 | `Intermediate → Advanced` | Task submission portal for GitHub repositories & live URLs. |
| **Task 7** | Build the Intern Dashboard | Day 22 | `Advanced` | Profile, submission history, metric cards, and analytics dashboard. |
| **Task 8** | Build the Complete TechBridge Platform | Day 26 | `Advanced Capstone` | Production integration of all components into a complete platform. |

---

## 🔗 Platform Navigation & Interconnectivity

- **Home** (`index.html`) ↔ **Programs** (`programs.html`) ↔ **Internship Tasks** (`tasks.html`) ↔ **Apply** (`form.html`).
- **Responsive Viewports**: Supports Desktop (>1024px), Tablet (768px-1023px), and Mobile down to **400px minimum width**.
