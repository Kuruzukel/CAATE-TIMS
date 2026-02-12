# Admin Assets

Frontend assets for the Admin Dashboard application.

## Structure

```
assets/
├── css/        # Stylesheets (12 files)
├── fonts/      # Font files
├── images/     # Local images (25 files)
├── img/        # Additional images and icons
├── js/         # JavaScript files (21 files)
└── vendor/     # Third-party libraries
```

## Asset Categories

### CSS (Stylesheets)

Page-specific and component styles:

- admin-dashboard.css
- admission.css
- application.css
- attendance.css
- audit-inventory.css
- caate-inventory.css
- change-password.css
- custom-theme.css
- graduates.css
- schedule.css
- style.css (main)
- table-scrollbar.css

### JavaScript

Page-specific functionality and utilities:

- 21 JavaScript files for various features
- Main application logic
- Form handling
- Data visualization
- API integration

### Images

- CAATE branding and logos
- TESDA logos
- Course promotional images
- UI elements and icons
- Background images

### Vendor

Third-party libraries:

- Bootstrap
- jQuery
- Popper.js
- Perfect Scrollbar
- Chart libraries
- Other dependencies

## Usage

### Referencing Assets

```html
<!-- CSS -->
<link rel="stylesheet" href="../assets/css/style.css" />

<!-- JavaScript -->
<script src="../assets/js/main.js"></script>

<!-- Images -->
<img src="../assets/images/CAATELOGOGRADIENT.png" alt="CAATE Logo" />

<!-- Shared images from root -->
<img src="../../../img/GRADUATES/AIRAH.png" alt="Graduate" />
```

## Best Practices

1. **Organization**: Keep assets organized by type
2. **Naming**: Use kebab-case for file names
3. **Optimization**: Optimize images and minify CSS/JS for production
4. **Modularity**: Keep page-specific assets separate
5. **Documentation**: Comment complex CSS and JavaScript

---

**Part of:** [CAATE-ITRMS Admin Dashboard](../README.md)
