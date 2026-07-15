
# Learn React Three Fiber

A Vite-powered React + Three.js project for experimenting with @react-three/fiber, GSAP scroll animations, and image-driven 3D content.

## What this app does

- Renders a Three.js scene with React using `@react-three/fiber`
- Shows a textured cylinder mesh in a 3D canvas
- Adds bloom and tone mapping effects with `@react-three/postprocessing`
- Includes a horizontal infinite image scroller using `gsap` + `ScrollTrigger`
- Displays an overlay with interactive buttons and like count

## Project structure

- `index.html` — Vite entry HTML
- `package.json` — project dependencies and scripts
- `vite.config.js` — Vite plugin configuration
- `src/main.jsx` — application bootstrap
- `src/app.jsx` — main app component with Canvas and UI
- `src/Cyl.jsx` — textured cylinder mesh component
- `src/FooterOverlay.jsx` — button overlay UI component
- `src/style.css` — layout and component styles

## Dependencies

- `react` / `react-dom` — React UI framework
- `vite` — build and dev server
- `@vitejs/plugin-react` — React support for Vite
- `three` — 3D rendering engine
- `@react-three/fiber` — React renderer for Three.js
- `@react-three/drei` — helper components for React Three Fiber
- `@react-three/postprocessing` — postprocessing effects
- `gsap` — animation library
- `tailwindcss` / `@tailwindcss/vite` — installed but not required by core app

## Getting started

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Notes

- The footer overlay includes a like button and static action buttons
- The 3D canvas is full-screen, and the scroller is pinned while scrolling
