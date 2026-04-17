# Supplemental Page Styling Guide

Pandoc/R Markdown-generated HTML pages on this site are plain by default. This guide describes how to apply the site's design language to any such page.

---

## What gets injected

### 1. A `<style>` block (before `</head>`)

Paste this immediately before `</head>`. It overrides pandoc's default Bootstrap styles with the site's colors, fonts, and card layout.

```html
<style>
/* ===== Site theme for supplemental pages ===== */
:root {
  --color-sage: rgb(169, 173, 114);
  --color-link: rgb(87, 91, 46);
  --color-link-hover: rgb(152, 100, 30);
  --font-serif: "Charter-Racket", Georgia, "Times New Roman", serif;
  --font-sans: Arial, Helvetica, sans-serif;
}

body {
  background-color: #f5f5ef;
  font-family: var(--font-serif);
  color: #1a1a1a;
  margin: 0;
  padding: 0;
}

.supp-nav {
  background-color: #fff;
  border-bottom: 2px solid var(--color-sage);
  padding: 0.6rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.supp-nav a {
  color: var(--color-link) !important;
  text-decoration: none !important;
  font-weight: bold !important;
}

.supp-nav a:hover {
  color: var(--color-link-hover) !important;
  text-decoration: underline !important;
}

.container-fluid.main-container {
  max-width: 800px !important;
  width: 90% !important;
  margin: 2rem auto !important;
  float: none !important;
  padding: 0 !important;
}

#header {
  border: 2px solid var(--color-sage);
  background-color: #fff;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
}

#header h1.title {
  font-family: var(--font-sans);
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

#header h4.author,
#header h4.date {
  font-family: var(--font-serif);
  font-size: 0.9rem;
  font-weight: normal;
  color: #666;
  margin: 0.2rem 0 0;
}

.section.level2 {
  border: 1px solid var(--color-sage);
  background-color: #fff;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.25rem;
}

.section.level2 h2 {
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: #1a1a1a;
  margin: 0 0 1rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid var(--color-sage);
}

.section.level3 {
  margin-top: 1rem;
}

.section.level3 h3 {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: #333;
  margin: 0 0 0.5rem;
}

p {
  font-family: var(--font-serif);
  line-height: 1.75;
  margin-bottom: 0.75rem;
}

a {
  color: var(--color-link) !important;
  font-weight: bold;
  text-decoration: none !important;
}

a:hover, a:focus {
  color: var(--color-link-hover) !important;
  text-decoration: underline !important;
}

table {
  border-collapse: collapse;
  width: 100%;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

table th {
  background-color: var(--color-sage);
  color: #fff;
  padding: 0.5rem 0.75rem;
  text-align: left;
  font-weight: bold;
}

table td {
  padding: 0.4rem 0.75rem;
  border-bottom: 1px solid rgba(169, 173, 114, 0.35);
}

table tr:last-child td {
  border-bottom: none;
}

code, pre {
  font-size: 0.875rem;
  background-color: rgba(169, 173, 114, 0.12);
  border: 1px solid rgba(169, 173, 114, 0.35);
  border-radius: 2px;
}

code {
  padding: 0.1em 0.3em;
}

pre {
  padding: 0.75rem 1rem;
  overflow-x: auto;
}

img {
  max-width: 100%;
  height: auto;
  border: 1px solid var(--color-sage);
  display: block;
  margin: 1rem auto;
}

@media (max-width: 600px) {
  .container-fluid.main-container {
    width: 96% !important;
    margin: 1rem auto !important;
  }

  #header {
    padding: 1rem 1.25rem;
  }

  .section.level2 {
    padding: 1rem 1.25rem;
  }
}
</style>
```

---

### 2. A nav bar (first thing inside `<body>`)

Paste this immediately after `<body>`. Update the `href` depth and label to match the page's location.

```html
<nav class="supp-nav">
  <a href="../../index.html">&#8592; Alexa Tyszka</a>
  <span style="color: var(--color-sage); margin: 0 0.25rem;">|</span>
  <span style="font-family: var(--font-sans); color: #666; font-size: 0.875rem;">PAGE TITLE HERE</span>
</nav>
```

**Path depth:** pages inside `01-pages/some-folder/` are two levels deep from root, so `../../index.html` is correct. Adjust if the page lives at a different depth.

---

## How to apply to a new page

The script below automates the injection. Run it from the repo root, passing the path to the HTML file and the nav label:

```bash
python3 << 'EOF'
import sys

filepath = sys.argv[1]   # e.g. 01-pages/botany-23-supp/botany-23-supp.html
nav_label = sys.argv[2]  # e.g. "Botany 2023 Supplemental"
back_path = sys.argv[3]  # e.g. "../../index.html"

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# --- paste the full <style> block from above ---
style_block = """
<style>
... (paste full style block here) ...
</style>
"""

nav_bar = f"""<nav class="supp-nav">
  <a href="{back_path}">&#8592; Alexa Tyszka</a>
  <span style="color: var(--color-sage); margin: 0 0.25rem;">|</span>
  <span style="font-family: var(--font-sans); color: #666; font-size: 0.875rem;">{nav_label}</span>
</nav>

"""

if '<!-- supp-theme-applied -->' in content:
    print("Already styled, skipping.")
else:
    content = content.replace('</head>', '<!-- supp-theme-applied -->' + style_block + '</head>', 1)
    content = content.replace('<body>\n', '<body>\n' + nav_bar, 1)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Styled: {filepath}")
EOF
```

The `<!-- supp-theme-applied -->` sentinel prevents double-injection if you run the script again.

---

## Design tokens reference

| Token | Value | Used for |
|---|---|---|
| `--color-sage` | `rgb(169, 173, 114)` | Borders, table headers, accents |
| `--color-link` | `rgb(87, 91, 46)` | Link text (WCAG AAA on white) |
| `--color-link-hover` | `rgb(152, 100, 30)` | Hover/focus link color |
| `--font-serif` | `"Charter-Racket", Georgia, serif` | Body text, dates, author |
| `--font-sans` | `Arial, Helvetica, sans-serif` | Headings, nav, labels |
| Background | `#f5f5ef` | Page background (warm off-white) |

---

## Plant image

All styled pages use this image in the header:

- **Species:** *Guzmania lingulata* (Bromeliaceae) — a Caribbean bromeliad directly relevant to the research
- **Source:** [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Guzmania_lingulata_(2).JPG)
- **License:** CC BY-SA 3.0
- **Direct URL:** `https://upload.wikimedia.org/wikipedia/commons/5/56/Guzmania_lingulata_%282%29.JPG`
- **Attribution (required):** *Guzmania lingulata* (Bromeliaceae) · Photo: Wikimedia Commons, CC BY-SA 3.0

---

## Pages styled so far

- [01-pages/botany-24-supp/Botany2024supp.html](botany-24-supp/Botany2024supp.html) — Botany 2025 Supplemental
- [01-pages/botany-23-supp/botany-23-supp.html](botany-23-supp/botany-23-supp.html) — Botany 2023 Supplemental (Interactive Figures)
- [01-pages/botany-23-supp/botany-citations.html](botany-23-supp/botany-citations.html) — Botany 2023 Citations
