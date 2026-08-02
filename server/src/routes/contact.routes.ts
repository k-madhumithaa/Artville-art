import { Router } from "express";
import { validateContact } from "../middleware/validateContact.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";
import { submitContact } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.post("/", contactRateLimiter, validateContact, submitContact);
