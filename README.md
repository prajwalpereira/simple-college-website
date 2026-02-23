# Harbour College — Demo College Website

Formal static website for Harbour College showcasing programs, news, and contact information.

## Summary

This repository contains a simple, responsive static website created for a fictional institution named Harbour College. It provides an informational front page, details of courses and programs, news and events, and a contact form. The project is intended as a lightweight brochure site suitable for deployment to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

## Disclaimer

Harbour College is a fictional institution created for demonstration and portfolio purposes only. This project is not affiliated with or endorsed by any real educational institution.

## Features

- Responsive layout with a collapsible sidebar navigation
- Light / dark theme toggle persisted via `localStorage`
- Reveal-on-scroll animations and numeric counters
- Simple contact form validation (client-side)
- Testimonials slider and expandable course details

## File overview

- `index.html` — Home page with hero, programs, events, testimonials and stats
- `courses.html` — Detailed course listings, curriculum highlights and FAQs
- `news.html` — Short news and events listing
- `contact.html` — Contact information and a submission form
- `styles.css` — Main stylesheet, responsive rules and theme variables
- `script.js` — Frontend scripts: sidebar toggle, theme handling, animations and form validation

## Getting started

Requirements: a modern web browser (Chrome, Firefox, Edge, Safari).

To run the site locally, open `index.html` in your browser. For a more robust local workflow (recommended), serve the directory over a local HTTP server. Examples:

Windows (PowerShell):

```powershell
# from repository root
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Development notes

- The theme toggle persists the user's preference in `localStorage` under the key `theme`.
- Navigation highlights rely on matching the link `href` to `window.location.href`.
- Counters, reveal animations and the testimonials slider are implemented in `script.js` and are client-side only.
- The contact form uses simple client-side validation in `script.js`; no backend is included.

## Contributing

Contributions are welcome. Please fork the repository, create a descriptive branch, and open a pull request with a clear description of changes. Keep changes focused and avoid unrelated formatting-only commits.

## License

This demo project is licensed under the MIT License. See the `LICENSE` file in the repository root for the full license text and copyright details.

## Author

Developed by Prajwal Pereira as a front-end demonstration project.

For queries regarding the project, please connect via GitHub.
