<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- All page content (profile details, education entries, publications and their URLs, volunteer items with photos and blurbs) is exported from `src/lib/content.ts`; components render it. Why: the client edits real details in one obvious file instead of hunting through components.
- Colors, fonts, and radii are defined once in `src/styles.css` as oklch tokens (`paper`, `panel`, `ink`, `line`, `brand`, `brand-soft`) and mapped in `@theme inline`. Why: the chosen "Clinical Editorial" design stays consistent and re-themable; components must not hardcode color utilities.
- Hover-only affordances must degrade on touch: the volunteer caption uses the `no-hover` custom variant (`@media (hover: none)`) to stay visible. Why: Tailwind v4 gates `hover:` behind `@media (hover: hover)`, so touch users would otherwise never see the blurbs.
