import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import PixelRearrange from "../wip";
import { BRAND_NAME, CONTACT_EMAIL, COPYRIGHT_NAME } from "../constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — WIP",
  description:
    "WIP is a software design and engineering lab focused on building at the intersection of design, AI, and human-computer interaction.",
};

export default function About() {
  return (
    <main className="about-page bg-[var(--app-bg)] min-h-screen text-[var(--app-fg)]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 bg-[var(--app-bg)]/80 backdrop-blur-sm">
        <Link href="/" className="animate-blur-in-delay-1">
          <h1 className="sr-only">{BRAND_NAME}</h1>
          <PixelRearrange />
        </Link>

        <Link href="/" className="animate-blur-in-delay-2">
          <Image src={Logo} height={40} alt="WIP Logo" />
        </Link>
      </header>

      {/* Content */}
      <article className="max-w-2xl mx-auto px-6 pt-32 pb-24">
        <h2 className="text-3xl font-light mb-12 animate-blur-in-delay-1">
          About
        </h2>

        <div className="space-y-6 text-[var(--app-fg-muted)] leading-relaxed">
          <p className="animate-blur-in-delay-2">
            WIP is a software design and engineering lab focused on building at
            the intersection of design, AI, and human-computer interaction.
          </p>

          <p className="animate-blur-in-delay-3">
            Here&apos;s what we believe: AI is extraordinarily powerful, but
            most AI tools are extraordinarily bad at helping people actually use
            that power. They&apos;re built by engineers who understand the
            technology but not the people using it. And that&apos;s a problem.
          </p>

          <p className="animate-blur-in-delay-4">
            WIP comes from a background in marketing and advertising, which
            means years of understanding what makes people click, what makes
            them frustrated, and what makes them come back. That perspective
            shapes everything we build.
          </p>

          <p className="animate-blur-in-delay-5">
            Our focus is on closing the gap between what AI can do and what
            people need it to do. We design systems that feel simple and
            intuitive on the surface while running sophisticated technology
            underneath. No confusing interfaces. No fighting with prompts. Just
            tools that work the way you think.
          </p>

          <p className="animate-blur-in-delay-6">
            We&apos;re interested in the hard problems: How do you make AI feel
            natural? How do you design interfaces that make complex technology
            accessible? How do you build software that actually solves problems
            instead of creating new ones?
          </p>

          <p className="animate-blur-in-delay-7">
            If you&apos;re working on similar questions,{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[var(--app-fg)] hover:text-neutral-300 transition-colors underline underline-offset-4"
            >
              let&apos;s talk
            </a>
            .
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center p-6">
        <p className="font-thin text-sm text-neutral-500 animate-blur-in-delay-3">
          &copy; {new Date().getFullYear()} /{" "}
          <a
            href="https://bridger.to"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
          >
            {COPYRIGHT_NAME}
          </a>
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="font-thin text-sm text-neutral-500 hover:text-neutral-300 transition-colors animate-blur-in-delay-3"
        >
          {CONTACT_EMAIL}
        </a>
      </footer>
    </main>
  );
}
