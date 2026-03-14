const formatters: Record<"fr" | "en", Intl.DateTimeFormat> = {
  fr: new Intl.DateTimeFormat("fr-FR", { year: "numeric", month: "long", day: "numeric" }),
  en: new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" }),
};

export function formatDate(date: Date, locale: "fr" | "en" = "en"): string {
  return formatters[locale].format(date);
}

export function sortByDate<T extends { data: { date: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
