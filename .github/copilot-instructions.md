# Copilot Instructions for kijako Project

## Project Overview
This is a static web project consisting of:
- `index.html`: Main HTML file, entry point for the site
- `style.css`: Global stylesheet
- `img/`: Image assets
- `vid/`: Video assets

There is no build system, backend, or package management. All code is plain HTML and CSS. No JavaScript is present.

## Key Patterns & Conventions
- **Single-page architecture**: All content is served from `index.html`. Navigation, if present, is handled via anchor tags and page sections.
- **Styling**: All styles are in `style.css`. Inline styles are discouraged; update `style.css` for any visual changes.
- **Assets**: Reference images from `img/` and videos from `vid/` using relative paths. Keep asset filenames descriptive and organized.
- **Accessibility**: Use semantic HTML tags (`<header>`, `<main>`, `<footer>`, etc.) and provide `alt` text for images.
- **Responsiveness**: If adding new styles, prefer mobile-first CSS and use media queries in `style.css`.

## Developer Workflow
- **Preview**: Open `index.html` directly in a browser to view changes. No build or serve step is required.
- **Debugging**: Use browser dev tools for inspecting layout and styles.
- **Adding assets**: Place new images in `img/` and videos in `vid/`. Reference them with relative paths in HTML/CSS.
- **Extending**: For new pages, consider expanding `index.html` with additional sections rather than creating new HTML files, unless a multi-page structure is needed.

## Examples
- To add a new image:
  1. Place the image in `img/`
  2. Reference it in `index.html` as `<img src="img/example.png" alt="Description">`
- To update styles:
  1. Edit `style.css`
  2. Reload `index.html` in the browser to see changes

## Important Files
- `index.html`: Main content and structure
- `style.css`: All styling rules
- `img/`, `vid/`: Asset folders

## AI Agent Guidance
- Focus on HTML and CSS best practices
- Do not introduce JavaScript unless explicitly requested
- Keep all code changes simple and easy to preview in a browser
- Document any new conventions in this file if the project evolves

---
_Last updated: September 25, 2025_
