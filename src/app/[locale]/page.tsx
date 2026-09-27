import { ModuleCard } from "../../components/ModuleCard";
import { LocaleSwitcher } from "../../components/LocaleSwitcher";
import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/get-dictionary";

export default async function Home({
  params,
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const moduleKeys = Object.keys(dict.modules) as Array<
    keyof typeof dict.modules
  >;
  const statusByKey: Record<keyof typeof dict.modules, "live" | "planned"> = {
    dashboards: "live",
    tiles: "live",
    docker: "planned",
    beszel: "planned",
    monitoring: "planned",
    nas: "planned",
    network: "planned",
    notifications: "planned",
    plugins: "planned",
  };

  return (
    <main className="min-h-screen bg-bg px-6 py-10 md:px-12">
      <header className="mb-10 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">{dict.home.heading}</h1>
          <p className="text-white/60 mt-1">{dict.home.subheading}</p>
        </div>
        <LocaleSwitcher current={params.locale} />
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {moduleKeys.map((key) => (
          <ModuleCard
            key={key}
            title={dict.modules[key].title}
            description={dict.modules[key].description}
            status={statusByKey[key]}
            statusLabel={dict.status[statusByKey[key]]}
          />
        ))}
      </section>
    </main>
  );
}
