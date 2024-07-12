import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { articles } from "@/lib/constants";

export default function LatestArticles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12 lg:mt-16">
      {articles.slice(0, 3).map((article, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground">{article.description}</p>
          </CardContent>
          <CardFooter>
            <Link
              href={article.link}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary focus:ring-offset-1"
            >
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
