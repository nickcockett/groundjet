# GROUNDJET

Executive ground transportation, Atlanta.

**Private aviation. On the ground.**

## Website

Static marketing site in `docs/` (HTML/CSS/JS). Host anywhere. No Netlify.

- Homepage: `docs/index.html`
- Pages: services, experience, for-business, destinations, about, contact, privacy, terms
- Journey form uses `mailto:hello@groundjets.com` and shows a success state
- Photos live in `docs/images/` (not hotlinked)

Preview:

```
python3 -m http.server 8080 --directory docs
```

GitHub Pages source: `main` / `docs` → https://nickcockett.github.io/groundjet/

## What GroundJet is

Premium executive group ground transport launching in Atlanta. Sprinter-class cabins.

**Model:** Asset-light via licensed partners. We do **not** own a fleet. Never claim we own a fleet. Never invent availability or prices.

## Pipeline (ops)

Statuses in `pipeline.csv` (`status` column), in order:

1. TARGET
2. CONTACTED
3. ENGAGED
4. JOURNEY IDENTIFIED
5. QUOTE REQUESTED
6. QUOTE SENT
7. BOOKED
8. COMPLETED
9. REPEAT OPPORTUNITY
10. LOST

### Operating notes

- Do not invent prospects, availability, or prices.
- Data files (`pipeline.csv`, `events.csv`, `operators.csv`) hold live rows plus headers.
- Outreach drafts wait for Nick’s send approval and a GroundJet from-address (`outreach-drafts.md`).
- Weekly CEO report: fill `scorecard.md` from live pipeline data; zeros where unknown.

| File | Purpose |
| --- | --- |
| `pipeline.csv` | Prospect tracker |
| `events.csv` | Event / demand calendar |
| `operators.csv` | Licensed partner operators |
| `scorecard.md` | Weekly CEO report |
| `outreach-drafts.md` | Drafts pending send approval |
