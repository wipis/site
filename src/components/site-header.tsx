import { Link } from "@tanstack/react-router";
import PixelRearrange from "~/components/wip";
import { BRAND_NAME } from "~/lib/constants";

interface SiteHeaderProps {
  homeHref?: string;
}

export function SiteHeader({ homeHref = "/" }: SiteHeaderProps) {
  return (
    <>
      <div className="fixed top-6 left-6 z-50 hidden sm:block">
        <Link to={homeHref} className="animate-blur-in-delay-1">
          <h1 className="sr-only">{BRAND_NAME}</h1>
          <PixelRearrange />
        </Link>
      </div>

      <div className="fixed top-6 right-6 z-50 sm:hidden">
        <Link to={homeHref} className="animate-blur-in-delay-1">
          <img
            src="/logo.svg"
            height={24}
            alt="WIP Logo"
            className="h-6 w-auto invert dark:invert-0"
          />
        </Link>
      </div>
    </>
  );
}
