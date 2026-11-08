type IconProps = { size?: number; strokeWidth?: number };

/** Right-pointing arrow, used for internal links. */
export function ArrowRight({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M4 12h16" />
      <path d="M14 6l6 6-6 6" />
    </svg>
  );
}

/** Diagonal up-right arrow, used for outbound links. */
export function ArrowUpRight({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M6 18L18 6" />
      <path d="M8 6h10v10" />
    </svg>
  );
}
