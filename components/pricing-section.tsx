import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "1 Clase Semanal",
    price: "60",
    period: "/mes",
    hours: "6 horas al mes",
    highlight: false,
    features: [
      "Plaza reservada en exclusiva",
      "Sin necesidad de reservar cada semana",
      "Posibilidad de recuperar clases",
    ],
  },
  {
    name: "2 Clases Semanales",
    price: "110",
    period: "/mes",
    hours: "12 horas al mes",
    highlight: true,
    features: [
      "Plaza reservada en exclusiva",
      "Sin necesidad de reservar cada semana",
      "Posibilidad de recuperar clases",
      "Mayor progreso y constancia",
    ],
  },
  {
    name: "Bono 10 Clases",
    price: "140",
    period: "",
    hours: "15 horas",
    highlight: false,
    features: [
      "Valido hasta 2 meses",
      "Elige cualquier clase y estilo",
      "Flexibilidad total de horarios",
    ],
  },
  {
    name: "Bono 20 Clases",
    price: "250",
    period: "",
    hours: "30 horas",
    highlight: false,
    features: [
      "Valido hasta 3 meses",
      "Elige cualquier clase y estilo",
      "Flexibilidad total de horarios",
      "Mejor precio por clase",
    ],
  },
]

const extras = [
  { name: "Bono Mensual Ilimitado", price: "180", note: "8 plazas disponibles" },
  { name: "Clase Suelta", price: "18", note: "Pago por sesion individual" },
]

export function PricingSection() {
  return (
    <section id="precios" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Precios
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Elige tu plan
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            Todas nuestras clases duran 1 hora y media, dando espacio y tiempo para una clase de calidad y disfrute.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col gap-5 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-4 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <div>
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-md font-medium">
                  {plan.hours}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-xl text-foreground">{"€"}</span>
                {plan.period && (
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full font-semibold uppercase tracking-wider text-xs ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <a href="#inicio">Reservar</a>
              </Button>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((extra) => (
            <div
              key={extra.name}
              className="rounded-2xl bg-card border border-border p-6 flex items-center justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="text-foreground font-bold">{extra.name}</span>
                <span className="text-xs text-muted-foreground">{extra.note}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary">{extra.price}</span>
                <span className="text-lg text-primary">{"€"}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Info Note */}
        <div className="mt-8 rounded-xl bg-muted border border-border p-5 flex items-start gap-3">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Mensualidad:</strong> Tu plaza queda reservada en exclusiva. No necesitas reservar cada semana. Si un dia no puedes asistir, puedes recuperar la clase en otro horario avisando antes de las 14:00h.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Bonos:</strong> No garantizan plaza fija. Puedes asistir a cualquier clase eligiendo dia y estilo. Reserva hasta las 14:00h del mismo dia. Cancela como maximo 12h antes del inicio.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
