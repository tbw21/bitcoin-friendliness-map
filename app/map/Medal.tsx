// Gold medal for the country in first place (the #1 card, the top-5 list and its details).
// Decorative: the text next to it always says "No. 1" / "Rank #1" for screen readers.
export default function Medal({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {/* ribbon */}
      <path d="M7 1.5h4l2.2 7.2-3.4 1.6z" fill="#2f5d91" />
      <path d="M17 1.5h-4l-2.2 7.2 3.4 1.6z" fill="#3f78b5" />
      {/* disc */}
      <circle cx="12" cy="15" r="7.25" fill="#c9962b" />
      <circle cx="12" cy="15" r="5.9" fill="#f0c75e" />
      <circle cx="12" cy="15" r="5.9" fill="none" stroke="#fbe3a0" strokeWidth="0.6" strokeDasharray="1 1.2" />
      <text x="12" y="18.1" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#7a5410" style={{ fontFamily: "Georgia, serif" }}>
        1
      </text>
    </svg>
  );
}

// Plainer first-place mark: a gold ring with the figure 1, no ribbon. Same footprint as a flag-height
// icon, so it adds no height to the card it sits in.
export function RingMedal({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" aria-hidden="true">
      <defs>
        <linearGradient id="ring-medal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6d77c" />
          <stop offset="0.55" stopColor="#d9a93a" />
          <stop offset="1" stopColor="#a8761c" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="12" fill="none" stroke="url(#ring-medal-gold)" strokeWidth="2.25" />
      {/* the figure 1, drawn as a shape so it stays sturdy at icon size whatever the fonts */}
      <path d="M15.6 7.2V19h2.1v1.6h-7.4V19h2.2v-8.4l-2.5.9V9.7z" fill="url(#ring-medal-gold)" />
    </svg>
  );
}
