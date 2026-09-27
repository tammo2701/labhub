import "server-only";
import type { Locale } from "./config";

const dictionaries = {
  de: () => import("../dictionaries/de.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
};

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["de"]>>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.de;
  return loader();
}
