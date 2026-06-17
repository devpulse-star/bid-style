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

// 1. ポイントサイト — cursor / pointer click
export function IconPointSite({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      {/* Arrow cursor */}
      <path d="M4 4l7 18 3-7 7-3L4 4z" />
      <path d="M14 14l4 4" />
    </svg>
  );
}

// 2. ASP — link / chain
export function IconASP({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
    </svg>
  );
}

// 3. ヒトリビズ — building / office
export function IconHitoribiz({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
      <rect x="12" y="12" width="3" height="3" />
      <rect x="12" y="16" width="3" height="3" />
    </svg>
  );
}

// 4. FC本部 — clipboard / document send
export function IconFCHonbu({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

// 5. 説明会参加 — calendar check
export function IconSeminar({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="M9 16l2 2 4-4" />
    </svg>
  );
}

// 6. 成果承認 — shield check
export function IconApproval({ size = 24, className = "" }: IconProps) {
  return (
    <svg {...base} width={size} height={size} className={className} stroke="currentColor">
      <path d="M12 3l8 4v5c0 4.5-3.5 8.7-8 10-4.5-1.3-8-5.5-8-10V7l8-4z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
