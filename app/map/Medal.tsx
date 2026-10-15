// Gold medal for the country in first place (the card under the search bar).
// Decorative: the card's text says what it means.
// The ribbon is navy with a Bitcoin-orange centre stripe. Thin cream lines edge the stripe and a
// dark clasp sits between ribbon and disc, so the orange never touches the gold and the two stay
// apart even at icon size.
export default function Medal({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="medal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe08f" />
          <stop offset="0.5" stopColor="#e8b84a" />
          <stop offset="1" stopColor="#c38f2c" />
        </linearGradient>
        <clipPath id="medal-ribbon">
          <path d="M7.2 0.6h9.6L13.6 8.4h-3.2z" />
        </clipPath>
      </defs>
      {/* ribbon */}
      <g clipPath="url(#medal-ribbon)">
        <rect x="6" y="0" width="12" height="10" fill="#1f3f63" />
        <rect x="10.15" y="0" width="3.7" height="10" fill="#f2ead8" />
        <rect x="10.6" y="0" width="2.8" height="10" fill="#e8771a" />
      </g>
      {/* disc */}
      <circle cx="12" cy="15.3" r="7.5" fill="#a87420" />
      <circle cx="12" cy="15.3" r="6.7" fill="url(#medal-gold)" />
      <circle cx="12" cy="15.3" r="5.1" fill="none" stroke="#b9862a" strokeWidth="0.55" />
      {/* clasp, over the top of the disc */}
      <rect x="9.6" y="6.9" width="4.8" height="1.8" rx="0.6" fill="#1b2f45" />
      {/* the figure 1, embossed: a light copy offset down-right under the dark one */}
      <path
        d="M15.6 7.2V19h2.1v1.6h-7.4V19h2.2v-8.4l-2.5.9V9.7z"
        fill="#fff3c9"
        transform="translate(12.25 15.55) scale(0.463) translate(-14 -13.9)"
      />
      <path
        d="M15.6 7.2V19h2.1v1.6h-7.4V19h2.2v-8.4l-2.5.9V9.7z"
        fill="#8a5d14"
        transform="translate(12 15.3) scale(0.463) translate(-14 -13.9)"
      />
    </svg>
  );
}
