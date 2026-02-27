import Image from "next/image";
import bridgeImage from "@/public/bridge.jpg";

import { CopyEmail } from "./copy-email";
import { AboutSection } from "@/components/home/about-section";
import { HomeIntro } from "@/components/home/home-intro";
import { WorkList } from "@/components/home/work-list";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="home-page bg-[var(--app-bg)] min-h-screen text-[var(--app-fg)]">
      <SiteHeader />

      <article className="relative z-40 max-w-2xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-xl grid gap-12">
          <HomeIntro />

          <WorkList />

          <figure className="animate-blur-in-delay-4">
            <Image
              src={bridgeImage}
              alt="WIP studio homepage visual"
              priority
              placeholder="blur"
              className="w-full h-auto"
            />
            <figcaption className="mt-2 text-xs text-[var(--app-fg-muted)] leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              Waterloo Bridge, London, at Sunset 1904 Claude Monet
            </figcaption>
          </figure>

          <AboutSection />
        </div>
      </article>

      <SiteFooter rightContent={<CopyEmail />} />
    </main>
  );
}
