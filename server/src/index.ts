import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { contactRouter } from "./routes/contact.routes.js";
import { quoteRouter, newsletterRouter } from "./routes/placeholder.routes.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGINS,
  }),
);
app.use(express.json({ limit: "100kb" }));

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/contact", contactRouter);
app.use("/api/quote", quoteRouter);
app.use("/api/newsletter", newsletterRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Not found." });
});

app.listen(env.PORT, () => {
  console.log(`🎨 Artville API listening on port ${env.PORT} (${env.NODE_ENV})`);
});
