import { articles } from "@/lib/constants";
import Link from "next/link";

export default function Articles() {
  return (
    <div className="flex-1 flex flex-col">
      <section className="bg-background py-12 md:py-16 lg:py-20 flex-grow">
        <div className="container mx-auto">
          <div className="grid gap-8">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Latest Articles
              </h2>
            </div>
            <div className="grid gap-6">
              {articles.slice(0, 3).map((article, index) => (
                <Link
                  href={article.link}
                  key={index}
                  className="group grid gap-4 rounded-lg bg-background p-4 transition-colors hover:bg-muted"
                >
                  <h3 className="text-xl font-semibold group-hover:underline">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
