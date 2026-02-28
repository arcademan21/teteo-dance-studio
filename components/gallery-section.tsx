import { Play } from "lucide-react";

// Video placeholders - replace src with real video URLs when available
const videos = [
  { id: 1, src: "", poster: "", title: "Coreografia Dancehall" },
  { id: 2, src: "", poster: "", title: "Clase de Twerk" },
  { id: 3, src: "", poster: "", title: "Booty Whining Session" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Galeria
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Nuestras clases
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            Espacios amplios, energia pura y una comunidad increible. Asi se
            vive el baile en Teteo Studio.
          </p>
        </div>

        {/* Bento Grid - Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {/* Large Image - Neon studio shot, spans 2 cols, 2 rows */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <img
              src="/images/galeria-clase-grupal-neon.jpeg"
              alt="Clase grupal en Teteo Studio con neon amarillo"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-foreground font-bold text-lg">
                Teteo Studio
              </span>
            </div>
          </div>

          {/* Standing choreography class */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="/images/galeria-coreografia-pie.jpeg"
              alt="Alumnas practicando coreografia de pie en Teteo Studio"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-foreground font-semibold text-sm">
                Coreografia
              </span>
            </div>
          </div>

          {/* Floor stretching */}
          <div className="relative rounded-2xl overflow-hidden group">
            <img
              src="/images/galeria-trabajo-suelo.jpeg"
              alt="Alumnas realizando ejercicios de suelo en Teteo Studio"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-foreground font-semibold text-sm">
                Trabajo de suelo
              </span>
            </div>
          </div>

          {/* Arms raised stretching - spans 2 cols */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden group">
            <img
              src="/images/galeria-calentamiento-brazos.jpeg"
              alt="Alumnas estirando con brazos levantados frente al espejo"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span className="text-foreground font-bold text-lg">
                Calentamiento
              </span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Videos
            </span>
            <h3
              className="text-3xl md:text-4xl uppercase text-center text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              En movimiento
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative aspect-[9/16] md:aspect-video rounded-2xl overflow-hidden bg-card border border-border group"
              >
                {video.src ? (
                  <video
                    src={video.src}
                    poster={video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  >
                    <track kind="captions" />
                  </video>
                ) : (
                  /* Placeholder for when videos are not yet available */
                  <div className="h-full w-full flex flex-col items-center justify-center gap-4 bg-card">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border-2 border-primary/30 group-hover:bg-primary/20 transition-colors duration-300">
                      <Play className="h-7 w-7 text-primary ml-1" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {video.title}
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      Proximamente
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Cards below gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-3 text-center">
            <span
              className="text-3xl text-primary"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              15-17
            </span>
            <span className="text-sm text-muted-foreground">
              Aforo maximo por clase para un aprendizaje personalizado
            </span>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-3 text-center">
            <span
              className="text-3xl text-primary"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              1:30h
            </span>
            <span className="text-sm text-muted-foreground">
              Duracion de cada clase para una experiencia completa
            </span>
          </div>
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-3 text-center">
            <span
              className="text-3xl text-primary"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              3 SEM
            </span>
            <span className="text-sm text-muted-foreground">
              Bloques de trabajo: tecnica, coreografia y grabacion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
