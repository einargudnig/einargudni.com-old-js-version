# My personal website

This is a [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) blog built on a template from Timothy Lin. [Repo](https://github.com/timlrx/tailwind-nextjs-starter-blog)

## Features

- Easy styling customization with [Tailwind 3.0](https://tailwindcss.com/blog/tailwindcss-v3) and primary color attribute
- Near perfect lighthouse score - [Lighthouse report](https://www.webpagetest.org/result/210111_DiC1_08f3670c3430bf4a9b76fc3b927716c5/)
- Mobile-friendly view
- Light and dark theme
- [MDX - write JSX in markdown documents!](https://mdxjs.com/)
- Server-side syntax highlighting with line numbers and line highlighting via [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- Support for tags - each unique tag will be its own page
- Support for multiple authors
- Spotify now-playing component
- Command pallette
- Support for nested routing of blog posts
- SEO friendly with RSS feed, sitemaps and more!

## Sample posts

## Quick Start Guide

1. JS (official support)

```bash
npx degit https://github.com/einargudnig/einargudni.com.git
```

2. Personalize `siteMetadata.js` (site related information)
3. Personalize `authors/default.md` (main author)
4. Modify `projectsData.js`
5. Modify `headerNavLinks.js` to customize navigation links
6. Add blog posts
7. Deploy on Vercel

## Development

First, run the development server:

```bash
npm start
```

    or

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Compose

Run `node ./scripts/compose.js` to bootstrap a new post.

Follow the interactive prompt to generate a post with pre-filled front matter.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
