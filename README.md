# portfolio-v3

A one-page developer portfolio built with Next.js (App Router) and TypeScript.

## Run it

Requires Node 20.9 or newer (`.nvmrc` pins 24).

```bash
nvm use
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Make it yours

- **Text, projects, repos, tiers, links:** `lib/content.ts`
- **Screenshots:** drop files in `public/images/` and set `image: "/images/foo.jpg"` on a project. Without one, a mock screenshot tinted with `hue` is drawn.
- **Portrait:** replace the placeholder in `components/About.tsx`.
- **Hero sticker positions:** the `wide` / `narrow` values in `components/Hero.tsx`.
- **Styles:** `app/globals.css` (colors are tokens at the top).
