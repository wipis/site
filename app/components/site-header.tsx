import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import PixelRearrange from "../wip";
import { BRAND_NAME } from "../constants";

interface SiteHeaderProps {
  homeHref?: string;
}

export function SiteHeader({ homeHref = "/" }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-[var(--app-bg)]/80 backdrop-blur-sm">
      <Link href={homeHref} className="animate-blur-in-delay-1">
        <h1 className="sr-only">{BRAND_NAME}</h1>
        <PixelRearrange />
      </Link>

      <Link href={homeHref} className="animate-blur-in-delay-2">
        <Image src={Logo} height={40} alt="WIP Logo" />
      </Link>
    </header>
  );
}
