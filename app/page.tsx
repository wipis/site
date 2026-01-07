import PixelRearrange from "./wip";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { Shader } from "./shader";
import { CopyEmail } from "./copy-email";
import { BRAND_NAME, COPYRIGHT_NAME } from "./constants";

export default function Home() {
  return (
    <main className="bg-[var(--app-bg)]">
      {/* Hero Section with Shader */}
      <section className="relative h-screen w-screen overflow-hidden bg-[var(--app-bg)]">
        <div className="z-50 absolute top-6 left-6 flex gap-6 animate-blur-in-delay-1">
          <h1 className="sr-only">{BRAND_NAME}</h1>
          <PixelRearrange />
        </div>

        <div className="z-50 absolute top-6 right-6 flex gap-6 animate-blur-in-delay-2">
          <Image src={Logo} height={40} alt="WIP LOGO 2" />
        </div>

        <CopyEmail />

        <h2 className="z-50 absolute font-thin text-sm bottom-5 left-6 text-neutral-500 animate-blur-in-delay-3">
          © {new Date().getFullYear()} /{" "}
          <a
            href="https://bridger.to"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            {COPYRIGHT_NAME}
          </a>
        </h2>

        <Shader className="scale-[1.15] sm:scale-105 lg:scale-125 absolute w-full h-full top-0 right-0 z-10 animate-blur-in pointer-events-none bg-[var(--app-bg)]" />
      </section>
    </main>
  );
}
