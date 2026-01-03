import PixelRearrange from "./wip";
import Image from "next/image";
import Logo from "@/public/logo.svg";

import { Shader } from "./shader";
import { CopyEmail } from "./copy-email";

export default function Home() {
  return (
    <main className="bg-[#222]">
      {/* Hero Section with Shader */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="z-50 absolute top-6 left-6 flex gap-6 animate-blur-in-delay-1">
          <h1 className="sr-only">Work In Progress</h1>
          <PixelRearrange />
        </div>

        <div className="z-50 absolute top-6 right-6 flex gap-6 animate-blur-in-delay-2">
          <Image src={Logo} height={36} alt="WIP LOGO 2"></Image>
        </div>

        <CopyEmail />

        <h2 className="z-50 absolute font-thin text-sm bottom-5 right-6 text-neutral-500 animate-blur-in-delay-3">
          © 2026 / Work In Progress LLC
        </h2>

        <Shader
          className="absolute w-full h-full top-0 right-0 z-10 animate-blur-in"
          colorBack="#222"
          colorFront="#f5f5f5"
          speed={0.2}
        />
      </section>
    </main>
  );
}
