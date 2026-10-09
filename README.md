# Robert Bashir — portfolio (Next.js)

The whole site is one hand-built page: `public/index.html`.
`next.config.mjs` serves it at the home URL (`/`). Next.js handles hosting, caching and the 404 page.

## Run it on your computer

```bash
npm install
npm run dev        # open http://localhost:3000
```

## Put it live (Vercel, free)

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, choose **Add New → Project**, and import the repo.
3. Keep the defaults (Framework: Next.js) and press **Deploy**.
4. Optional: in **Settings → Domains**, add your own domain.

## Where to edit

| What                                  | File                          |
| ------------------------------------- | ----------------------------- |
| All text, styles, animations and demos | `public/index.html`           |
| Wallpaper                             | `public/media/wallpaper.webp` |
| Crawler video                         | `public/media/web-crawler.*`  |
| Link preview image                    | `public/og.jpg`               |
| Tab icon                              | `public/favicon.svg`          |

After you know your live address, change `content="/og.jpg"` in `public/index.html` to the full URL (for example `https://your-site.vercel.app/og.jpg`), so the link previews on WhatsApp and LinkedIn show the image.
