# Daily Move · 每日功

Guided 5–30 minute daily mobility practice drawn from the Shaolin warm-up, the Eight Brocades (Ba Duan Jin), stance training, Tai Chi and standing meditation.

- 27 movements with animated figures, Chinese names, cues and breath patterns
- 8 curated routines plus a sequence composer (5–30 min, by focus)
- Guided player with timer ring, breath pacing, voice coach and bowl chime
- Practice log and streak, stored in your browser

Live at **https://replicantfx.github.io/daily-move/**.

## Install on your phone

It's an installable web app: once added to the home screen it opens full-screen and works offline.

- **iPhone / iPad (Safari):** Share → **Add to Home Screen**
- **Android (Chrome):** tap **Install app** in the header, or ⋮ → **Install app**

## How it's built

No build step. The app itself is a single `index.html`; around it:

- `manifest.webmanifest` and `icons/` make it installable
- `sw.js` caches every file for offline use. The page loads network-first, so a pushed update appears on the next open when online (the cached copy is used offline). Bump `VERSION` in `sw.js` when you add or rename files.
- `fonts/` holds self-hosted subsets containing only the characters the app uses. After adding text with new characters (new hanzi, pinyin), run `python tools/update-fonts.py`.

Move within a range that feels easy. Stop if anything hurts, and check with a clinician if you are managing an injury or health condition.
