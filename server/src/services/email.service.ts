import { Resend } from "resend";
import { env } from "../config/env.js";
import type { ContactPayload } from "../types/contact.js";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendContactNotification(payload: ContactPayload) {
  const subject = `New enquiry from ${payload.name} — Artville website`;
  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.phone ? `Phone: ${payload.phone}` : null,
    "",
    "Message:",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!resend) {
    // No RESEND_API_KEY configured — log instead of sending, so local dev still works.
    console.log("📨 [dev] Contact form submission (RESEND_API_KEY not set):\n" + text);
    return { delivered: false as const };
  }

  await resend.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_TO_EMAIL,
    replyTo: payload.email,
    subject,
    text,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      ${payload.phone ? `<p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(payload.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  return { delivered: true as const };
}
