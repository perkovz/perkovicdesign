export function LeafIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 24C4 12 12 4 24 4C24 16 16 24 4 24Z" stroke="#4F6B55" strokeWidth="1.5" />
      <path d="M4 24L18 10" stroke="#4F6B55" strokeWidth="1.5" />
    </svg>
  );
}

export function Ripple({ color }: { color: string }) {
  return (
    <svg className="ripple" width="200" height="200" viewBox="0 0 200 200" fill="none" aria-hidden="true" focusable="false">
      {[30, 50, 70, 90].map((r) => (
        <circle key={r} cx="100" cy="100" r={r} stroke={color} />
      ))}
    </svg>
  );
}

export const PRINCIPLE_ICONS = [
  <svg key="0" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" focusable="false">
    <path d="M6 38C6 18 18 6 38 6C38 26 26 38 6 38Z" stroke="#4F6B55" strokeWidth="1.5" />
    <path d="M6 38L30 14M16 28L16 20M22 22L22 14M16 28L24 28M22 22L30 22" stroke="#4F6B55" strokeWidth="1.2" />
  </svg>,
  <svg key="1" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" focusable="false">
    <circle cx="22" cy="22" r="6" stroke="#5F8BA6" strokeWidth="1.5" />
    <circle cx="22" cy="22" r="12" stroke="#5F8BA6" strokeWidth="1.2" />
    <circle cx="22" cy="22" r="18" stroke="#5F8BA6" strokeWidth="1" />
  </svg>,
  <svg key="2" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" focusable="false">
    <path d="M4 30C10 22 16 22 22 30C28 38 34 38 40 30" stroke="#D9A48F" strokeWidth="1.5" />
    <path d="M4 20C10 12 16 12 22 20C28 28 34 28 40 20" stroke="#D9A48F" strokeWidth="1.2" />
  </svg>,
  <svg key="3" width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true" focusable="false">
    <path d="M22 40V18" stroke="#4F6B55" strokeWidth="1.5" />
    <path d="M22 18C22 10 28 6 36 6C36 14 30 18 22 18Z" stroke="#4F6B55" strokeWidth="1.5" />
    <path d="M22 26C22 18 16 14 8 14C8 22 14 26 22 26Z" stroke="#4F6B55" strokeWidth="1.5" />
  </svg>,
];

export function DemoArtSky() {
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" focusable="false">
      <path d="M20 110 C 120 40, 200 180, 300 110" stroke="#5F8BA6" strokeWidth="2" />
      <path d="M330 110 C 400 60, 450 160, 500 110" stroke="#5F8BA6" strokeWidth="2" strokeDasharray="6 8" />
      <circle cx="20" cy="110" r="8" fill="#5F8BA6" />
      <circle cx="300" cy="110" r="8" fill="#FBF8F2" stroke="#D9A48F" strokeWidth="2" />
      <circle cx="330" cy="110" r="8" fill="#FBF8F2" stroke="#D9A48F" strokeWidth="2" />
      <circle cx="500" cy="110" r="8" fill="#A9BFA3" />
      <circle cx="315" cy="110" r="44" stroke="#D9A48F" strokeWidth="1.5" />
    </svg>
  );
}

export function DemoArtSage() {
  return (
    <svg viewBox="0 0 520 220" fill="none" aria-hidden="true" focusable="false">
      <rect x="30" y="30" width="150" height="70" rx="14" stroke="#4F6B55" strokeWidth="1.5" />
      <rect x="30" y="120" width="150" height="70" rx="14" stroke="#4F6B55" strokeWidth="1.5" />
      <path d="M180 65 C 230 65, 230 110, 260 110 M180 155 C 230 155, 230 110, 260 110" stroke="#4F6B55" strokeWidth="1.5" />
      <circle cx="290" cy="110" r="30" fill="#A9BFA3" />
      <rect x="350" y="70" width="140" height="80" rx="16" stroke="#4F6B55" strokeWidth="1.5" />
      <rect x="366" y="114" width="52" height="22" rx="11" fill="#4F6B55" />
      <rect x="424" y="114" width="52" height="22" rx="11" stroke="#4F6B55" strokeWidth="1.5" />
      <path d="M320 110 H 350" stroke="#4F6B55" strokeWidth="1.5" />
    </svg>
  );
}
