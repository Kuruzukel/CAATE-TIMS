# CAATE Authentication System

Unified authentication system for CAATE (Center for Advanced Aesthetic and Technical Education) supporting both admin and student users.

## Project Structure

```
auth/
├── src/
│   ├── pages/              # Authentication pages
│   │   ├── login.html
│   │   ├── register.html
│   │   ├── forgot-password.html
│   │   ├── admission/      # Student admission forms
│   │   │   ├── admission.html
│   │   │   ├── application-form.html
│   │   │   ├── appointment-form.html
│   │   │   └── consent-form.html
│   │   └── account/        # Account management
│   │       └── change-password.html
│   ├── components/         # Reusable components
│   ├── layouts/            # Layout templates
│   └── assets/
│       ├── css/            # Stylesheets
│       ├── js/             # JavaScript files
│       └── fonts/          # Font files
├── public/                 # Static files
├── config/                 # Configuration files
├── docs/                   # Documentation
└── package.json            # Dependencies
```

## Features

- Unified login/register for admin and students
- Student admission workflow
- Application form management
- Appointment scheduling
- Consent form handling
- Password management
- Responsive Bootstrap 5 design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build:prod
```

## Technologies

- Bootstrap 5
- jQuery
- SCSS
- Gulp (Build tool)

## License

MIT
