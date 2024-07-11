import Image from "next/image";
import Projects from "@/components/projects";
import LatestArticles from "@/components/latestArticles";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="bg-background py-12 md:py-16 lg:py-20 flex-grow">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to my Portfolio
              </h1>
              <p className="text-muted-foreground text-md md:text-lg lg:text-xl">
                Front-end developer
              </p>
            </div>
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
              Developer based in Le Havre. I develop mainly in NodeJS ecosystem
              with TypeScript and I enjoy discovering new things. Discover my
              latest projects.
            </p>
            <div className="flex gap-4">
              <a
                href="/static/resume.pdf"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              className="mb-2 max-w-full rounded-full shadow-md"
              width={250}
              height={250}
              src="/static/image.jpg"
              alt="Picture of me"
              unoptimized
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-16 lg:py-20 flex-grow">
        <div className="container mx-auto">
          <div className="space-y-4 md:space-y-6 lg:space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Latest Articles
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
              Read my latest thoughts and insights.
            </p>
          </div>
          <LatestArticles />
        </div>
      </section>
      <section className="bg-background py-12 md:py-16 lg:py-20 flex-grow">
        <div className="container mx-auto">
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Projects
            </h1>
            <Projects />
          </div>
        </div>
      </section>
    </main>
  );
}
