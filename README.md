## Convex

`npm install convex dotenv`

`npx convex dev`, will run your Convex backend locally and update it with the function you write in the `convex/` directory.  
Started running a deployment locally at http://127.0.0.1:3210 and saved its name as CONVEX_DEPLOYMENT to .env.local  
View the Convex dashboard at http://127.0.0.1:6790/?d=anonymous-adoptadog

`npx convex dashboard` to view and interact with your project from a web UI.

`npx convex docs` to read the docs and `npx convex help` to see other commands.

`npx convex login` at any time to create an account and link this deployment.

## Bootstrap 5

https://getbootstrap.com/docs/5.0/forms/overview/

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
