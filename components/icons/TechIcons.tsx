import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  className?: string;
};

const base: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 1. click_id管理 — cursor + tag
export function IconClickId({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M4 4l7 18 3-7 7-3L4 4z" />
      <path d="M14 14l4 4" />
    </svg>
  );
}

// 2. S2Sポストバック — server arrows
export function IconPostback({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <rect x="2" y="3" width="8" height="5" rx="1" />
      <rect x="14" y="16" width="8" height="5" rx="1" />
      <path d="M10 5.5h2a2 2 0 012 2v3" />
      <path d="M14 18.5h-2a2 2 0 01-2-2v-3" />
      <path d="M13 8l1.5-1.5L13 5" />
      <path d="M11 16l-1.5 1.5L11 19" />
    </svg>
  );
}

// 3. 重複検出 — copy with x
export function IconDuplicate({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M4 16V4h12" />
      <path d="M14 12l4 4M18 12l-4 4" />
    </svg>
  );
}

// 4. リード管理 — funnel / pipeline
export function IconLead({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M3 4h18l-7 8v7l-4-2v-5L3 4z" />
    </svg>
  );
}

// 5. FC本部送客 — lock + send
export function IconSecureSend({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <rect x="5" y="11" width="10" height="8" rx="1" />
      <path d="M8 11V7a2 2 0 014 0v4" />
      <path d="M17 13l4-1-4-1" />
      <path d="M21 12h-7" />
    </svg>
  );
}

// 6. WordPress構築 — layers / stack
export function IconWordPress({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

// 7. GA4・GTM — bar chart + magnifier
export function IconAnalytics({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M18 20V10M12 20V4M6 20v-6" />
      <circle cx="19.5" cy="19.5" r="2.5" />
    </svg>
  );
}

// 8. 法務対応 — balance / scale
export function IconLegal({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M12 3v18M3 6l4.5 9H3M21 6l-4.5 9H21" />
      <path d="M3 15c0 1.66 2.02 3 4.5 3s4.5-1.34 4.5-3" />
      <path d="M12 15c0 1.66 2.02 3 4.5 3s4.5-1.34 4.5-3" />
      <path d="M7 6h10" />
    </svg>
  );
}

// 9. 拡張設計 — node / graph expand
export function IconExpand({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <circle cx="12" cy="12" r="2" />
      <circle cx="4" cy="6" r="2" />
      <circle cx="20" cy="6" r="2" />
      <circle cx="4" cy="18" r="2" />
      <circle cx="20" cy="18" r="2" />
      <path d="M6 6h4M14 6h4M6 18h4M14 18h4M12 10v4" />
      <path d="M5.4 7.4l5.2 3.2M18.6 7.4l-5.2 3.2M5.4 16.6l5.2-3.2M18.6 16.6l-5.2-3.2" />
    </svg>
  );
}
