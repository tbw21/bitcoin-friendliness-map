// Gold medal for the country in first place (the card under the search bar).
// Decorative: the card's text says what it means.
// A two-tone blue ribbon in a V over a bevelled gold disc with an embossed 1.
export default function Medal({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="medal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe08f" />
          <stop offset="0.5" stopColor="#e8b84a" />
          <stop offset="1" stopColor="#c38f2c" />
        </linearGradient>
      </defs>
      {/* ribbon */}
      <path d="M6.4 1h4.3l2.5 7.6-3.7 1.6z" fill="#2c5687" />
      <path d="M17.6 1h-4.3l-2.5 7.6 3.7 1.6z" fill="#3f78b5" />
      <path d="M6.4 1h1.4l2.7 8.3-.9.4z" fill="#24496f" />
      {/* disc */}
      <circle cx="12" cy="15.3" r="7.5" fill="#a87420" />
      <circle cx="12" cy="15.3" r="6.7" fill="url(#medal-gold)" />
      <circle cx="12" cy="15.3" r="5.1" fill="none" stroke="#b9862a" strokeWidth="0.55" />
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
