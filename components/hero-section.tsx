"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { DancingWave } from "@/components/dancing-wave";
import { reservaFormSchema } from "@/lib/reservas/schema";

const danceStyles = [
  "Dancehall",
  "Twerk",
  "Booty Whining",
  "Reggaetón / Dembow",
  "Female Dancehall",
];

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    style: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setSubmitError("");

    const parsed = reservaFormSchema.safeParse(formData);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      setSubmitError(
        firstIssue?.message || "Revisa los campos del formulario.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        setSubmitError(
          result?.message ||
            "No se pudo enviar la reserva. Inténtalo de nuevo en unos minutos.",
        );
        return;
      }

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setFormData({ name: "", email: "", whatsapp: "", style: "" });
    } catch {
      setSubmitError(
        "No se pudo enviar la reserva. Revisa tu conexión e inténtalo otra vez.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/galeria-clase-grupal-neon.jpeg"
          alt="Clase de baile en Teteo Studio con neon amarillo"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <DancingWave width={60} />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Madrid &middot; Calle Conde de Vistahermosa, 9
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-[0.9] tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              Siente el
              <br />
              <span className="text-primary">ritmo</span>
              <br />
              en tu cuerpo
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Clases de Dancehall, Twerk, Booty Whining, Reggaetón / Dembow y
              Female Dancehall para disfrutar, soltar y conectar con tu energía.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Halima", "Nerea"].map((prof) => (
                <div
                  key={prof}
                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground font-medium">
                    Prof. {prof}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Lead Form */}
          <div className="w-full max-w-md lg:ml-auto">
            <div className="rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border p-8">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-xl font-bold text-foreground uppercase tracking-wide">
                  Reserva tu clase de prueba
                </h2>
                <p className="text-sm text-muted-foreground">
                  Rellena el formulario y te contactamos por WhatsApp
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <p className="text-foreground font-semibold text-center">
                    Solicitud enviada correctamente
                  </p>
                  <p className="text-sm text-muted-foreground text-center">
                    Te contactaremos pronto por WhatsApp
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
                    >
                      Nombre
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 h-12"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
                    >
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 h-12"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="whatsapp"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
                    >
                      WhatsApp
                    </label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+34 600 000 000"
                      required
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({ ...formData, whatsapp: e.target.value })
                      }
                      className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 h-12"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="style"
                      className="text-xs uppercase tracking-wider text-muted-foreground font-medium"
                    >
                      Estilo de baile
                    </label>
                    <select
                      id="style"
                      required
                      value={formData.style}
                      onChange={(e) =>
                        setFormData({ ...formData, style: e.target.value })
                      }
                      className="flex h-12 w-full rounded-lg bg-background/50 border border-border px-3 text-sm text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option
                        value=""
                        disabled
                        className="text-muted-foreground"
                      >
                        Selecciona un estilo
                      </option>
                      {danceStyles.map((style) => (
                        <option
                          key={style}
                          value={style}
                          className="bg-background text-foreground"
                        >
                          {style}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold uppercase tracking-wider text-sm mt-2 group"
                  >
                    {isSubmitting ? "Enviando..." : "Quiero mi plaza"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {submitError ? (
                    <p className="text-xs text-destructive text-center leading-relaxed">
                      {submitError}
                    </p>
                  ) : null}

                  <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                    Al enviar aceptas que te contactemos por WhatsApp para
                    informarte sobre nuestras clases.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
