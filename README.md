# ARCLIVE — Airdrop Dashboard (GitHub-ready)

This repository is a GitHub-ready Next.js project that simulates a per-wallet airdrop (fake token **ARCLIVE**) and stores balances + claim history in the browser `localStorage`.

## Quick: Deploy to Vercel (recommended)
1. Create a new GitHub repository and push this project (commands below).  
2. Go to https://vercel.com/new and import the GitHub repository.  
3. During import, add an environment variable:
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=demo`
4. Deploy. Vercel will build and host the site.

## Git commands (run locally)
```bash
git init
git add .
git commit -m "Initial commit — ARCLIVE airdrop dashboard"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/REPO_NAME.git
git push -u origin main
```

## Run locally
```bash
npm install
npm run dev
# open http://localhost:3000
```

## LocalStorage keys used
- `airdrop_balance:<address>` — integer balance for ARCLIVE token
- `airdrop_claims:<address>` — JSON array of claim objects `{ amount, timestamp }`
- `airdrop_claimed:<address>` — boolean flag stored as '1' once claimed
