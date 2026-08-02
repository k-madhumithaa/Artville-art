import type { Request, Response } from "express";
import { sendContactNotification } from "../services/email.service.js";
import type { ContactInput } from "../middleware/validateContact.js";

export async function submitContact(req: Request, res: Response) {
  const payload = req.body as ContactInput;

  try {
    await sendContactNotification({
      name: payload.name,
      email: payload.email,
      phone: payload.phone || undefined,
      message: payload.message,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    return res.status(502).json({
      message: "We couldn't send your message right now. Please try again shortly, or reach out on WhatsApp.",
    });
  }
}
