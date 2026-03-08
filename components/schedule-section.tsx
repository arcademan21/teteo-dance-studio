import { Clock, MapPin, Train } from "lucide-react";
import { DancingWave } from "@/components/dancing-wave";

const schedule = [
  {
    time: "18:00h",
    classes: [
      { day: "Lunes", style: "Reggaetón / Dembow", teacher: "Halima" },
      { day: "Martes", style: "Booty Whining", teacher: "Nerea" },
      { day: "Miércoles", style: "Dancehall", teacher: "Halima" },
      { day: "Jueves", style: "Female Dancehall", teacher: "Nerea" },
    ],
  },
  {
    time: "19:30h",
    classes: [
      { day: "Lunes", style: "Dancehall", teacher: "Halima" },
      { day: "Martes", style: "Twerk", teacher: "Halima" },
      { day: "Miércoles", style: "Female Dancehall", teacher: "Nerea" },
      { day: "Jueves", style: "Booty Whining", teacher: "Nerea" },
    ],
  },
  {
    time: "21:00h",
    classes: [
      { day: "Lunes", style: "Female Dancehall", teacher: "Nerea" },
      { day: "Martes", style: "Compañía (grupo cerrado)", teacher: "Halima" },
      { day: "Miércoles", style: "Booty Whining", teacher: "Nerea" },
      { day: "Jueves", style: "Reggaetón / Dembow", teacher: "Halima" },
    ],
  },
];

const days = ["Lunes", "Martes", "Miércoles", "Jueves"];

export function ScheduleSection() {
  return (
    <section id="horarios" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Horarios
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Nuestro horario
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            Todas las clases son multinivel y duran 1 hora y media. La clase de
            Compañía de los martes a las 21:00h es un grupo cerrado.
          </p>
        </div>

        {/* Desktop Schedule Table */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-175">
            {/* Header Row */}
            <div className="grid grid-cols-5 gap-3 mb-4">
              <div className="flex items-center gap-2 px-4 py-3">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Hora
                </span>
              </div>
              {days.map((day) => (
                <div key={day} className="text-center px-4 py-3">
                  <span className="text-sm uppercase tracking-wider text-foreground font-bold">
                    {day}
                  </span>
                </div>
              ))}
            </div>

            {/* Schedule Rows */}
            {schedule.map((block) => (
              <div key={block.time} className="grid grid-cols-5 gap-3 mb-3">
                {/* Time */}
                <div className="flex items-center justify-center rounded-xl bg-primary px-4 py-5">
                  <span className="text-lg font-bold text-primary-foreground">
                    {block.time}
                  </span>
                </div>

                {/* Classes */}
                {block.classes.map((cls) => (
                  <div
                    key={`${block.time}-${cls.day}`}
                    className={`rounded-xl border p-4 flex flex-col items-center justify-center gap-2 transition-colors ${
                      cls.style.includes("grupo cerrado")
                        ? "bg-card/60 border-primary/50"
                        : "bg-card border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-sm font-bold text-foreground text-center leading-tight">
                      {cls.style}
                    </span>
                    {cls.style.includes("grupo cerrado") ? (
                      <span className="text-[10px] uppercase tracking-wider bg-primary/15 text-primary px-2 py-1 rounded-md font-semibold">
                        Cerrado
                      </span>
                    ) : null}
                    <span className="text-xs bg-background px-3 py-1 rounded-md text-primary font-semibold">
                      {cls.teacher}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Schedule */}
        <div className="md:hidden flex flex-col gap-6">
          {schedule.map((block) => (
            <div key={block.time} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-lg">
                  {block.time}
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {block.classes.map((cls) => (
                  <div
                    key={`${block.time}-${cls.day}-mobile`}
                    className={`rounded-xl border p-4 flex flex-col gap-2 ${
                      cls.style.includes("grupo cerrado")
                        ? "bg-card/60 border-primary/50"
                        : "bg-card border-border"
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-wider text-primary font-semibold">
                      {cls.day}
                    </span>
                    <span className="text-sm font-bold text-foreground leading-tight">
                      {cls.style}
                    </span>
                    {cls.style.includes("grupo cerrado") ? (
                      <span className="text-[10px] uppercase tracking-wider bg-primary/15 text-primary px-2 py-1 rounded-md font-semibold w-fit">
                        Grupo cerrado
                      </span>
                    ) : null}
                    <span className="text-xs text-muted-foreground">
                      {cls.teacher}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location Bar */}
        <div className="mt-12 rounded-2xl bg-card border border-border p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <DancingWave width={50} />
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-bold">
                Calle Conde de Vistahermosa, 9
              </p>
              <p className="text-sm text-muted-foreground">{"Fedriani"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Train className="h-5 w-5 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">
              Metro: Marqués de Vadillo. Bus: 116, 23, 34, 62, E1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
