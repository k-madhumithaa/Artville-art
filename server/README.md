# Artville Server

Minimal Node.js + Express + TypeScript backend for the Artville website. No database, no
authentication — its only job today is to receive the contact form submission, validate it,
rate-limit it, and email it to the business owner via [Resend](https://resend.com).

## Endpoints

| Method | Path              | Purpose                                              |
| ------ | ----------------- | ----------------------------------------------------- |
| POST   | `/api/contact`     | Contact form submission (name, email, phone, message) |
| GET    | `/health`          | Health check                                           |
| POST   | `/api/quote`       | **Placeholder** — returns 501, no form wired up yet    |
| POST   | `/api/newsletter`  | **Placeholder** — returns 501, no form wired up yet    |

## Setup

```bash
cd server
npm install
cp .env.example .env
# fill in CONTACT_TO_EMAIL and (optionally) RESEND_API_KEY
npm run dev
```

Without `RESEND_API_KEY` set, submissions are logged to the console instead of emailed —
useful for local development without a Resend account.

## Deployment

- Deploy this folder to [Render](https://render.com) (free tier) as a Node web service.
  - Build command: `npm install && npm run build`
  - Start command: `npm start`
- Set the environment variables from `.env.example` in Render's dashboard.
- Set `CORS_ORIGIN` to the deployed frontend's URL (e.g. your Vercel domain). Multiple
  origins can be comma-separated.
- On the frontend, set `VITE_API_URL` to this service's Render URL.

## Adding a database later

If a future feature needs persistence (e.g. storing enquiries, an admin dashboard, product
management, orders), the natural next step is PostgreSQL + Prisma:

1. `npm install prisma @prisma/client` and `npx prisma init`
2. Point `DATABASE_URL` at a Postgres instance (Supabase's free tier works well)
3. Add a `prisma/schema.prisma`, then a `services/` module wrapping the Prisma client
4. Keep controllers thin — they should call services, not Prisma directly

Nothing in the current structure needs to change to support this; it's additive.
