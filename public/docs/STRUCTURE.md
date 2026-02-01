# Public Site Structure Documentation

## Directory Overview

### `/src` - Source Files
Main development directory containing all source code.

#### `/src/pages`
- HTML page templates
- index.html - Main landing page
- courses/ - Individual course information pages

#### `/src/components`
- Reusable UI components
- Modular HTML snippets
- Examples: navbar, footer, course-card

#### `/src/layouts`
- Master layout templates
- Base HTML structure for pages
- Examples: main-layout.html

#### `/src/assets`
- All static assets

##### `/src/assets/css`
- Stylesheets (CSS/SCSS)
- Global styles, component styles, page-specific styles

##### `/src/assets/js`
- JavaScript files
- Main scripts, course scripts, utilities
- service-worker.js - PWA support

##### `/src/assets/images`
- Image files (PNG, JPG, SVG, WebP)
- Logos, backgrounds, course images

##### `/src/assets/fonts`
- Font files
- Custom fonts, icon fonts

### `/dist`
- Production-ready compiled files
- Minified CSS and JS
- Optimized images

### `/config`
- Configuration files
- Build configuration (gulpfile.js)
- Environment settings

### `/docs`
- Documentation files
- Setup guides
- Architecture documentation

## File Naming Conventions

- **Pages**: `page-name.html` (e.g., `index.html`)
- **Components**: `component-name.html` (e.g., `navbar.html`)
- **Styles**: `feature-name.css` (e.g., `courses.css`)
- **Scripts**: `feature-name.js` (e.g., `courses.js`)
- **Images**: `descriptive-name.png` (e.g., `logo-caate.png`)

## Best Practices

1. Keep components modular and reusable
2. Use semantic HTML
3. Follow CSS naming conventions (BEM or similar)
4. Organize JavaScript by feature
5. Keep assets organized by type
6. Optimize images for web
7. Use consistent indentation (2 spaces)
8. Document complex functionality
