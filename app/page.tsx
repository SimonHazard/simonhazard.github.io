import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col items-center justify-center">
      <main className="flex flex-col gap-8 items-center m-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          simon.hazard
        </h1>
        <section className="flex flex-col gap-8 items-center">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            about
          </h2>
          <p className="leading-7 max-w-2xl text-justify md:text-center">
            Developer specializing in the TypeScript ecosystem, open to working
            with any modern framework or library. Passionate about front-end
            development, I stay curious about new technologies and best
            practices, always striving for clean and high-quality code.
          </p>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Button asChild>
              <a
                href="/static/simon-hazard.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                resume
              </a>
            </Button>
            <Separator orientation="vertical" />
            <a
              href="https://github.com/SimonHazard"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Image
                src="/static/icons/github.svg"
                width={32}
                height={32}
                alt="Github"
              />
            </a>
          </div>
        </section>
        <Separator />
        <section className="flex flex-col gap-8 items-center">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            projects
          </h2>
          <div>
            <Card className="w-[400px]">
              <CardHeader>
                <CardTitle>MemeOver</CardTitle>
                <CardDescription>
                  An overlay application that lets friends send memes to each
                  other in real time from a Discord text channel.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 justify-center">
                  <Image
                    src="/static/icons/go.svg"
                    width={48}
                    height={48}
                    alt="Go"
                  />
                  <Image
                    src="/static/icons/vite.svg"
                    width={48}
                    height={48}
                    alt="Vite"
                  />
                  <Image
                    src="/static/icons/tauri.svg"
                    width={48}
                    height={48}
                    alt="Tauri"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a
                    href="https://github.com/SimonHazard/MemeOver"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    open
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <Separator />
        <section className="flex flex-col gap-8 items-center">
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            articles
          </h2>
          <div className="flex flex-col gap-4">
            <Link href={"articles/tauri"}>
              <Button variant="outline" className="w-full">
                feedback tauri
              </Button>
            </Link>
            <Link href={"articles/webpack-to-vite"}>
              <Button variant="outline" className="w-full">
                feedback webpack to vite
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
