import Link from "next/link";
import type { Locale } from "../i18n/config";
import { locales } from "../i18n/config";

export function LocaleSwitcher({ current }: { current: Locale }) {
  const labels: Record<Locale, string> = { de: "DE", en: "EN" };
  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          className={`text-xs px-2 py-1 rounded-full border ${
            locale === current
              ? "border-accent text-accent"
              : "border-white/20 text-white/60 hover:text-white"
          }`}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  );
}
