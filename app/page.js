import {
  Laptop,
  Mail,
  Phone,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "MERN Fitness App",
    description:
      "A full-stack fitness app that calculates your calories, stores your data in a database, and displays your live calorie intake through beautiful data visualizations. It also includes session management that lets you sign out from other devices.",
    stack: ["React.js", "Tailwind CSS", "Express.JS", "Mongo DB"],
    year: "2025",
    href: "https://github.com/izhanwk/MERN-Fitness-App",
    live: "https://mern-fitness-app-one.vercel.app/",
  },
  {
    title: "Linkedin Scraper",
    description:
      "A powerful client-finder tool that extracts company emails and websites from LinkedIn.",
    stack: [
      "Next.JS",
      "Puppeteer",
      "Server Sent Events",
      "Tailwind CSS",
      "Mongo DB",
    ],
    year: "2025",
    href: "https://github.com/izhanwk/Client-Finder",
  },
  {
    title: "E-commerce for Pharmacy",
    description:
      "A powerful e-commerce app for a medicine distribution system, featuring both client and admin sides. The admin has full access to all orders placed by clients, and the system also tracks the remaining payments for each client",
    stack: ["React.js", "Express.js", "Tailwind CSS", "Mongo DB"],
    year: "2024",
    href: "https://github.com/izhanwk/online-store-admin",
  },
  {
    title: "Static fitness app",
    description:
      "This was my first proper web app, built using plain HTML, CSS, and JavaScript. It was a simple and user-friendly fitness application",
    stack: ["HTML", "CSS", "Javascript"],
    year: "2024",
    live: "https://izhanwk.github.io/JS-Fitness-App/",
    href: "https://github.com/izhanwk/JS-Fitness-App",
  },
];

const capabilities = [
  {
    title: "Front-end development",
    caption:
      "Complete front-end development, including building user-friendly applications and creating impactful data visualizations",
    items: [
      "React.js",
      "Next.js",
      "React redux",
      "Tailwind",
      "Javascript",
      "Typescript",
    ],
  },
  {
    title: "Backend development",
    caption:
      "Backend development, including building scalable APIs, managing databases, and ensuring secure server-side functionality.",
    items: ["Next JS", "Node JS", "Express JS", "Mongo DB", "My SQL"],
  },
  {
    title: "Web Scraping",
    caption:
      "Stealthy and reliable web scraping using Puppeteer and Puppeteer Extra to bypass detection and extract data efficiently.",
    items: ["Puppeteer", "Pupeeteer extra"],
  },
  {
    title: "Data Structures and Algorithms",
    caption:
      "Strong understanding of Data Structures and Algorithms for writing efficient, optimized, and scalable code.",
    items: ["Hashing", "Arrays", "LinkedLists", "Effecient Algorithms"],
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="pointer-events-none absolute -top-40 right-0 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 blur-3xl" />

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 lg:px-16">
        <header className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:items-start mb-20 sm:mb-32">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wider text-slate-300">
                AVAILABLE FOR PROJECTS
              </span>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-white lg:text-7xl">
                Izhan Waseem
              </h1>
              <p className="text-lg sm:text-xl font-light text-blue-200/80 tracking-wide">
                Full-Stack Developer
              </p>
            </div>

            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300/90">
              I craft seamless digital experiences from front to back.
              Specializing in React, Next.js, and Node.js, I transform complex
              ideas into elegant, scalable web applications that users love.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
              <a
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-sm sm:text-base"
                href="#projects"
              >
                View Projects
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-700 bg-slate-800/50 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 text-sm sm:text-base"
                href="#contact"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative lg:sticky lg:top-20 mt-8 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-4 rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl" />
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="mb-6 sm:mb-8 flex items-center gap-4">
                <div className="rounded-xl bg-blue-500/10 p-3">
                  <Laptop className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Tech Stack
                </p>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm">
                {[
                  {
                    label: "Front End",
                    content:
                      "JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS",
                  },
                  {
                    label: "Backend",
                    content: "Node.js, Express.js, Server Sent Events (SSE)",
                  },
                  {
                    label: "Other",
                    content: "Web Scraping, Data Structures & Algorithms",
                  },
                ].map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                    <span className="flex-1 leading-relaxed text-slate-300">
                      <span className="font-semibold text-white">
                        {item.label}:
                      </span>{" "}
                      {item.content}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        <section
          id="projects"
          className="space-y-10 sm:space-y-12 mb-20 sm:mb-32"
        >
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white lg:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-slate-400">
              A selection of recent work showcasing full-stack development
              expertise
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group relative rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-slate-800/60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-[1px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 opacity-0 blur transition-opacity duration-500 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 group-hover:opacity-100" />

                <div className="relative space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 sm:px-4 py-1 text-xs font-semibold text-blue-300">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={`${project.title}-${tech}`}
                        className="rounded-lg border border-white/10 bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105"
                      >
                        Live Demo
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </a>
                    )}
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-300 transition-all duration-300 hover:gap-3 hover:text-blue-200"
                    >
                      <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      View Code
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="capabilities"
          className="space-y-10 sm:space-y-12 mb-20 sm:mb-32"
        >
          <div className="space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white lg:text-5xl">
              Core Capabilities
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-slate-400">
              Specialized skills that drive exceptional results
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className="group rounded-2xl sm:rounded-3xl border border-white/5 bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-slate-800/60"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-blue-300">
                  {capability.title}
                </h3>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
                  {capability.caption}
                </p>
                <div className="mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                  {capability.items.map((item) => (
                    <span
                      key={`${capability.title}-${item}`}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/10 
  bg-gradient-to-br from-blue-900/20 via-slate-800/40 to-slate-900/40
  p-6 sm:p-10 lg:p-16 backdrop-blur-xl"
        >
          <div
            className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 h-32 sm:h-64 w-32 sm:w-64 rounded-full 
    bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-3xl"
          />

          <div
            className="absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20 h-32 sm:h-64 w-32 sm:w-64 rounded-full 
    bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 blur-3xl"
          />

          <div className="relative space-y-6 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                Let's Connect
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                Get in Touch
              </h2>

              <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300">
                Available for freelance opportunities and collaborations
              </p>
            </div>

            <div className="grid gap-3 sm:gap-6 sm:grid-cols-2 pt-2 sm:pt-6">
              <a
                href="mailto:izhanwaseem6@gmail.com"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 
        bg-white/5 p-3 sm:p-6 backdrop-blur-sm transition-all duration-300 
        hover:border-white/20 hover:bg-white/10"
              >
                <div className="rounded-xl bg-blue-500/10 p-2 sm:p-3 transition-colors group-hover:bg-blue-500/20">
                  <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-slate-400">
                    Email
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-semibold text-white break-all text-xs sm:text-sm lg:text-base">
                    izhanwaseem6@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+923486186394"
                className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-white/10 
        bg-white/5 p-3 sm:p-6 backdrop-blur-sm transition-all duration-300 
        hover:border-white/20 hover:bg-white/10"
              >
                <div className="rounded-xl bg-emerald-500/10 p-2 sm:p-3 transition-colors group-hover:bg-emerald-500/20">
                  <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-emerald-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm font-medium text-slate-400">
                    Phone
                  </p>
                  <p className="mt-0.5 sm:mt-1 font-semibold text-white text-xs sm:text-sm lg:text-base">
                    +92 348 6186394
                  </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-12 sm:mt-20 border-t border-white/5 pt-8 sm:pt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500">
            © 2025 Izhan Waseem. Crafted with precision and passion.
          </p>
        </footer>
      </main>
    </div>
  );
}
