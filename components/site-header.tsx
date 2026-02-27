import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import PixelRearrange from "@/app/wip";
import { BRAND_NAME } from "@/app/constants";

interface SiteHeaderProps {
  homeHref?: string;
}

export function SiteHeader({ homeHref = "/" }: SiteHeaderProps) {
  return (
    <>
      <div className="fixed top-6 left-6 z-50 hidden sm:block">
        <Link href={homeHref} className="animate-blur-in-delay-1">
          <h1 className="sr-only">{BRAND_NAME}</h1>
          <PixelRearrange />
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50 sm:hidden">
        <Link href={homeHref} className="animate-blur-in-delay-2">
          <Image
            src={Logo}
            height={24}
            alt="WIP Logo"
            className="h-6 w-auto invert dark:invert-0"
          />
        </Link>
      </div>
    </>
  );
}
