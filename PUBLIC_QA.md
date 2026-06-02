# Public QA Checklist

Use this checklist before pushing or deploying a public portfolio repo.

## Public visitor copy-paste QA

Test as a stranger who found the public site or README and has no memory of the repo structure.

1. Start from a fresh terminal in the directory that will contain the cloned repo.
2. Copy the public local-run commands exactly.
3. Confirm the directory assumptions are stated before the commands.
4. Confirm the commands work from the documented starting point.
5. If a shortcut is shown for users already inside `frontend/`, make sure it is labeled as a shortcut, not the primary path.

Current public local-run command block, starting from the directory containing the cloned repo:

```bash
cd human-ai-design-system/frontend
bun install
bun dev
```

If your terminal is already inside `frontend/`, skip the first line.

## Pre-deploy gate

Run these before pushing public changes:

```bash
cd frontend
bun run lint
bun run test
bun run build
```

Then run the clean-copy public setup smoke test:

```bash
scripts/verify-public-setup.sh
```

## Browser QA

After the local build or dev server starts:

- Open the site in a browser.
- Click every visible CTA in the hero and get-started area.
- Check every public command block.
- Check all external resource links.
- Open browser console and confirm there are no errors.
- After GitHub Pages deploys, repeat the check on the live URL.

## Public polish checks

- No misleading or dead CTAs.
- No private/internal wording.
- No future-looking buttons unless clearly labeled.
- README setup and site setup instructions match.
- GitHub Actions are green.
- Live demo is verified after deployment.
