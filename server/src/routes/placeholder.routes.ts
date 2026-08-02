import { Router } from "express";

// TODO: not wired up to any frontend form yet — placeholder only.
// Build out the same way as contact.routes.ts (validate -> rate limit -> controller)
// once there's a real "request a custom quote" form on the site.
export const quoteRouter = Router();
quoteRouter.post("/", (_req, res) => {
  res.status(501).json({ message: "Quote requests are not enabled yet." });
});

// TODO: not wired up to any frontend form yet — placeholder only.
// Would typically store the email (e.g. in a simple table or a provider like
// Resend Audiences / Mailchimp) rather than send a one-off email.
export const newsletterRouter = Router();
newsletterRouter.post("/", (_req, res) => {
  res.status(501).json({ message: "Newsletter signup is not enabled yet." });
});
