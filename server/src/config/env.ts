import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),

  // Comma-separated list of allowed origins for CORS, e.g. "http://localhost:5173,https://artville.example.com"
  CORS_ORIGIN: z.string().default("http://localhost:5173"),

  // Resend (https://resend.com) — used to email contact-form enquiries to the business owner.
  // Leave RESEND_API_KEY unset in development to log enquiries to the console instead of sending email.
  RESEND_API_KEY: z.string().optional(),
  CONTACT_FROM_EMAIL: z.string().default("Artville Website <onboarding@resend.dev>"),
  CONTACT_TO_EMAIL: z.string().default("owner@example.com"), // TODO: replace with the real business inbox

  // Basic protection against form spam
  CONTACT_RATE_LIMIT_WINDOW_MINUTES: z.coerce.number().default(15),
  CONTACT_RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(5),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}

export const env = {
  ...parsed.data,
  CORS_ORIGINS: parsed.data.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
};
