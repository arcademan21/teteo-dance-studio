import { Resend } from "resend";

export const RESEND_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Teteo Studio <onboarding@resend.dev>";

export const RESERVAS_TO_EMAIL =
  process.env.RESERVAS_TO_EMAIL || "teteostudio@gmail.com";

export function getResendClient(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY no está configurada");
  }

  return new Resend(apiKey);
}
