import type { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("A valid email is required").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function validateContact(req: Request, res: Response, next: NextFunction) {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: result.error.issues[0]?.message || "Invalid submission.",
      errors: result.error.flatten().fieldErrors,
    });
  }

  req.body = result.data;
  next();
}
