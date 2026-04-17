# atyszka.org

Personal academic portfolio for Alexa Tyszka, Ph.D. Candidate in Ecology & Evolution at the
University of Illinois at Chicago. Research focus: plant phylogenetics, *Caryophyllales*, and
carnivorous plant evolution.

**Live site:** [atyszka.org](https://atyszka.org)

---

## File Structure

| File / Folder | Purpose |
|---|---|
| `index.html` | Main portfolio page |
| `style.css` | All styles — mobile-first, 3 breakpoints (base / ≥600px / ≥901px) |
| `cookie-consent.js` | GDPR consent logic; defers Google Analytics until visitor accepts |
| `404.html` | Custom not-found page (served automatically by GitHub Pages) |
| `sitemap.xml` | XML sitemap for search engine indexing |
| `robots.txt` | Crawler directives; points to sitemap |
| `favicon.ico` | Site icon |
| `s_trunc_transp.png` | Decorative background image (*Schlumbergera*, public domain) |
| `images/` | Profile photo |
| `01-pages/` | Supplementary pages: conference poster files, R-generated figures, misc |

---

## Updating the Site

### Adding a publication

Open `index.html` and add a `<li>` to the `#work-heading` section. Vancouver citation style
is used throughout.

### Adding a news/update item

Open `index.html` and add a `<li>` to the `#updates-heading` section.

### Adding a new section

Copy this template into `index.html` inside `<div class="about">`. Give each section a unique
`id` on the `<h2>`. See [Font Awesome icons](https://fontawesome.com/icons) for icon names.

```html
<section aria-labelledby="section-id">
  <h2 id="section-id">
    <i class="fa-solid fa-icon-name" aria-hidden="true"></i> Section Title
  </h2>
  <p>Paragraph content with an <a href="https://example.com">embedded link</a>.</p>
  <ul>
    <li>List item one</li>
    <li>List item two</li>
  </ul>
</section>
```

---

## Analytics

Google Analytics 4, measurement ID `G-7D7W40Q8XE` (in `cookie-consent.js`). Tracking is
deferred until the visitor explicitly accepts via the cookie consent banner. Consent
preference is stored in `localStorage` under the key `cookie-consent`.

---

## Maintenance

- **W3C HTML validator:** <https://validator.w3.org/nu/?doc=https%3A%2F%2Fatyszka.org%2F>
- **Google Search Console:** submit `sitemap.xml` after deploying to help with indexing
- **Last page update:** April 17, 2026

---

## Attribution

The original site structure was heavily referenced with permission from:

- [karol.is](http://karol.is/)
- [ledelaney.org](https://ledelaney.org/)

Additional HTML/CSS references used during initial development:

- <https://practicalseries.com/1001-webdevelopment/04-02-starting.html>
- <https://instruct.uwo.ca/fim-lis/9723/resources/filestructure.htm>

Background image: [*Schlumbergera truncata*](https://commons.wikimedia.org/wiki/File:Schlumbergera_truncata_BlKakteenT25.jpg), public domain.
Decorative icon: [Alphonse Mucha](https://www.rawpixel.com/image/2702145/free-illustration-png-zodiac-mucha-art-nouveau).
License: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
