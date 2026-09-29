// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static export for GitHub Pages (or any static host: Netlify, S3, Cloudflare Pages…).
//
//   STATIC_EXPORT=1 BASE_PATH=/repo-name/ bun run build
//
// BASE_PATH is only needed when the site is served from a subfolder, i.e.
// https://username.github.io/repo-name/ — leave it unset for a custom domain or
// https://username.github.io/. Output lands in .output/public.
//
// Lovable's own preview/publish build never sets STATIC_EXPORT, so it keeps the
// normal server-rendered output and is unaffected by everything below.
const staticExport = process.env["STATIC_EXPORT"] === "1";
const basePath = normalizeBase(process.env["BASE_PATH"]);

function normalizeBase(value?: string) {
  if (!value || value === "/") return "/";
  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return `/${trimmed}/`;
}

export default defineConfig({
  tanstackStart: staticExport
    ? {
        router: { basepath: basePath },
        prerender: { enabled: true, crawlLinks: true },
      }
    : undefined,
  nitro: staticExport
    ? {
        preset: "static",
        // Pin the layout so the deployable folder is dist/client everywhere.
        output: { dir: "dist", publicDir: "client", serverDir: "server" },
      }
    : undefined,
  vite: staticExport ? { base: basePath } : undefined,
});
