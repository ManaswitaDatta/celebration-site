# Our Wedding — GitHub Pages Website

A free, static, mobile-friendly wedding invitation for Manaswita and Sushmit. It uses HTML, CSS, JavaScript, and bundled image files—no build step, paid host, or RSVP backend is required.

## What is included

- `index.html` — the complete single-page wedding invitation
- `style.css` — page styling, responsive layouts, and local event-photo styling
- `assets/` — local photos used in the hero and five event cards; **upload this folder as well**
- `config.js` and `script.js` — helper files retained for future customization / legacy page experiments
- `mehendi.html`, `sangeet.html`, `haldi.html`, `wedding.html`, `reception.html` — optional older standalone event pages; the homepage does not link to them

## Upload or update the website on GitHub

1. Open your existing GitHub repository.
2. Upload the contents of this ZIP to the repository root, replacing `index.html` and `style.css` when asked.
3. Make sure the `assets` folder is uploaded with all six `.jpg` files inside it. The image paths are relative, so the folder must sit beside `index.html` and `style.css`.
4. Commit the changes to the branch used by GitHub Pages (usually `main`).
5. Open **Settings → Pages** and confirm the site is published from that branch and the root folder (`/`).
6. Wait a few minutes, then open the published URL on your phone. If the old version remains, refresh the page or open it in a private/incognito tab.

For a new repository on GitHub Free, select a public repository and enable Pages under **Settings → Pages → Deploy from a branch**, choosing `main` and `/ (root)`. The default `https://YOUR-USERNAME.github.io/REPOSITORY/` address is free; a custom domain is optional.

## Current invitation details

- Mehendi — 14 February 2027, 7 PM onwards, F Road, Sonari, Jamshedpur
- Sangeet & Ring Ceremony — 15 February 2027, 7 PM onwards, F Road, Sonari, Jamshedpur
- Haldi — 16 February 2027, 10 AM onwards, F Road, Sonari, Jamshedpur
- Wedding — 16 February 2027, 7 PM onwards, Beldih Golf Course, Sonari, Jamshedpur
- Reception — 21 February 2027, 7 PM onwards, The Parkline Hotel, Agartala

The venue links open the Google Maps coordinates provided. Please verify the exact pins and venue entrances before sending the invitation to guests.

## Design and technical notes

- The main page uses mostly warm ivory with restrained dusty blush and muted mauve accents; no regional motifs, stars, or decorative arrows are used. The names reveal gently on first load, and selected sections fade up while scrolling. Motion is disabled for visitors who request reduced motion.
- All six page photos are bundled locally, so they do not rely on third-party image hosting. Google Fonts is optional; system-serif fallbacks are included.
- The countdown targets 16 February 2027 at 7:00 PM India time.
- No RSVP form is included.
- The GitHub Pages website is public to anyone with the URL. Do not publish sensitive guest information.
- Background music is not configured. If you add music later, only publish audio you have permission to use and make sure mobile-browser playback starts after a visitor interaction.
