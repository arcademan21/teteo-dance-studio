interface TeteoLogoProps {
  className?: string
  variant?: "dark" | "yellow"
  showSubtitle?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: { width: 100, height: 38 },
  md: { width: 160, height: 60 },
  lg: { width: 240, height: 90 },
  xl: { width: 360, height: 135 },
}

export function TeteoLogo({
  className = "",
  variant = "dark",
  showSubtitle = true,
  size = "md",
}: TeteoLogoProps) {
  const { width, height } = sizeMap[size]

  const src =
    variant === "yellow"
      ? "/images/teteo-amarillo-solo-logo.png"
      : "/images/teteo-blanco-logo.png"

  const alt = showSubtitle
    ? "Teteo Dance Studio"
    : "Teteo"

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
        style={{ width, height }}
      />
    </div>
  )
}
