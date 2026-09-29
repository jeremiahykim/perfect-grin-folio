# Orthodontist Portfolio

A single-page portfolio site: introduction and headshot, education and training
timeline, research and publications, and community work.

Everything shown on the page lives in one file — **`src/lib/content.ts`**
(name, credentials, bio, contact details, training entries, publications and
their links, volunteer items). The photographs are in **`src/assets/`**
(`headshot.jpg` plus the four `volunteer-*.jpg` images). Swap those two things
and the site is yours.

## Getting these files out of Lovable

Either of these works:

1. **GitHub sync (recommended).** In the Lovable editor, open the chat box and
   choose **Plus (+) → GitHub → Connect project**, then create or pick a
   repository. Every change made in Lovable is committed there, and you can
   clone it with `git clone <repository-url>`.
2. **Download the code.** Open the code editor and click **Download codebase**
   at the bottom of the file tree.

Repositories created by Lovable are private by default.

## Development

You need [Bun](https://bun.sh) (or Node.js 22+ with npm).

```sh
bun install
bun run dev
```

## Hosting on GitHub Pages

The site is plain HTML, CSS, JavaScript and images — no server needed — so
GitHub Pages can host it. The workflow at
`.github/workflows/deploy.yml` builds it and publishes the result.

1. Put the code in a GitHub repository. GitHub Pages on a free plan needs a
   **public** repository.
2. In the repository: **Settings → Pages → Build and deployment**, set
   **Source** to **GitHub Actions**.
3. Push to `main`. The workflow runs, and the site appears at
   `https://<username>.github.io/<repository>/`.

The build is switched to static export by two environment variables, read in
`vite.config.ts`:

| Variable | Meaning |
| --- | --- |
| `STATIC_EXPORT=1` | Render the pages to files instead of serving them from a server. |
| `BASE_PATH=/repo-name/` | The folder the site is served from. Use `/` for a custom domain or `https://<username>.github.io/`. |

The buildable output lands in `.output/public`.

To use a custom domain, add it under **Settings → Pages → Custom domain**, then
create a repository variable named `BASE_PATH` with the value `/`
(**Settings → Secrets and variables → Variables → Actions → New repository
variable**) and push again.

### Building the static files by hand

```sh
STATIC_EXPORT=1 BASE_PATH=/portfolio-site/ bun run build
# → .output/public is the folder to upload
```

Without `STATIC_EXPORT`, `bun run build` produces the server-rendered build
Lovable uses, so previews and publishing from Lovable are unaffected.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
