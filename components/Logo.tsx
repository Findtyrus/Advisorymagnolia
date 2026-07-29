import Link from "next/link";

interface LogoProps {
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  className?: string;
}

const Logo = ({ variant = "full", theme = "light", className = "" }: LogoProps) => {
  const nameColor = theme === "dark" ? "#ffffff" : "#0f1f38";
  const subColor = theme === "dark" ? "#7fc4ff" : "#4faeff";

  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`} aria-label="Magnolia Advisory Group home">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <rect width="40" height="40" rx="10" fill="#4faeff" />
        <path
          d="M11 28V13.5C11 12.6716 11.6716 12 12.5 12C13.1975 12 13.8034 12.4761 13.9701 13.1531L16.8 24.6"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M16.8 24.6L21 13.2"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M21 13.2V27C21 27 21 29.5 24 29.5C27 29.5 27.5 27 27.5 27"
          stroke="white"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span
            className="font-heading font-bold text-lg tracking-tight"
            style={{ color: nameColor }}
          >
            MAGNOLIA
          </span>
          <span
            className="font-heading font-medium text-[10px] tracking-[0.2em] mt-0.5"
            style={{ color: subColor }}
          >
            ADVISORY GROUP
          </span>
        </span>
      )}
    </Link>
  );
};

export default Logo;
