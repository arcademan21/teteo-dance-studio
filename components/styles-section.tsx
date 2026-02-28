import { Music, Flame, Sparkles, Heart, Star } from "lucide-react"

const styles = [
  {
    name: "Dancehall",
    description: "Originario de Jamaica, este estilo lleno de energia combina movimientos explosivos con ritmos caribenos. Aprende pasos autenticos y coreografias que te haran vibrar.",
    icon: Music,
    teachers: ["Halima"],
  },
  {
    name: "Twerk",
    description: "Trabaja el control corporal, la fuerza y la confianza con movimientos de aislamiento y bounce. Clases divertidas y empoderadoras para todos los niveles.",
    icon: Flame,
    teachers: ["Halima"],
  },
  {
    name: "Booty Whining",
    description: "Fusion de movimientos caribenos centrados en caderas y cintura. Un estilo sensual y potente que trabaja la flexibilidad y el groove natural.",
    icon: Sparkles,
    teachers: ["Nerea"],
  },
  {
    name: "Dembow / Reggaeton",
    description: "Los ritmos urbanos latinos mas actuales. Aprende coreografias con actitud, flow y mucha energia. Perfecto para soltar y pasarla bien.",
    icon: Star,
    teachers: ["Halima"],
  },
  {
    name: "Female Dancehall",
    description: "Una version del Dancehall con enfoque femenino y empoderado. Movimientos fluidos, actitud y mucha personalidad. Expresa tu lado mas fuerte.",
    icon: Heart,
    teachers: ["Nerea"],
  },
]

export function StylesSection() {
  return (
    <section id="estilos" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Nuestros estilos
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Encuentra tu ritmo
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            5 estilos de baile urbano impartidos por profesoras con anos de experiencia. Grupos reducidos para un aprendizaje personalizado.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {styles.map((style, index) => (
            <div
              key={style.name}
              className={`group relative rounded-2xl bg-card border border-border p-8 flex flex-col gap-4 hover:border-primary/50 transition-all duration-300 ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <style.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
                {style.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {style.description}
              </p>

              {/* Teachers */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Profesora:</span>
                {style.teachers.map((t) => (
                  <span key={t} className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
