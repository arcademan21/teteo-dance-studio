import { z } from "zod";

export const danceStyleOptions = [
  "Dancehall",
  "Twerk",
  "Booty Whining",
  "Reggaetón / Dembow",
  "Female Dancehall",
] as const;

const nameRegex = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/;
const whatsappAllowedCharsRegex = /^[+0-9()\-\s]+$/;

function isValidSpanishPhone(rawPhone: string): boolean {
  // Permit separators while validating the normalized number.
  const cleaned = rawPhone.replace(/[\s()\-]/g, "");
  let national = cleaned;

  if (national.startsWith("+34")) {
    national = national.slice(3);
  }

  if (!/^\d{9}$/.test(national)) {
    return false;
  }

  const isSpanishMobile = /^[67]\d{8}$/.test(national);
  const isMadridLandline = /^91\d{7}$/.test(national);

  return isSpanishMobile || isMadridLandline;
}

export const reservaFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre es obligatorio")
    .max(60, "El nombre completo es demasiado largo")
    .refine((value) => nameRegex.test(value), {
      message:
        "El nombre solo puede contener letras, espacios, apóstrofes y guiones",
    })
    .transform((value) => value.replace(/\s+/g, " ")),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Introduce un correo electrónico válido"),
  whatsapp: z
    .string()
    .trim()
    .min(9, "El WhatsApp es obligatorio")
    .max(25, "El WhatsApp es demasiado largo")
    .regex(
      whatsappAllowedCharsRegex,
      "El WhatsApp contiene caracteres no válidos",
    )
    .refine(
      (value) => isValidSpanishPhone(value),
      "Introduce un teléfono español válido (+34 opcional, móvil 6/7 o fijo 91)",
    ),
  style: z.enum(danceStyleOptions, {
    message: "Selecciona un estilo de baile válido",
  }),
});

export type ReservaFormInput = z.infer<typeof reservaFormSchema>;
