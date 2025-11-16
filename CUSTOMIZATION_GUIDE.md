# Portfolio Setup Notes

My quick checklist for keeping this site personal and up to date.

## Content to update
- Home (`src/pages/Home.tsx`): headline, role text, and SocialLinks (GitHub, LinkedIn, Instagram).
- About (`src/pages/About.tsx`): rewrite the bio and values to match my story.
- Projects (`src/pages/Projects.tsx`): fill the projects array with my real work, repos, and live links.
- Skills (`src/pages/Skills.tsx`): set categories and skills I actually use.
- Articles (`src/pages/Articles.tsx`): add my posts/articles with tags and URLs.
- Coding profiles (`src/pages/CodingProfiles.tsx`): make sure my platforms, usernames, and links are correct.
- Resume download: drop my PDF at `public/assets/resume.pdf`; the button already points there.
- Contact (`src/pages/Contact.tsx`): email, location, phone, and social links.

## Design tweaks
- Colors: adjust `:root` tokens in `src/index.css` (primary/secondary, etc.).
- Fonts: set the font family in `tailwind.config.ts` and include it in CSS.
- Animations/3D: tune particles and 3D settings in `src/components/ParticleBackground.tsx` and the 3D components if needed.

## Metadata
- `index.html`: set `<title>`, meta description, author, and OG/Twitter tags to my info.

## Dev commands
- Install: `npm install`
- Run dev: `npm run dev`
- Build: `npm run build`
