import { Music, Flame, Sparkles, Heart, Star } from "lucide-react";

const styles = [
  {
    name: "Dancehall",
    description:
      "Es una cultura y estilo de baile nacido en Jamaica. Se caracteriza por su energía, musicalidad y fuerte presencia corporal, con pasos que reflejan la historia y el contexto social jamaicano. Más que un baile, es identidad, expresión y cultura.",
    icon: Music,
    teachers: ["Halima"],
  },
  {
    name: "Twerk",
    description:
      "Trabaja el control corporal, la fuerza y la confianza con movimientos de aislamiento y bounce. Clases divertidas y empoderadoras para todos los niveles.",
    icon: Flame,
    teachers: ["Halima"],
  },
  {
    name: "Booty Whining",
    description:
      "Fusión de movimientos centrados en caderas y cintura. Un estilo sensual y potente que te conecta con tu energía femenina y salvaje, trabajando técnica de movimiento, pasos y coreografía. Es un estilo para conectarte, liberarte y disfrutar bailando.",
    icon: Sparkles,
    teachers: ["Nerea"],
  },
  {
    name: "Reggaetón / Dembow",
    description:
      "Combina la fuerza y musicalidad del reggaetón con la energía explosiva del dembow dominicano. Trabajamos técnica, aislamientos, actitud y conexión con el ritmo, potenciando el flow y la seguridad de cada persona.",
    icon: Star,
    teachers: ["Halima"],
  },
  {
    name: "Female Dancehall",
    description:
      "Una versión del Dancehall que representa y potencia el poder femenino. Se caracteriza por sus movimientos explosivos, fluidos y con mucha actitud. En clase trabajaremos pasos y coreografías para desarrollar la confianza con una misma y el disfrute de nuestro cuerpo/alma.",
    icon: Heart,
    teachers: ["Nerea"],
  },
];

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
            Teteo Studio: bailar para disfrutar, disfrutar para soltar
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            5 estilos de baile urbano impartidos por profesoras con años de
            experiencia.
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
                <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Profesora:
                </span>
                {style.teachers.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
