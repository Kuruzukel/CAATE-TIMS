# Auth Folder Structure Documentation

## Directory Overview

### `/src` - Source Files
Main development directory containing all source code.

#### `/src/pages`
- HTML page templates for authentication
- Core auth pages: login, register, forgot-password
- Organized by feature/purpose

##### `/src/pages/admission`
- Student admission workflow pages
- admission.html - Main admission page
- application-form.html - Student application form
- appointment-form.html - Appointment scheduling
- consent-form.html - Consent and agreement forms

##### `/src/pages/account`
- Account management pages
- change-password.html - Password change form

#### `/src/components`
- Reusable UI components
- Modular HTML snippets
- Examples: form-components, buttons, alerts

#### `/src/layouts`
- Master layout templates
- Base HTML structure for pages
- Examples: auth-layout.html, form-layout.html

#### `/src/assets`
- All static assets

##### `/src/assets/css`
- Stylesheets (CSS/SCSS)
- Global styles, component styles, page-specific styles

##### `/src/assets/js`
- JavaScript files
- Form validation, authentication logic, utilities

##### `/src/assets/fonts`
- Font files
- Custom fonts, icon fonts

### `/public`
- Static files served directly
- Compiled/built files

### `/config`
- Configuration files
- Build configuration (gulpfile.js)
- Environment settings

### `/docs`
- Documentation files
- Setup guides
- API documentation

## File Naming Conventions

- **Pages**: `page-name.html` (e.g., `login.html`)
- **Components**: `component-name.html` (e.g., `form-group.html`)
- **Styles**: `feature-name.css` (e.g., `login.css`)
- **Scripts**: `feature-name.js` (e.g., `form-validation.js`)

## Best Practices

1. Keep components modular and reusable
2. Use semantic HTML
3. Follow CSS naming conventions (BEM or similar)
4. Organize JavaScript by feature
5. Keep assets organized by type
6. Document complex functionality
7. Use consistent indentation (2 spaces)
