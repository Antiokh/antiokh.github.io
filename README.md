# NeedleBit Site

Static marketing site for `https://needlebit.dev`.

## Repo Boundary

This repository is public-site only.

Allowed here:

- landing page source
- public assets
- SEO files
- safe documentation about the public site

Do not put here:

- nginx configs
- server rebuild guides
- deployment host details
- custom ports
- usernames
- keys
- host fingerprints
- panel notes
- recovery notes for infrastructure

All server-side and recovery material belongs in the separate private/local `c-server` workspace.

## Main Files

- `index.html` - landing page
- `assets/styles/site.css` - all styling
- `assets/brand/` - brand assets
- `assets/cases/` - case study previews
- `robots.txt`
- `sitemap.xml`
- `llms.txt`

## Deployment Workflow

Use this exact flow after production changes.

1. Edit local files in this repo.
2. Commit and push immediately after changes.
3. Sync changed files to the server.
4. If nginx config changed, test and reload nginx.
5. Verify the live site on `https://needlebit.dev`.

## Git Workflow

Run from this repo:

```powershell
git add index.html assets/styles/site.css robots.txt sitemap.xml llms.txt assets README.md
git commit -m "Describe the change"
git push origin main
```

User preference for this repo:

- always push after changes
- do not leave finished local changes unpushed
- do not publish infrastructure-sensitive material here

## Production Notes

- production domain: `needlebit.dev`
- site is deployed to a static directory behind nginx
- nginx is configured with a dedicated vhost for the domain

## Deploy Sync

Sync the changed static files to production with your own secure deployment method.
Do not store server addresses, custom ports, usernames, or auth details in this repo.

```powershell
<sync changed html, css, text, and asset files to the production web root>
```

## Nginx Workflow

After editing nginx config on the server:

```bash
nginx -t
systemctl reload nginx
```

Current site behavior:

- `http://needlebit.dev` redirects to `https://needlebit.dev`
- static assets are aggressively cached
- HTML is lightly cached

## HTTPS

HTTPS is managed via `certbot --nginx` on the production host.

## SEO Notes

If the public domain changes, update all of these together:

- canonical URL in `index.html`
- `og:url`
- `og:image`
- `twitter:image`
- JSON-LD URLs and ids
- `robots.txt` sitemap line
- `sitemap.xml`
- `llms.txt`

## Important

- `antiokh.github.io` redirects to `https://needlebit.dev` inside `index.html`
- `needlebit.dev` is the canonical production domain
- if DNS or panel behavior is strange, compare with the existing `rslive.ru` setup instead of inventing a new scheme
