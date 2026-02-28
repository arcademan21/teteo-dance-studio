import { z } from "zod";

export const danceStyleOptions = [
  "Dancehall",
  "Twerk",
  "Booty Whining",
  "Dembow / Reggaeton",
  "Female Dancehall",
] as const;

export const reservaFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre es obligatorio")
    .max(80, "El nombre es demasiado largo"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Introduce un correo electrónico válido"),
  whatsapp: z
    .string()
    .trim()
    .min(6, "El WhatsApp es obligatorio")
    .max(30, "El WhatsApp es demasiado largo")
    .regex(/^[+0-9()\-\s]+$/, "El WhatsApp contiene caracteres no válidos"),
  style: z.enum(danceStyleOptions, {
    message: "Selecciona un estilo de baile válido",
  }),
});

export type ReservaFormInput = z.infer<typeof reservaFormSchema>;
