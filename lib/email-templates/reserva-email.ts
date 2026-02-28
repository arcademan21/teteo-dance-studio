import type { ReservaFormInput } from "@/lib/reservas/schema";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function createReservaEmailTemplate(input: ReservaFormInput): {
  subject: string;
  html: string;
  text: string;
} {
  const now = new Date();
  const fecha = now.toLocaleString("es-ES", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const safeName = escapeHtml(input.name);
  const safeEmail = escapeHtml(input.email);
  const safeWhatsapp = escapeHtml(input.whatsapp);
  const safeStyle = escapeHtml(input.style);

  const subject = `Nueva reserva de clase - ${input.name}`;

  const html = `
  <div style="font-family: Arial, Helvetica, sans-serif; background: #f4f4f5; margin: 0; padding: 24px;">
    <div style="max-width: 640px; margin: 0 auto; background: #111827; color: #f9fafb; border-radius: 14px; overflow: hidden; border: 1px solid #27272a;">
      <div style="padding: 24px; border-bottom: 1px solid #27272a;">
        <h1 style="margin: 0; font-size: 22px; line-height: 1.2;">Nueva reserva recibida</h1>
        <p style="margin: 8px 0 0; color: #d4d4d8; font-size: 14px;">Formulario web de Teteo Studio</p>
      </div>

      <div style="padding: 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 160px; font-size: 14px;">Nombre</td>
            <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 160px; font-size: 14px;">Correo</td>
            <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 160px; font-size: 14px;">WhatsApp</td>
            <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${safeWhatsapp}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 160px; font-size: 14px;">Estilo</td>
            <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${safeStyle}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 160px; font-size: 14px;">Fecha</td>
            <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${escapeHtml(fecha)}</td>
          </tr>
        </table>
      </div>

      <div style="padding: 18px 24px; background: #09090b; border-top: 1px solid #27272a; color: #a1a1aa; font-size: 12px;">
        Este correo fue enviado automáticamente desde el formulario de reservas.
      </div>
    </div>
  </div>`;

  const text = `Nueva reserva recibida\n\nNombre: ${input.name}\nCorreo: ${input.email}\nWhatsApp: ${input.whatsapp}\nEstilo: ${input.style}\nFecha: ${fecha}`;

  return {
    subject,
    html,
    text,
  };
}
