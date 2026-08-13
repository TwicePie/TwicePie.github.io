# Portfolio — Muhammad Eka Nur Arief

Black & white elegant portfolio website with a live guestbook (chat) backed by
**Google Sheets + Google Apps Script** — no database, no server cost.

---

## 1. Tech Stack & Why

| Layer | Tool | Why this choice |
|-------|------|-----------------|
| **Framework** | **Astro** | `.astro` files look like plain HTML + a little JS, so they're very easy to read and understand. Astro ships **almost zero JS** to the browser by default — the page loads as static HTML (fast, no lag). Interactive parts (the chat) are tiny "islands" that run only where needed. |
| **Styling** | **Plain CSS** (no Tailwind/UI lib) | One `global.css` file with CSS variables. Keeps the bundle tiny and the code transparent. Black/white theme via `:root` variables. |
| **Animations** | **CSS + IntersectionObserver** | Scroll-reveal is a single tiny observer — no animation library. Respects `prefers-reduced-motion`. |
| **Backend** | **Google Apps Script Web App** | Free, serverless, no signup-DB. Deploys from a Google Sheet in 5 minutes. |
| **Storage** | **Google Sheet** | Each row = 1 message. You can read/export all messages directly in the spreadsheet. |
| **Hosting** | **GitHub Pages / Netlify / Vercel** | Free static hosting. `npm run build` → upload `dist/`. |

> **Why not React/Next.js?** A portfolio is mostly static content. React would ship a
> large JS bundle just to render text — that slows the first load. Astro gives you
> components (like React) but outputs pure HTML, so it's both readable *and* fast.

---

## 2. Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg            # "ME" monogram
│   ├── cv.pdf                 # ← replace with your real CV
│   └── apps-script/
│       └── Code.gs            # Google Apps Script backend (copy-paste)
├── src/
│   ├── data/
│   │   └── content.ts         # ALL content (EN + ID). Edit this to update text.
│   ├── layouts/
│   │   └── Layout.astro       # HTML shell, head, header, footer, scripts
│   ├── components/
│   │   ├── Header.astro       # Sticky nav + language toggle
│   │   ├── Hero.astro         # Name, title, bio, CTAs
│   │   ├── About.astro        # Bio + focus areas
│   │   ├── Education.astro    # Degree card
│   │   ├── Experience.astro   # Timeline (work + internships)
│   │   ├── Skills.astro       # Skill tags
│   │   ├── Projects.astro     # Featured project cards
│   │   ├── Certifications.astro
│   │   ├── LiveChat.astro     # Guestbook (polls Apps Script every 4s)
│   │   ├── Footer.astro
│   │   └── T.astro            # Bilingual text helper (EN/ID toggle)
│   ├── pages/
│   │   └── index.astro        # Home page (assembles all sections)
│   └── styles/
│       └── global.css         # Theme tokens, layout, animations
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 3. How the Website Works (the flow)

1. **Build time (Astro)** — Astro reads `content.ts` and each `.astro` component,
   then compiles everything into static HTML + one small CSS file.
2. **First load** — the browser receives pure HTML. No framework JS, so it renders
   instantly. The only JS is: scroll-reveal (IntersectionObserver), the nav toggle,
   the language toggle, and the chat poller — all tiny inline scripts.
3. **Language toggle** — clicking **EN / ID** swaps `data-lang` on `<html>`. CSS
   hides/shows the matching language. Choice is saved in `localStorage`.
4. **Scroll animations** — as you scroll, the IntersectionObserver adds an
   `is-visible` class → CSS fades/slides elements in. One observer, no library.
5. **Live chat / guestbook** — the chat form POSTs to the Apps Script Web App URL.
   The script checks if the name already exists in the sheet (1 message per name),
   then inserts a new row or rejects the duplicate. The list polls every 4 seconds
   to show new messages in near-real-time.

### Chat data flow
```
Browser (form) ──POST name+message──> Apps Script ──appendRow──> Google Sheet
                                          │
                                          └── duplicate? ──> reject { duplicate: true }

Browser (poll every 4s) ──GET ?action=read──> Apps Script ──getValues──> Google Sheet
                                                    │
            <── JSON { messages: [...] } <──────────┘
```

---

## 4. Getting Started (Local)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server  →  http://localhost:4321
npm run dev

# 3. Build for production  →  dist/
npm run build

# 4. Preview the production build
npm run preview
```

---

## 5. Connect the Live Chat (5 minutes)

1. Go to [Google Sheets](https://sheets.google.com) → create a new sheet.
2. In **row 1** type the headers:
   - `A1` = `timestamp`
   - `B1` = `name`
   - `C1` = `message`
3. **Extensions → Apps Script**. Delete the default code.
4. Open `portfolio/public/apps-script/Code.gs`, **copy everything**, paste it
   into the Apps Script editor. Save (Ctrl+S). You can also click **Run → setupSheet**
   once to auto-create headers.
5. **Deploy → New deployment**:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the **Web app URL**.
7. Open `portfolio/src/components/LiveChat.astro` and replace:
   ```js
   const API_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";
   ```
   with your URL.
8. Reload the site. Send a test message → it appears in the sheet + on the page.

> The guestbook enforces **1 message per name** (case-insensitive). To allow
> multiple messages per person, remove the duplicate-check loop in `Code.gs`.

---

## 6. Customize Your Content

Open **`src/data/content.ts`** — every piece of text (in both English and
Indonesian) lives here: bio, experience, projects, skills, certifications, etc.
Edit the strings and the site updates on save.

---

## 7. Deploy (free)

### GitHub Pages
```bash
npm run build
# push the dist/ folder to the gh-pages branch,
# or use the official Astro GitHub Action
```

### Netlify / Vercel
- Connect your repo, set build command `npm run build`, output dir `dist`.
- Done. Each push auto-deploys.

---

## 8. Replace the CV

Put your real CV file at `portfolio/public/cv.pdf` (overwrite the placeholder).
The "Download CV" button already points to `/cv.pdf`.
