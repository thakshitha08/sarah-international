# Sarah International — Company Website

A static, multi-page website for Sarah International, covering four
manufacturing divisions: hydraulic cylinders, excavator attachments,
drilling solutions, and contract heavy-metal fabrication.

No build tools or frameworks required — plain HTML, CSS, and vanilla
JavaScript, ready to host on GitHub Pages.

## File Structure

```
.
├── index.html                    Homepage
├── hydraulic-cylinders.html      Hydraulic Cylinders division
├── excavator-attachments.html    Excavator Attachments division
├── drilling-solutions.html       Drilling Solutions division
├── contract-manufacturing.html   Contract Manufacturing division
├── about.html                    Company overview
├── contact.html                  Contact page + quote request form
├── 404.html                      Custom "page not found" page
├── css/
│   └── styles.css                Shared stylesheet (design tokens, layout, components)
├── js/
│   └── main.js                   Mobile nav toggle + footer year
├── images/                       Site photography + favicon
└── .nojekyll                     Tells GitHub Pages to skip Jekyll processing
```

## Publishing to GitHub Pages

1. **Create a repository** on GitHub (e.g. `sarah-international-website`).
2. **Upload these files** to the repository, keeping the folder structure
   above intact. You can do this via the GitHub web UI ("Add file → Upload
   files") or with git:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and the folder to `/ (root)`, then **Save**.
6. GitHub will publish the site at:
   `https://<your-username>.github.io/<your-repo>/`
   (it can take a minute or two for the first deploy).

If you'd rather publish at the root of `<your-username>.github.io`, name
the repository exactly `<your-username>.github.io` and push these files
to its `main` branch.

## Before You Go Live — Things to Update

- **Contact details**: phone, email, and address are placeholders in the
  header/footer of every page and on `contact.html`. Search for
  `+1 (555) 010-2938`, `info@sarahinternational.com`, and
  `Your Company Address` and replace them.
- **Contact form**: `contact.html` posts to a placeholder Formspree
  endpoint (`https://formspree.io/f/your-form-id`). Static sites like
  GitHub Pages can't process form submissions on their own, so connect
  a form service (Formspree, Getform, Netlify Forms, etc.) and put your
  real endpoint in the form's `action` attribute — or swap in your own
  backend.
- **Company name**: the site uses "Sarah International" throughout,
  taken from the source content you provided. Update it in every page's
  header/footer and `<title>`/meta tags if the name should change.
- **Favicon**: `images/favicon.svg` is a simple placeholder mark —
  swap in your real logo if you have one.

## Customizing the Design

All colors, type, and spacing are defined as CSS custom properties at
the top of `css/styles.css` under `:root`. Update the hex values there
to change the palette site-wide (e.g. `--navy-900`, `--orange-600`).

## Local Preview

Just open `index.html` in a browser, or serve the folder locally:
```bash
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
