"use client";

import { useState } from "react";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#estilos", label: "Estilos" },
  { href: "#horarios", label: "Horarios" },
  { href: "#precios", label: "Precios" },
  { href: "#galeria", label: "Galería" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleReservaClick = (event?: { preventDefault: () => void }) => {
    event?.preventDefault();

    setIsOpen(false);

    const heroSection = document.getElementById("inicio");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    window.setTimeout(() => {
      const nameInput = document.getElementById(
        "name",
      ) as HTMLInputElement | null;
      nameInput?.focus({ preventScroll: true });
    }, 450);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#inicio" className="block">
          <img
            src="/images/teteo-amarillo-logo.png"
            alt="Teteo Dance Studio"
            className="h-14 md:h-16 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://instagram.com/teteo.studio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs px-6"
          >
            <a href="#inicio" onClick={handleReservaClick}>
              Reserva tu plaza
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a
                href="https://instagram.com/teteo.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:teteostudio@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold uppercase tracking-wider text-xs mt-2"
            >
              <a href="#inicio" onClick={handleReservaClick}>
                Reserva tu plaza
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
