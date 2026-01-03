import PixelRearrange from "./wip";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";

import { Shader } from "./shader";

export default function Home() {
  return (
    <main className="bg-[#222]">
      {/* Hero Section with Shader */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="z-50 absolute top-6 left-6 flex gap-6">
          <h1 className="sr-only">Work In Progress</h1>
          <Image src={Icon} height={48} alt="WIP ICON"></Image>
          <Image src={Logo} height={36} alt="WIP LOGO"></Image>
        </div>

        <h2 className="z-50 absolute font-thin text-sm bottom-5 right-6 text-neutral-500">
          © 2026 / Work In Progress LLC
        </h2>

        <Shader
          className="absolute w-full h-full top-0 right-0 z-10"
          colorBack="#222"
          colorFront="#f5f5f5"
          speed={0.2}
        />
      </section>
    </main>
  );
}
