import Link from "next/link";
import Image from "next/image";

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
      <Image
        src="/logo-mark.png"
        alt="Magnolia Advisory Group"
        width={46}
        height={40}
        priority
        className="flex-shrink-0"
      />
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
