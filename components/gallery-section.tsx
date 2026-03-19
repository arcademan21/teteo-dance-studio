"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
};

const VIDEO_BASE_URL =
  "https://boundary-minimum-legend-stakeholders.trycloudflare.com";

const videos = [
  {
    id: 1,
    src: `${VIDEO_BASE_URL}/Twerk-session-halima.mov`,
    title: "Twerk Session - Halima",
    gridClass: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: `${VIDEO_BASE_URL}/Female-Dancehall-halima.mov`,
    title: "Female Dancehall - Halima",
    gridClass: "",
  },
  {
    id: 3,
    src: `${VIDEO_BASE_URL}/Female-Dancehall-session-nerea.mov`,
    title: "Female Dancehall Session - Nerea",
    gridClass: "",
  },
  {
    id: 4,
    src: `${VIDEO_BASE_URL}/Dembow-Reggaeton.mov`,
    title: "Dembow Reggaeton",
    gridClass: "col-span-2",
  },
  {
    id: 5,
    src: `${VIDEO_BASE_URL}/Booty-Whinning.mov`,
    title: "Booty Whinning",
    gridClass: "col-span-2",
  },
];

export function GallerySection() {
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>(
    {},
  );
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const stopOtherVideos = (
    currentId: number,
    currentVideo: HTMLVideoElement | null,
  ) => {
    const allVideos = document.querySelectorAll("video");

    allVideos.forEach((videoElement) => {
      if (videoElement !== currentVideo && !videoElement.paused) {
        videoElement.pause();
      }
    });

    setPlayingVideos(() => ({ [currentId]: true }));
  };

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
            Galería
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl uppercase text-center text-foreground tracking-tight"
            style={{ fontFamily: "var(--font-anton)" }}
          >
            Nuestras clases
          </h2>
          <p className="text-muted-foreground text-center max-w-xl leading-relaxed">
            Espacios amplios, energía pura y una comunidad increíble. Así se
            vive el baile en Teteo Studio.
          </p>
        </div>

        {/* Bento Grid - Photos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
          {/* Large Image - Neon studio shot, spans 2 cols, 2 rows */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhoto({
                src: "/images/galeria-clase-grupal-neon.jpeg",
                alt: "Clase grupal en Teteo Studio con neon amarillo",
                title: "Teteo Studio",
              })
            }
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group cursor-zoom-in"
          >
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
          </button>

          {/* Standing choreography class */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhoto({
                src: "/images/galeria-halima-session.jpeg",
                alt: "Alumnas practicando coreografía de pie en Teteo Studio",
                title: "Coreografía",
              })
            }
            className="relative rounded-2xl overflow-hidden group cursor-zoom-in"
          >
            <img
              src="/images/galeria-halima-session.jpeg"
              alt="Alumnas practicando coreografía de pie en Teteo Studio"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-foreground font-semibold text-sm">
                Coreografía
              </span>
            </div>
          </button>

          {/* Floor stretching */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhoto({
                src: "/images/galeria-nerea-session.jpeg",
                alt: "Alumnas realizando ejercicios de suelo en Teteo Studio",
                title: "Twerk",
              })
            }
            className="relative rounded-2xl overflow-hidden group cursor-zoom-in"
          >
            <img
              src="/images/galeria-nerea-session.jpeg"
              alt="Alumnas realizando ejercicios de suelo en Teteo Studio"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-foreground font-semibold text-sm">
                Twerk
              </span>
            </div>
          </button>

          {/* Arms raised stretching - spans 2 cols */}
          <button
            type="button"
            onClick={() =>
              setSelectedPhoto({
                src: "/images/galeria-calentamiento-brazos.jpeg",
                alt: "Alumnas estirando con brazos levantados frente al espejo",
                title: "Calentamiento",
              })
            }
            className="col-span-2 relative rounded-2xl overflow-hidden group cursor-zoom-in"
          >
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
          </button>
        </div>

        {/* Video Section */}
        <div className="mt-20">
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-primary font-medium">
              Vídeos
            </span>
            <h3
              className="text-3xl md:text-4xl uppercase text-center text-foreground tracking-tight"
              style={{ fontFamily: "var(--font-anton)" }}
            >
              En movimiento
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[260px]">
            {videos.map((video) => (
              <div
                key={video.id}
                className={`relative rounded-2xl overflow-hidden bg-card border border-border group ${video.gridClass}`}
                onMouseEnter={() => setHoveredVideoId(video.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
              >
                <video
                  src={video.src}
                  controls={hoveredVideoId === video.id}
                  playsInline
                  preload="metadata"
                  onPlay={(event) =>
                    stopOtherVideos(video.id, event.currentTarget)
                  }
                  onPause={() =>
                    setPlayingVideos((prev) => ({ ...prev, [video.id]: false }))
                  }
                  onEnded={() =>
                    setPlayingVideos((prev) => ({ ...prev, [video.id]: false }))
                  }
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/80 via-background/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                <div
                  className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    playingVideos[video.id]
                      ? "opacity-0"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-background/70 border border-border">
                    <Play className="h-6 w-6 text-primary ml-0.5" />
                  </div>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="text-foreground font-semibold text-sm md:text-base">
                    {video.title}
                  </span>
                </div>
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
              MULTI
            </span>
            <span className="text-sm text-muted-foreground">
              Clases multinivel para aprender y disfrutar a tu ritmo
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
              Duración de cada clase para una experiencia completa
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
              Bloques de trabajo: técnica, coreografía y grabación
            </span>
          </div>
        </div>

        <Dialog
          open={Boolean(selectedPhoto)}
          onOpenChange={(open) => {
            if (!open) {
              setSelectedPhoto(null);
            }
          }}
        >
          <DialogContent className="max-w-5xl p-2 sm:max-w-5xl" showCloseButton>
            {selectedPhoto && (
              <>
                <DialogTitle className="sr-only">
                  {selectedPhoto.title}
                </DialogTitle>
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full max-h-[80vh] object-contain rounded-md"
                />
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
