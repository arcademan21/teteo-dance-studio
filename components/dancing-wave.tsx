"use client"

interface DancingWaveProps {
  className?: string
  width?: number
  color?: string
}

export function DancingWave({
  className = "",
  width = 80,
  color = "#EDEB55",
}: DancingWaveProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <svg
        viewBox="0 0 120 30"
        width={width}
        height={width * 0.25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="dancing-wave-svg"
      >
        <path
          className="dancing-wave-path"
          d="M 2 20 C 20 5, 35 5, 50 18 C 65 31, 80 2, 98 12 C 108 18, 115 15, 118 12"
          stroke={color}
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <style jsx>{`
        @keyframes danceWave1 {
          0%, 100% {
            d: path("M 2 20 C 20 5, 35 5, 50 18 C 65 31, 80 2, 98 12 C 108 18, 115 15, 118 12");
          }
          20% {
            d: path("M 2 18 C 18 8, 33 2, 50 15 C 67 28, 82 5, 98 15 C 106 20, 114 12, 118 10");
          }
          40% {
            d: path("M 2 22 C 22 3, 37 8, 50 20 C 63 32, 78 0, 98 10 C 110 16, 116 18, 118 14");
          }
          60% {
            d: path("M 2 16 C 16 10, 32 0, 50 14 C 68 28, 84 6, 98 14 C 107 19, 113 10, 118 8");
          }
          80% {
            d: path("M 2 21 C 21 4, 36 6, 50 19 C 64 32, 79 1, 98 11 C 109 17, 115 16, 118 13");
          }
        }

        .dancing-wave-path {
          animation: danceWave1 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
