import { Instagram, Mail, MapPin } from "lucide-react";
import { DancingWave } from "@/components/dancing-wave";

export function Footer() {
  return (
    <footer id="contacto" className="py-16 bg-muted border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src="/images/teteo-amarillo-logo.png"
              alt="Teteo Dance Studio"
              className="h-20 w-[60%] object-contain"
            />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Nuestras clases estan hechas para disfrutar, aprender, compartir,
              trabajar la autoestima, cuerpo, mente y alma mientras bailamos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
              Enlaces
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "#estilos", label: "Estilos de Baile" },
                { href: "#horarios", label: "Horarios" },
                { href: "#precios", label: "Precios" },
                { href: "#galeria", label: "Galeria" },
                { href: "#inicio", label: "Reservar Clase" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
              Contacto
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:teteostudio@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-primary" />
                teteostudio@gmail.com
              </a>
              <a
                href="https://instagram.com/teteo.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-4 w-4 text-primary" />
                @teteo.studio
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <DancingWave width={40} />
                    <span>Calle Magdalena 7, Madrid</span>
                  </div>
                  <span>{"Bambu, Espacio Tierra"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Teteo Dance Studio. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-muted-foreground">
            Reservas y cancelaciones por correo o Instagram
          </p>
        </div>
      </div>
    </footer>
  );
}
