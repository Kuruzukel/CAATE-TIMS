# Landing Page Assets

Frontend assets for the Landing Page Website.

## Structure

```
assets/
├── css/        # Stylesheets (11 files)
├── fonts/      # Font files
├── images/     # Local images (17 files)
└── js/         # JavaScript files (12 files)
```

## Asset Categories

### CSS (Stylesheets)

Course-specific and main styles:

- advanced-skincare.css
- aesthetic.css
- collagen-hairloss.css
- eyelash-eyebrow.css
- facial-peeling.css
- light-heat-therapy.css
- nailcare.css
- permanent-makeup.css
- skincare.css
- style.css (main)
- trainers.css

### JavaScript

- Course-specific functionality (9 files)
- script.js (main)
- service-worker.js (PWA support)
- trainers.js

### Images

- CAATE branding and logos
- TESDA logos
- Course promotional images

## Usage

### Referencing Assets

```html
<!-- CSS -->
<link rel="stylesheet" href="../assets/css/style.css" />

<!-- JavaScript -->
<script src="../assets/js/script.js"></script>

<!-- Images -->
<img src="../assets/images/CAATELOGOGRADIENT.png" alt="CAATE Logo" />

<!-- Shared images from root -->
<img src="../../../img/CAATE FB COURSES/ADVANCEDSKINCARE.png" alt="Course" />
```

## Progressive Web App (PWA)

The service-worker.js enables:

- Offline functionality
- Caching strategies
- Improved performance
- App-like experience

## Best Practices

1. **Performance**: Optimize images and minimize CSS/JS
2. **SEO**: Use descriptive file names and alt text
3. **Accessibility**: Ensure proper contrast and semantic HTML
4. **Responsive**: Test on multiple screen sizes
5. **Caching**: Leverage service worker for better performance

---

**Part of:** [CAATE-ITRMS Landing Page](../README.md)
