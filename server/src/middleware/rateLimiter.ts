import { rateLimit } from "express-rate-limit";
import { env } from "../config/env.js";

export const contactRateLimiter = rateLimit({
  windowMs: env.CONTACT_RATE_LIMIT_WINDOW_MINUTES * 60 * 1000,
  max: env.CONTACT_RATE_LIMIT_MAX_REQUESTS,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many messages sent. Please try again later.",
  },
});
