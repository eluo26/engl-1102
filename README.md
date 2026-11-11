# From Two to Two Hundred: Website Framework

Digital story website on the development of Georgia Tech's campus (English 1102).

## How to open it
Double-click `index.html`. It opens in your browser and works offline with no install
or server needed.

## What's in the folder

```
gt-campus-story/
├── index.html            Home page: title, intro paragraph, interactive map, building cards
├── about.html            About page (audience, positionality, team)
├── css/style.css         All styling (colors, fonts, layout)
├── js/buildings.js       LIST OF BUILDINGS: names, teasers, authors, map positions
├── js/map.js             Makes the map clickable (no need to edit)
├── buildings/            One page per building, plus _template.html for new ones
│   ├── howey.html        (Avary)
│   ├── kendeda.html      (Niyu)
│   ├── stamps.html       (Charlie)
│   ├── brittain.html     (Georgia)
│   ├── dm-smith.html     (Katy)
│   ├── libraries.html, skiles.html, east-campus-dorms.html, tech-square.html  (TBD)
│   └── _template.html
└── assets/
    ├── images/<building>/   Put each building's photos here
    └── maps/                Put scanned campus maps here
```

## Filling in a building page
Each page has the same scrolling layout:
**Quick facts → Main image → Origins → Timeline → Then & Now → Renovation & who it served →
From the Archives → Student Voices (Technique quotes) → Legacy → Sources.**

- **Text:** find a dashed `placeholder` box and replace the whole `<div class="placeholder ...">…</div>`
  with paragraphs: `<p>Your text here.</p>`
- **Images:** save the photo in `assets/images/<building>/` and replace the placeholder box with
  `<img src="../assets/images/howey/hero.jpg" alt="Howey Physics Building, 1960s">`
- **Captions/citations:** edit the `<figcaption>` under each image.
- **Sources:** add `<li>` items in the Sources list (MLA).

If teammates send Google Docs, Ethan can paste the content in.

## Adding or moving a building on the map
1. Open `js/buildings.js` and copy an existing entry. Give it a new `id`.
2. Copy `buildings/_template.html` to `buildings/<id>.html` and fill in the name.
3. Adjust `shapes` (`[x, y, width, height]` in pixels of campus.png) to move it on the map.
4. Update the Previous/Next links at the bottom of the neighboring pages.

## The campus map
The base map is `assets/maps/campus.png`: the GT Parking & Transportation campus map,
cropped to main campus, with the legend removed and converted to grayscale so the gold
highlights stand out. Building `shapes` in `js/buildings.js` are pixel coordinates on that
image (1135 x 938). Open it in Paint and hover to read x/y. If you swap in a different map
image, update the `viewBox`, `width` and `height` in `index.html` and re-measure the shapes.

## Hosting (pick one before archive research wraps up)
All of these host a static folder like this one for free:
- **GitHub Pages:** push the folder to a GitHub repo, then Settings → Pages.
- **Netlify:** drag and drop the folder at app.netlify.com/drop.
- **Cloudflare Pages:** connect a repo or upload the folder.

### Publish with GitHub Pages
This is a static website, so it can be hosted directly from the repository:

1. Create a new GitHub repository. If you are uploading this existing folder, leave the option to add a README unchecked.
2. Open a terminal in this project folder and run these commands, replacing `USERNAME` and `REPOSITORY` with your GitHub account and repository name:

   ```powershell
   git init
   git add .
   git commit -m "Publish campus story website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```

3. On GitHub, open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. After GitHub finishes publishing, the site will be available at `https://USERNAME.github.io/REPOSITORY/`.

To publish later edits, run `git add .`, `git commit -m "Describe your update"`, and `git push`. Before making the site public, review the remaining draft notes on the home and About pages, add supporting historical citations to the Stamps page, and confirm the original photo credit for the Howey hero image.
