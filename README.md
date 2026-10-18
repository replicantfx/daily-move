# Daily Move · 每日功

Guided 5–30 minute daily practice drawn from the Shaolin and qigong traditions: joint opening, the Eight Brocades (Ba Duan Jin), the Yi Jin Jing, the Five Animal Frolics, stances and kicks, lajin deep stretching, Chinese park self-care, the Six Healing Sounds, and Chan meditation.

- A new daily practice every day on a weekly rhythm (Sun breath & stillness, Mon Eight Brocades, Tue stances, Wed deep stretch, Thu Yi Jin Jing, Fri park routine, Sat Five Animals), in short, standard or long lengths, favouring movements you haven't done recently
- 71 movements with animated figures, Chinese names, cues and breath patterns
- 16 curated routines plus a sequence composer (5–30 min, by focus)
- Any routine can be scaled to the time you have: every movement's time shrinks or grows by the same factor
- Guided player built around presence: an opening arrival with three breaths, spoken in/out breath coaching throughout, mindfulness prompts woven between the form cues, and a closing moment of reflection
- Timer ring, breath pacing orb, voice coach and singing-bowl chime (plays even with the iPhone ringer switch off)
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
