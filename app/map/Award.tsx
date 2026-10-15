// Award for the country in first place (the card under the search bar): a gold star on a small
// plinth inside a laurel wreath. Decorative: the card's text says what it means.
// Leaf positions come from a small script (two branches of five leaves along a circle, mirrored);
// adjust there rather than by hand if the wreath changes.
export default function Award({ className = "h-6 w-8" }: { className?: string }) {
  return (
    // The view box is cropped to the drawing (it is wider than tall), so the element's height is the
    // drawing's height: that is what the card lines its text up against.
    <svg className={className} viewBox="0.2 3.4 23.6 16.7" aria-hidden="true">
      <defs>
        <linearGradient id="award-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff1c1" />
          <stop offset="0.45" stopColor="#f0c45c" />
          <stop offset="1" stopColor="#a8721c" />
        </linearGradient>
      </defs>
      {/* laurel wreath */}
      <path d="M9.83,19.31 L8.59,18.88 L7.45,18.26 L6.41,17.47 L5.5,16.52 L4.76,15.45 L4.18,14.28 L3.8,13.03 L3.62,11.74 L3.64,10.43 L3.86,9.14 L4.27,7.91 L4.88,6.75" fill="none" stroke="#c99a35" strokeWidth="0.9" strokeLinecap="round" />
      <ellipse cx="5.31" cy="18.11" rx="1.75" ry="0.78" transform="rotate(169.35 5.31 18.11)" fill="url(#award-gold)" />
      <ellipse cx="3.13" cy="15.08" rx="1.84" ry="0.82" transform="rotate(-168.65 3.13 15.08)" fill="url(#award-gold)" />
      <ellipse cx="5.03" cy="14.19" rx="1.35" ry="0.62" transform="rotate(-75.81 5.03 14.19)" fill="url(#award-gold)" />
      <ellipse cx="2.32" cy="11.47" rx="1.84" ry="0.82" transform="rotate(-146.65 2.32 11.47)" fill="url(#award-gold)" />
      <ellipse cx="2.97" cy="7.89" rx="1.75" ry="0.78" transform="rotate(-124.65 2.97 7.89)" fill="url(#award-gold)" />
      <ellipse cx="4.91" cy="8.51" rx="1.35" ry="0.62" transform="rotate(-31.81 4.91 8.51)" fill="url(#award-gold)" />
      <ellipse cx="4.7" cy="5.23" rx="1.49" ry="0.66" transform="rotate(-104.65 4.7 5.23)" fill="url(#award-gold)" />
      <path d="M14.17,19.31 L15.41,18.88 L16.55,18.26 L17.59,17.47 L18.5,16.52 L19.24,15.45 L19.82,14.28 L20.2,13.03 L20.38,11.74 L20.36,10.43 L20.14,9.14 L19.73,7.91 L19.12,6.75" fill="none" stroke="#c99a35" strokeWidth="0.9" strokeLinecap="round" />
      <ellipse cx="18.69" cy="18.11" rx="1.75" ry="0.78" transform="rotate(10.65 18.69 18.11)" fill="url(#award-gold)" />
      <ellipse cx="20.87" cy="15.08" rx="1.84" ry="0.82" transform="rotate(348.65 20.87 15.08)" fill="url(#award-gold)" />
      <ellipse cx="18.97" cy="14.19" rx="1.35" ry="0.62" transform="rotate(255.81 18.97 14.19)" fill="url(#award-gold)" />
      <ellipse cx="21.68" cy="11.47" rx="1.84" ry="0.82" transform="rotate(326.65 21.68 11.47)" fill="url(#award-gold)" />
      <ellipse cx="21.03" cy="7.89" rx="1.75" ry="0.78" transform="rotate(304.65 21.03 7.89)" fill="url(#award-gold)" />
      <ellipse cx="19.09" cy="8.51" rx="1.35" ry="0.62" transform="rotate(211.81 19.09 8.51)" fill="url(#award-gold)" />
      <ellipse cx="19.3" cy="5.23" rx="1.49" ry="0.66" transform="rotate(284.65 19.3 5.23)" fill="url(#award-gold)" />
      {/* star, stem and plinth */}
      <polygon points="12,3.5 13.23,6.7 16.66,6.89 14,9.05 14.88,12.36 12,10.5 9.12,12.36 10,9.05 7.34,6.89 10.77,6.7" fill="url(#award-gold)" stroke="#b9852a" strokeWidth="0.6" strokeLinejoin="round" />
      <rect x="11.35" y="12.4" width="1.3" height="3.4" fill="#c38f2c" />
      <rect x="8.9" y="15.6" width="6.2" height="4.4" rx="0.8" fill="url(#award-gold)" stroke="#b9852a" strokeWidth="0.5" />
      <rect x="10.5" y="17.35" width="3" height="0.9" rx="0.45" fill="#7a5410" />
    </svg>
  );
}
