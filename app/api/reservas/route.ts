import { NextResponse } from "next/server";
import { createReservaEmailTemplate } from "@/lib/email-templates/reserva-email";
import {
  blockEmailForToday,
  isEmailBlockedForToday,
} from "@/lib/reservas/daily-email-lock";
import {
  getResendClient,
  RESEND_FROM_EMAIL,
  RESERVAS_TO_EMAIL,
} from "@/lib/resend";
import { reservaFormSchema } from "@/lib/reservas/schema";

export async function POST(request: Request) {
  try {
    const rawData = await request.json();
    const parsed = reservaFormSchema.safeParse(rawData);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return NextResponse.json(
        { message: firstIssue?.message || "Datos del formulario inválidos" },
        { status: 400 },
      );
    }

    const formData = parsed.data;

    const blocked = await isEmailBlockedForToday(formData.email);
    if (blocked) {
      return NextResponse.json(
        {
          message:
            "Hemos recibido tu solicitud. Puedes enviar una nueva reserva dentro de 24 horas.",
        },
        { status: 429 },
      );
    }

    const resend = getResendClient();
    const emailTemplate = createReservaEmailTemplate(formData);

    const sendResult = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [RESERVAS_TO_EMAIL],
      replyTo: formData.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    if (sendResult.error) {
      return NextResponse.json(
        { message: "No fue posible enviar la reserva en este momento" },
        { status: 502 },
      );
    }

    await blockEmailForToday(formData.email);

    return NextResponse.json({
      success: true,
      message: "Reserva enviada correctamente",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Error interno al procesar la reserva";

    return NextResponse.json(
      { message: message || "Error interno al procesar la reserva" },
      { status: 500 },
    );
  }
}
