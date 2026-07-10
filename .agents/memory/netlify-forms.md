---
name: Netlify Forms setup
description: How the site's contact/lead forms submit, and why they only work on Netlify deploys
---

# Netlify Forms

All site forms use **Netlify Forms** (not Formspree — that was removed).

Three distinct form `name`s (Netlify aggregates submissions by name):
- `quote-request` — lead form (homepage + all service landing pages)
- `contact` — contact page
- `Contact Form` — about page form

**Why submissions won't appear in local/Replit preview:** Netlify Forms are
processed only by Netlify's backend at deploy time. The forms POST to `/`, which
does nothing on the Replit/Eleventy dev server. Testing must happen on a real
Netlify deploy — check the Netlify dashboard → Forms.

**AJAX gotcha:** the lead + contact forms submit via `fetch`. Netlify requires
`application/x-www-form-urlencoded` (NOT multipart `FormData`) and the body MUST
include the `form-name` field. We serialize with `new URLSearchParams(formData)`.
Sending raw `FormData` (multipart) silently fails on Netlify for non-file forms.

**Detection requirements** each form needs: `data-netlify="true"`, a `name`,
a hidden `<input name="form-name">` matching that name, and a `bot-field` honeypot.
Eleventy renders forms statically so Netlify's build bot detects them fine.
