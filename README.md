# Programming 2.0 Notes

Interactive notes for the Programming 2.0 YouTube playlists. The site turns downloaded transcripts into English-first articles, keeps original transcripts available as source material, and maps lessons to public code from `programming2point0`.

## Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
```

The generated static site is written to `dist/`. The checked-in `docs/` folder is the GitHub Pages artifact for the free Pages deployment. Vercel can build from source with the included `vercel.json`.
