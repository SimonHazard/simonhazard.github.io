import { type TranslationKey, translations } from "./translations";

export function t(key: TranslationKey): string {
  return translations[key];
}
