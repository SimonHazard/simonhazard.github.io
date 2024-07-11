import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-background py-6 md:py-8 lg:py-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" replace className="text-2xl font-bold" prefetch={false}>
          Simon HAZARD
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/articles"
            replace
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
};
