import Image from "next/image";
import Logo from "@/public/logo.svg";
import Icon from "@/public/icon.svg";

import { Shader } from "./shader";
import PixelRearrange from "./wip";

const Ventures = [
  { name: "Vercel", href: "https://vercel.com", description: "Frontend cloud platform", category: "Infrastructure" },
  { name: "Browserbase", href: "https://browserbase.com", description: "Headless browser infrastructure", category: "Infrastructure" },
  { name: "Julius", href: "https://julius.ai", description: "AI data analyst", category: "AI" },
  { name: "Laravel", href: "https://laravel.com", description: "PHP web framework", category: "Framework" },
  { name: "Fly Super", href: "https://flysuper.com", description: "Private aviation platform", category: "Travel" },
  { name: "Offer Arc", href: "https://offerarc.com", description: "Real estate offers", category: "Real Estate" },
  { name: "9d8", href: "https://9d8.dev", description: "Design engineering studio", category: "Studio" },
  { name: "Alpine Codex", href: "https://alpinecodex.com", description: "Digital product studio", category: "Studio" },
  { name: "Wrk.so", href: "https://wrk.so", description: "Work management platform", category: "SaaS" },
  { name: "Router.so", href: "https://router.so", description: "Lead routing system", category: "SaaS" },
  { name: "Wavefinder", href: "https://wavefinder.io", description: "Surf forecast app", category: "Consumer" },
  { name: "SwyftFin", href: "https://swyftfin.com", description: "Financial services", category: "Fintech" },
  { name: "Ampry", href: "https://ampry.com", description: "On-site marketing", category: "Marketing" },
  { name: "Route", href: "https://route.com", description: "Package tracking & protection", category: "E-commerce" },
  { name: "Zion", href: "https://zion.surf", description: "Surf community platform", category: "Consumer" },
];

export default function Home() {
  return (
    <main className="bg-[#222]">
      {/* Hero Section with Shader */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="z-50 absolute top-6 left-6 flex gap-6">
          <Image src={Icon} height={48} alt="WIP ICON"></Image>
          <Image src={Logo} height={36} alt="WIP LOGO"></Image>
        </div>
        <div className="z-50 absolute bottom-6 right-6 text-white">
          <a href="#about">scroll &darr;</a>
        </div>
        <Shader
          className="absolute w-full h-full top-0 right-0 z-10"
          colorBack="#222"
          colorFront="#f5f5f5"
          speed={0.2}
        />
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          {/* Header Grid */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 mb-20 sm:mb-32">
            <div className="col-span-6 sm:col-span-3">
              <PixelRearrange />
            </div>
            <div className="col-span-6 sm:col-span-3 sm:col-start-10">
              <span className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase">Index 001</span>
            </div>
          </div>

          {/* Title Grid */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-4 mb-20 sm:mb-32">
            <div className="col-span-12 sm:col-span-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1]">
                WIP Labs
              </h1>
            </div>
            <div className="col-span-12 sm:col-span-4 sm:flex sm:items-end">
              <p className="text-neutral-400 text-[10px] tracking-[0.2em] uppercase">Applied Creative</p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 mb-20 sm:mb-32">
            <div className="col-span-12 sm:col-span-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">About</p>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <p className="text-lg sm:text-xl text-neutral-900 leading-relaxed font-normal">
                Design and development studio by{" "}
                <a href="https://bridger.to" className="underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors">
                  Bridger Tower
                </a>
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">Services</p>
              <p className="text-sm text-neutral-900">Design</p>
              <p className="text-sm text-neutral-900">Engineering</p>
              <p className="text-sm text-neutral-900">Marketing</p>
            </div>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 mb-20 sm:mb-32 pb-20 sm:pb-32 border-b border-neutral-200">
            <div className="col-span-12 sm:col-span-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">Contact</p>
            </div>
            <div className="col-span-12 sm:col-span-6">
              <a href="mailto:bt@wip.ac" className="text-lg sm:text-xl text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors">
                bt@wip.ac
              </a>
            </div>
          </div>

          {/* Ventures Header */}
          <div className="grid grid-cols-12 gap-x-4 gap-y-4 mb-8">
            <div className="col-span-12 sm:col-span-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Ventures</p>
            </div>
            <div className="col-span-6 sm:col-span-5">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Name</p>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Category</p>
            </div>
            <div className="hidden sm:block sm:col-span-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 text-right">No.</p>
            </div>
          </div>

          {/* Ventures List */}
          <div className="mb-20 sm:mb-32">
            {Ventures.map((venture, i) => (
              <a
                key={venture.name}
                href={venture.href}
                className="grid grid-cols-12 gap-x-4 py-4 border-t border-neutral-200 group hover:bg-neutral-50 transition-colors -mx-4 px-4"
              >
                <div className="col-span-12 sm:col-span-2">
                  <p className="text-xs text-neutral-400 sm:hidden">{venture.category}</p>
                </div>
                <div className="col-span-8 sm:col-span-5">
                  <p className="text-base text-neutral-900 group-hover:text-neutral-600 transition-colors">{venture.name}</p>
                  <p className="text-sm text-neutral-400 mt-0.5">{venture.description}</p>
                </div>
                <div className="hidden sm:block sm:col-span-3">
                  <p className="text-sm text-neutral-400">{venture.category}</p>
                </div>
                <div className="col-span-4 sm:col-span-2 text-right">
                  <span className="text-xs text-neutral-300 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </a>
            ))}
            <div className="border-t border-neutral-200"></div>
          </div>

          {/* Footer */}
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">© 2025 Work In Progress LLC</span>
            </div>
            <div className="col-span-6 text-right">
              <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 hover:text-neutral-900 transition-colors">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
