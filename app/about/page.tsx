import PixelRearrange from "./wip";

const Projects = [
  {
    name: "Vercel",
    href: "https://vercel.com",
  },
  {
    name: "Browserbase",
    href: "https://browserbase.com",
  },
  {
    name: "Julius",
    href: "https://julius.ai",
  },
  {
    name: "Laravel",
    href: "https://laravel.com",
  },
  {
    name: "Fly Super",
    href: "https://flysuper.com",
  },
  {
    name: "Offer Arc",
    href: "https://offerarc.com",
  },
  {
    name: "9d8",
    href: "https://9d8.dev",
  },
  {
    name: "Alpine Codex",
    href: "https://alpinecodex.com",
  },
  {
    name: "Wrk.so",
    href: "https://wrk.so",
  },
  {
    name: "Router.so",
    href: "https://router.so",
  },
  {
    name: "Wavefinder",
    href: "https://wavefinder.io",
  },
  {
    name: "SwyftFin",
    href: "https://swyftfin.com",
  },
  {
    name: "Ampry",
    href: "https://ampry.com",
  },
  {
    name: "Route",
    href: "https://route.com",
  },
  {
    name: "Zion",
    href: "https://zion.surf",
  },
];

export default function About() {
  return (
    <main className="p-6 grid gap-6 uppercase font-light ">
      <PixelRearrange />
      <div>
        <h1 className="font-normal">Work In Progress / Applied Creative</h1>
        <h2>
          WIP is a design and development company by{" "}
          <a
            href="https://bridger.to"
            className="transition-all hover:text-blue-800 text-blue-600"
          >
            Bridger Tower
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="inline-flex mb-1"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </h2>
      </div>

      <div className="space-y-2 sm:space-y-0">
        <h3 className="mb-3"> &rarr; PROJECTS / PARTNERS / VENTURES</h3>
        <div className="grid sm:max-w-3xl grid-cols-2 sm:grid-cols-3">
          {Projects.map((project) => (
            <OutLink block key={project.name} href={project.href}>
              {project.name}
            </OutLink>
          ))}
          <span className="sm:w-fit group transition-all p-1.5 sm:p-0 border sm:border-0">
            {" "}
            + MORE
          </span>
        </div>
      </div>

      <div>
        <h3 className="mb-3"> &rarr; ABOUT</h3>
        <h3>Made at the crossroads of Design, Engnineering, and Marketing.</h3>
        <br />
        <p className="text-zinc-600">contact me at bt @ wip.ac</p>
        <p className="text-zinc-600">© work in progress llc 2025</p>
      </div>
    </main>
  );
}

const OutLink = ({
  href,
  children,
  block,
}: {
  href: string;
  children: React.ReactNode;
  block?: boolean;
}) => {
  return (
    <a
      href={href}
      className={`sm:w-fit group transition-all hover:text-blue-800 text-blue-600 p-1.5 sm:p-0 border sm:border-0 ${
        block ? "block" : "inline"
      }`}
    >
      <span className="hidden group-hover:inline">{"> "}</span>
      {children}
    </a>
  );
};
