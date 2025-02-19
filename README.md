# The Getaway Yosemite

Website for The Getaway, a bed and breakfast located in Midpines, CA near Yosemite National Park.

## Development

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Commands

| Command                | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `npm install`         | Install dependencies                             |
| `npm run dev`         | Start dev server at `localhost:4321`             |
| `npm run build`       | Build production site to `./dist/`               |
| `npm run preview`     | Preview production build locally                 |
| `npm run fetch`       | Fetch latest room data                          |
| `npm run parse`       | Parse room data                                 |
| `npm run lint`        | Check code style                                |
| `npm run lint:fix`    | Fix code style issues                           |

### Project Structure

```text
/
├── public/          # Static assets
├── src/
│   ├── components/  # UI components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Routes
│   └── data/        # Room data
├── scripts/         # Build scripts
└── tests/           # Test files
```

### Deployment

The site is automatically deployed to production when changes are pushed to the main branch. The deployment process:

1. Builds the site
2. Optimizes images
3. Deploys to GitHub Pages

## License

Private. All rights reserved.