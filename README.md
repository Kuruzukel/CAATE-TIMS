# CAATE-ITRMS

## Creative Aesthetic Academy & Technical Education Inc. Integrated Training & Resource Management System

<div align="center">

A comprehensive, professional-grade training management and inventory system designed for seamless administration of courses, trainees, schedules, competencies, and inventory across multiple user roles.

[![Status](https://img.shields.io/badge/Status-Active%20Development-brightgreen?style=for-the-badge)](https://github.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?style=for-the-badge)](https://nodejs.org)
[![Last Updated](https://img.shields.io/badge/Last%20Updated-February%202026-orange?style=for-the-badge)](https://github.com/Kuruzukel)

</div>

---

## � Quick Navigation

| Section            | Link                       |
| ------------------ | -------------------------- |
| 🎯 Overview        | [View](#overview)          |
| ✨ Features        | [View](#features)          |
| 🛠️ Tech Stack      | [View](#tech-stack)        |
| 📁 Structure       | [View](#project-structure) |
| 🚀 Applications    | [View](#applications)      |
| 🎬 Getting Started | [View](#getting-started)   |
| 💻 Development     | [View](#development)       |
| 📚 Documentation   | [View](#documentation)     |

---

## Overview

CAATE-ITRMS is an enterprise-level training management platform that combines administrative dashboards, student portals, public information systems, and comprehensive inventory management. Built with modern web technologies, it provides a seamless experience for administrators, trainees, and the public.

### Key Capabilities

- 🏢 **Multi-role Administration** — Admin, Trainee, and Public interfaces
- 📚 **Course Management** — 10+ professional courses with detailed information
- 👥 **Trainee Management** — Complete lifecycle from admission to graduation
- 📊 **Inventory Tracking** — Audit and CAATE inventory management
- 📅 **Schedule Management** — Advanced scheduling and calendar features
- 🎓 **Competency Framework** — Competency tracking and assessment
- 🔐 **Secure Authentication** — Comprehensive auth and admission workflow
- 📱 **Responsive Design** — Works seamlessly on all devices

---

## Features

### 🔧 Admin Dashboard

Comprehensive administrative interface with real-time analytics and management tools.

- Real-time analytics and metrics
- Competencies management
- Course administration
- Schedule management
- Graduate tracking
- User accounts management
- Attendance records
- Enrollment processing
- Application management
- Inventory Management (Audit & CAATE)
- Profile management

### 🔐 Authentication & Admission

Secure user authentication with complete admission workflow.

- Secure user login & registration
- Password recovery system
- Complete admission workflow
- Application form processing
- Appointment scheduling
- Consent management
- Account settings

### 🌐 Public Portal

Professional public-facing website showcasing courses and programs.

- Professional landing page
- 10 course information pages
- Trainer directory
- Course discovery
- Responsive design
- SEO optimized

### 👨‍🎓 Trainee Portal

Student dashboard for course management and profile administration.

- Personal dashboard
- Course enrollment tracking
- Admission slip management
- Application status
- Profile management
- Password management

---

## Tech Stack

### Frontend Technologies

| Technology            | Purpose                           | Version |
| --------------------- | --------------------------------- | ------- |
| **HTML5**             | Semantic markup & structure       | Latest  |
| **CSS3**              | Styling & responsive design       | Latest  |
| **JavaScript (ES6+)** | Client-side logic & interactivity | Latest  |
| **Bootstrap**         | UI framework & components         | 4.x/5.x |
| **jQuery**            | DOM manipulation & utilities      | 3.x     |
| **Popper.js**         | Tooltip & popover positioning     | Latest  |
| **Perfect Scrollbar** | Custom scrollbar styling          | Latest  |
| **Boxicons**          | Icon library                      | Latest  |

### Build & Development Tools

| Tool        | Purpose                           |
| ----------- | --------------------------------- |
| **Webpack** | Module bundler & asset management |
| **Gulp**    | Task automation & build pipeline  |
| **npm**     | Package management                |
| **Node.js** | JavaScript runtime (v14+)         |

### Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## Project Structure

```
CAATE-ITRMS/
│
├── 📂 admin/
│   ├── src/
│   │   ├── pages/                    # 15 admin pages
│   │   └── assets/                   # CSS, JS, images
│   ├── package.json
│   └── README.md
│
├── 📂 auth/
│   ├── src/
│   │   ├── pages/                    # 7 auth pages
│   │   └── assets/                   # CSS, JS, fonts
│   ├── package.json
│   └── README.md
│
├── 📂 public/
│   ├── src/
│   │   ├── pages/                    # 11 public pages
│   │   └── assets/                   # CSS, JS, images
│   ├── package.json
│   └── README.md
│
├── 📂 trainee/
│   ├── src/
│   │   ├── pages/                    # 6 trainee pages
│   │   └── assets/                   # CSS, JS, images
│   ├── package.json
│   └── README.md
│
├── 📂 img/
│   ├── CAATE FB COURSES/              # Course promotional images
│   ├── GRADUATES/                     # Graduate photos
│   ├── CAATE Logos/                   # CAATE branding
│   ├── TESDA Logos/                   # TESDA branding
│   └── README.md
│
├── 📄 README.md                       # Main documentation
└── 📄 package.json                    # Root dependencies
```

---

## Applications

### 1. Admin Dashboard

Professional administration interface for managing all aspects of the training center.

**Pages:** 15 | **Features:** Dashboard, Competencies, Courses, Schedule, Graduates, Accounts, Attendance, Enrollment, Applications, Inventory (Audit & CAATE), Profile, Change Password

[📖 Full Documentation](admin/README.md)

### 2. Authentication System

Secure authentication and comprehensive admission workflow.

**Pages:** 7 | **Features:** Login, Register, Password Recovery, Admission, Application Form, Appointment, Consent, Account Management

[📖 Full Documentation](auth/README.md)

### 3. Public Portal

Public-facing website showcasing courses and training programs.

**Pages:** 11 | **Courses:** 10 professional courses + Trainer Directory

[📖 Full Documentation](public/README.md)

### 4. Trainee Portal

Student dashboard for course management and profile administration.

**Pages:** 6 | **Features:** Dashboard, Admission Slip, Application, Courses, Profile, Password Management

[📖 Full Documentation](trainee/README.md)

---

## Getting Started

### Prerequisites

```bash
# Required
- Node.js v14 or higher
- npm v6 or higher (or yarn)
- Git
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/CAATE-ITRMS.git
cd CAATE-ITRMS

# 2. Navigate to desired application
cd admin    # or auth, public, trainee

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev

# 5. Build for production
npm run build
```

### Quick Start Commands

```bash
# Development
npm run dev          # Start with watch mode
npm run watch        # Watch for changes

# Production
npm run build        # Create production build
npm run build:prod   # Production build with optimization

# Utilities
npm run clean        # Clean build artifacts
npm run lint         # Run linter (if configured)
```

---

## Development

### Project Architecture

Each application follows a modular structure:

```
application/
├── src/
│   ├── pages/              # HTML pages (organized by feature)
│   ├── assets/
│   │   ├── css/           # Stylesheets (page-specific)
│   │   ├── js/            # JavaScript (page-specific)
│   │   ├── images/        # Local images
│   │   ├── fonts/         # Font files
│   │   └── vendor/        # Third-party libraries
│   └── layouts/           # Reusable layout templates
├── public/                # Static files
├── package.json           # Dependencies & scripts
├── webpack.config.js      # Webpack configuration
└── gulpfile.js           # Gulp tasks
```

### Development Guidelines

1. **Code Organization**
   - Keep page-specific CSS and JS in separate files
   - Use kebab-case for file names
   - Organize pages by feature/module

2. **Asset Management**
   - Use centralized `/img/` folder for shared assets
   - Reference images with relative paths: `../../img/[image-name]`
   - Optimize images before adding to repository

3. **Styling**
   - Use Bootstrap classes for consistency
   - Keep custom CSS modular and page-specific
   - Follow CSS naming conventions

4. **JavaScript**
   - Use vanilla JavaScript or jQuery
   - Maintain separate files for each major feature
   - Include proper error handling and validation

### Build Process

```bash
# Development build with source maps
npm run dev

# Production build with optimization
npm run build

# Watch mode for development
npm run watch
```

---

## Documentation

### Main Documentation

- **[README.md](README.md)** — Project overview (this file)

### Application Documentation

- **[admin/README.md](admin/README.md)** — Admin dashboard guide
- **[auth/README.md](auth/README.md)** — Authentication system guide
- **[public/README.md](public/README.md)** — Public portal guide
- **[trainee/README.md](trainee/README.md)** — Trainee portal guide
- **[img/README.md](img/README.md)** — Asset management guide

### Additional Resources

- `admin/docs/STRUCTURE.md` — Detailed structure documentation
- `admin/docs/QUICK_START.md` — Quick start guide
- `admin/docs/MIGRATION_GUIDE.md` — Migration information

---

## Project Statistics

| Metric                  | Count              |
| ----------------------- | ------------------ |
| **Total Pages**         | 39 HTML pages      |
| **Applications**        | 4 independent apps |
| **CSS Files**           | 25+ stylesheets    |
| **JavaScript Files**    | 30+ scripts        |
| **Shared Assets**       | 46 files           |
| **Documentation Files** | 5 README files     |

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Follow existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test changes before submitting PR

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact & Support

**Developer:** KEL TO YAHHHH!  
**Email:** [mikasaackerman.jme@gmail.com](mailto:mikasaackerman.jme@gmail.com)  
**GitHub:** [@Kuruzukel](https://github.com/Kuruzukel)

For issues, questions, or suggestions:

1. Check the [Documentation](#documentation) section
2. Review application-specific README files
3. Open an issue on GitHub
4. Contact the developer via email

---

<div align="center">

---

**CAATE-ITRMS** © 2026 | All Rights Reserved

[↑ Back to Top](#-caate-itrms)

</div>
