# Our Wedding — GitHub Pages Website

This is a complete static wedding invitation website. It uses HTML, CSS and JavaScript, so it does not need a build step, AI credits, a server, an RSVP backend, or a paid hosting plan.

## Files
- `index.html` — website content and sections
- `style.css` — luxury editorial styling and responsive mobile layout
- `config.js` — names, wedding date, event schedule, venue/map links and music filename
- `script.js` — live countdown, map link handling and optional music control

## 1. Upload to GitHub
1. Sign in to GitHub or create a free account at https://github.com/.
2. Click **+** → **New repository**.
3. Name it `our-wedding`.
4. Select **Public** (GitHub Pages is available for public repositories on GitHub Free).
5. Click **Create repository**.
6. Click **Add file** → **Upload files**.
7. Upload these four files from this folder: `index.html`, `style.css`, `config.js`, and `script.js`.
8. Commit the upload.

## 2. Publish with GitHub Pages
1. Open the repository's **Settings**.
2. Select **Pages** from the left sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/ (root)`.
5. Click **Save**.
6. Wait a few minutes and refresh the Pages screen. GitHub will show your published URL, usually `https://YOUR-USERNAME.github.io/our-wedding/`.
7. Open that URL on your phone and test it before sharing it.

## 3. Personalize the wedding details
Open `config.js` in GitHub and click the pencil icon to edit. Replace:
- `partnerOne` and `partnerTwo` with your names
- `dateLabel` with the display date
- `weddingDate` with your exact date/time in ISO format, including India timezone (`+05:30`), e.g. `2027-02-14T17:00:00+05:30` — example only, not your actual date
- event names, dates, times and descriptions (the schedule currently lists Mehendi on 14 Feb evening; Sangeet & Ring Ceremony on 15 Feb evening; Haldi on 16 Feb morning; Wedding on 16 Feb evening; Reception on 21 Feb evening)
- venue name and address
- `eventOneMap`, `eventTwoMap`, `eventThreeMap`, and `mainVenueMap` with Google Maps URLs

Click **Commit changes** after editing. GitHub Pages will update the website after a short delay.

## 4. Optional background music
Only use an audio file you have permission to publish. Upload an MP3 to the repository, then set `musicFile` in `config.js` to the filename, such as `our-song.mp3`. Music intentionally does not autoplay because mobile browsers usually block autoplay.

## Important notes
- The countdown stays blank until you add the exact `weddingDate`.
- Venue direction links show a reminder until a map URL is added.
- The website contains placeholder names and dates until you edit them; do not send the link to guests before updating.
- A GitHub Pages website is public to anyone with the URL; it is not password-protected. Avoid putting sensitive guest information on it.
- The design uses Google Fonts, which require an internet connection; fallback fonts are included.
- You do not need a custom domain. The free `github.io` address is enough to share on WhatsApp.


## Event venues configured

- Mehendi, Sangeet & Ring Ceremony, and Haldi: F Road, Sonari, Jamshedpur
- Wedding Ceremony: Bellevue Golf Course, Sonari, Jamshedpur
- Reception: The Park Hotel, Agartala

Each event's map link opens a Google Maps search for the venue. Confirm the exact pin and address before sharing the invitation widely.


## Final wedding details

Event venue addresses are shown on each event card, with Google Maps search links. Background music is optional: add a licensed MP3 file to the repository and set `musicFile` in `config.js`. No RSVP form is included.
