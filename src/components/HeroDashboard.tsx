export default function HeroDashboard() {
  return (
    <svg
      viewBox="0 0 560 400"
      fill="none"
      className="w-full max-w-lg animate-float"
      aria-hidden="true"
    >
      {/* Browser frame */}
      <rect
        x="20"
        y="20"
        width="520"
        height="360"
        rx="16"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1.5"
      />
      {/* Title bar */}
      <rect x="20" y="20" width="520" height="44" rx="16" fill="#f8f9fa" />
      <rect x="20" y="48" width="520" height="16" fill="#f8f9fa" />
      <circle cx="48" cy="42" r="6" fill="#ff6b6b" opacity="0.8" />
      <circle cx="68" cy="42" r="6" fill="#ffd93d" opacity="0.8" />
      <circle cx="88" cy="42" r="6" fill="#6BCB77" opacity="0.8" />
      {/* URL bar */}
      <rect
        x="120"
        y="32"
        width="300"
        height="20"
        rx="10"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text
        x="140"
        y="46"
        fontSize="10"
        fill="#a0aec0"
        fontFamily="system-ui"
      >
        sivit.com
      </text>

      {/* Sidebar */}
      <rect x="20" y="64" width="120" height="316" fill="#f8f9fa" />
      <rect
        x="36"
        y="84"
        width="88"
        height="10"
        rx="5"
        fill="#6C5CE7"
        opacity="0.2"
      />
      <rect
        x="36"
        y="106"
        width="72"
        height="8"
        rx="4"
        fill="#6C5CE7"
        opacity="0.15"
      />
      <rect
        x="36"
        y="124"
        width="80"
        height="8"
        rx="4"
        fill="#6C5CE7"
        opacity="0.1"
      />
      <rect
        x="36"
        y="142"
        width="64"
        height="8"
        rx="4"
        fill="#6C5CE7"
        opacity="0.1"
      />

      {/* Main content - Stats row */}
      <rect
        x="160"
        y="84"
        width="110"
        height="72"
        rx="10"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text
        x="176"
        y="108"
        fontSize="10"
        fill="#a0aec0"
        fontFamily="system-ui"
      >
        Visitors
      </text>
      <text
        x="176"
        y="132"
        fontSize="22"
        fontWeight="700"
        fill="#6C5CE7"
        fontFamily="system-ui"
      >
        2,847
      </text>

      <rect
        x="285"
        y="84"
        width="110"
        height="72"
        rx="10"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text
        x="301"
        y="108"
        fontSize="10"
        fill="#a0aec0"
        fontFamily="system-ui"
      >
        Conversion
      </text>
      <text
        x="301"
        y="132"
        fontSize="22"
        fontWeight="700"
        fill="#1a1a2e"
        fontFamily="system-ui"
      >
        12.4%
      </text>

      <rect
        x="410"
        y="84"
        width="110"
        height="72"
        rx="10"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text
        x="426"
        y="108"
        fontSize="10"
        fill="#a0aec0"
        fontFamily="system-ui"
      >
        Revenue
      </text>
      <text
        x="426"
        y="132"
        fontSize="22"
        fontWeight="700"
        fill="#6BCB77"
        fontFamily="system-ui"
      >
        $14.2K
      </text>

      {/* Chart area */}
      <rect
        x="160"
        y="172"
        width="360"
        height="180"
        rx="10"
        fill="white"
        stroke="#e2e8f0"
        strokeWidth="1"
      />
      <text
        x="176"
        y="196"
        fontSize="11"
        fontWeight="600"
        fill="#1a1a2e"
        fontFamily="system-ui"
      >
        Performance Overview
      </text>

      {/* Chart grid lines */}
      <line
        x1="176"
        y1="220"
        x2="504"
        y2="220"
        stroke="#f0f0f0"
        strokeWidth="1"
      />
      <line
        x1="176"
        y1="250"
        x2="504"
        y2="250"
        stroke="#f0f0f0"
        strokeWidth="1"
      />
      <line
        x1="176"
        y1="280"
        x2="504"
        y2="280"
        stroke="#f0f0f0"
        strokeWidth="1"
      />
      <line
        x1="176"
        y1="310"
        x2="504"
        y2="310"
        stroke="#f0f0f0"
        strokeWidth="1"
      />

      {/* Area chart fill */}
      <path
        d="M176 330 L176 290 L210 270 L244 280 L278 250 L312 260 L346 230 L380 240 L414 210 L448 225 L482 200 L504 210 L504 330 Z"
        fill="#6C5CE7"
        opacity="0.08"
      />

      {/* Area chart line */}
      <path
        d="M176 290 L210 270 L244 280 L278 250 L312 260 L346 230 L380 240 L414 210 L448 225 L482 200 L504 210"
        stroke="#6C5CE7"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Secondary line */}
      <path
        d="M176 310 L210 300 L244 305 L278 285 L312 290 L346 275 L380 280 L414 260 L448 270 L482 255 L504 260"
        stroke="#a29bfe"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="4 4"
      />

      {/* Data points on primary */}
      <circle cx="278" cy="250" r="4" fill="#6C5CE7" />
      <circle cx="414" cy="210" r="4" fill="#6C5CE7" />
      <circle cx="482" cy="200" r="4" fill="#6C5CE7" />

      {/* Floating accent elements */}
      <rect
        x="460"
        y="4"
        width="80"
        height="30"
        rx="15"
        fill="#6C5CE7"
        opacity="0.1"
      />
      <text
        x="476"
        y="23"
        fontSize="10"
        fill="#6C5CE7"
        fontWeight="600"
        fontFamily="system-ui"
      >
        +24.5%
      </text>
    </svg>
  );
}
