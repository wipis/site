import { createFileRoute } from "@tanstack/react-router";
import { HomeIntro } from "~/components/home/home-intro";
import { StarMarks } from "~/components/home/star-marks";
import { WorkList } from "~/components/home/work-list";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="home-page bg-[--app-bg] min-h-screen text-[--app-fg]">
      <SiteHeader />
      <article className="relative z-40 p-6 pb-24">
        <div className="max-w-xl grid gap-12">
          <HomeIntro />
          <WorkList />
          <StarMarks />
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
