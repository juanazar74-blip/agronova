export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect width="32" height="32" rx="8" fill={light ? "#ffffff" : "#1f3560"} />
        <path
          d="M9 17.5L14 22L23 11"
          stroke={light ? "#1f3560" : "#ffffff"}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        Avalio
      </span>
    </span>
  );
}
