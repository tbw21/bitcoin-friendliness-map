// Gold trophy for the country in first place (the card under the search bar).
// Decorative: the card's text says what it means.
// A gold cup with handles, a 1 on the bowl, on a navy plinth.
export default function Trophy({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="trophy-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbe08f" />
          <stop offset="0.5" stopColor="#e8b84a" />
          <stop offset="1" stopColor="#c38f2c" />
        </linearGradient>
      </defs>
      {/* handles */}
      <path d="M6.2 4.8H4.1a1 1 0 0 0-1 1.1c.3 2.7 1.8 4.4 4.1 4.8" fill="none" stroke="#b9862a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17.8 4.8h2.1a1 1 0 0 1 1 1.1c-.3 2.7-1.8 4.4-4.1 4.8" fill="none" stroke="#b9862a" strokeWidth="1.5" strokeLinecap="round" />
      {/* bowl */}
      <path d="M6 2.6h12v5c0 3.7-2.7 6.6-6 6.6s-6-2.9-6-6.6z" fill="url(#trophy-gold)" />
      <path d="M6 2.6h12v1.3H6z" fill="#fbe08f" />
      {/* stem and foot */}
      <path d="M10.7 14h2.6l.5 3H10.2z" fill="#c38f2c" />
      <rect x="8" y="16.8" width="8" height="1.8" rx="0.5" fill="#d9a93a" />
      {/* plinth */}
      <rect x="6.6" y="18.4" width="10.8" height="3" rx="0.6" fill="#2c5687" />
      {/* the figure 1 on the bowl, embossed */}
      <path
        d="M15.6 7.2V19h2.1v1.6h-7.4V19h2.2v-8.4l-2.5.9V9.7z"
        fill="#fff3c9"
        transform="translate(12.2 8.4) scale(0.39) translate(-14 -13.9)"
      />
      <path
        d="M15.6 7.2V19h2.1v1.6h-7.4V19h2.2v-8.4l-2.5.9V9.7z"
        fill="#8a5d14"
        transform="translate(12 8.2) scale(0.39) translate(-14 -13.9)"
      />
    </svg>
  );
}
