import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";

import { Shader } from "./shader";
import PixelRearrange from "./wip";

const Ventures = [
  {
    name: "Vercel",
    href: "https://vercel.com",
    description: "Frontend cloud platform",
    category: "Infrastructure",
  },
  {
    name: "Browserbase",
    href: "https://browserbase.com",
    description: "Headless browser infrastructure",
    category: "Infrastructure",
  },
  {
    name: "Julius",
    href: "https://julius.ai",
    description: "AI data analyst",
    category: "AI",
  },
  {
    name: "Laravel",
    href: "https://laravel.com",
    description: "PHP web framework",
    category: "Framework",
  },
  {
    name: "Fly Super",
    href: "https://flysuper.com",
    description: "Private aviation platform",
    category: "Travel",
  },
  {
    name: "Offer Arc",
    href: "https://offerarc.com",
    description: "Real estate offers",
    category: "Real Estate",
  },
  {
    name: "9d8",
    href: "https://9d8.dev",
    description: "Design engineering studio",
    category: "Studio",
  },
  {
    name: "Alpine Codex",
    href: "https://alpinecodex.com",
    description: "Digital product studio",
    category: "Studio",
  },
  {
    name: "Wrk.so",
    href: "https://wrk.so",
    description: "Work management platform",
    category: "SaaS",
  },
  {
    name: "Router.so",
    href: "https://router.so",
    description: "Lead routing system",
    category: "SaaS",
  },
  {
    name: "Wavefinder",
    href: "https://wavefinder.io",
    description: "Surf forecast app",
    category: "Consumer",
  },
  {
    name: "SwyftFin",
    href: "https://swyftfin.com",
    description: "Financial services",
    category: "Fintech",
  },
  {
    name: "Ampry",
    href: "https://ampry.com",
    description: "On-site marketing",
    category: "Marketing",
  },
  {
    name: "Route",
    href: "https://route.com",
    description: "Package tracking & protection",
    category: "E-commerce",
  },
  {
    name: "Zion",
    href: "https://zion.surf",
    description: "Surf community platform",
    category: "Consumer",
  },
];

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
