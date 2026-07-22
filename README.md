# Billix — Contact Website

A single-page, contact-focused marketing site for **Billix**, the connective layer for
utility crisis assistance. Static HTML/CSS/JS — no build step, deploys anywhere.

## Structure

```
index.html      Page markup (nav, hero, what/who/why, contact form, footer)
css/styles.css  Styling — brand palette pulled from the Billix iOS app
js/main.js      Footer year + contact form (opens a pre-filled email to info@billixapp.com)
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

Settings → Pages → Deploy from branch → `main` / root. Done.

## Contact form

The form has no backend — on submit it opens the visitor's email client pre-filled to
`info@billixapp.com`. To wire a real backend, replace the submit handler in `js/main.js`
with a `fetch()` to Formspree, a serverless function, or your own API.

## Brand colors

Palette drawn straight from the Billix logo (piggy bank on cash).

| Token       | Hex       | Use                     |
| ----------- | --------- | ----------------------- |
| Cream       | `#f4ead0` | page background         |
| Teal        | `#2c7a72` | primary — buttons/links |
| Deep teal   | `#163f3b` | dark sections, ink      |
| Gold        | `#e3a63c` | accent, primary CTA     |
| Plum        | `#8a6ba0` | accent (pig)            |
| Cash green  | `#7fa06f` | accent (dollars)        |
