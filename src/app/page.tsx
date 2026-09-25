import { ModuleCard } from "../components/ModuleCard";

const modules = [
  { title: "Dashboards", description: "Mehrere frei konfigurierbare Ansichten fuer deine Server.", status: "live" as const },
  { title: "Service-Kacheln", description: "Schnellzugriff auf alle deine selbst gehosteten Dienste.", status: "live" as const },
  { title: "Docker Integration", description: "Container-Uebersicht und Steuerung ueber die Docker-API.", status: "planned" as const },
  { title: "Beszel Integration", description: "System-Metriken direkt aus Beszel einbinden.", status: "planned" as const },
  { title: "System Monitoring", description: "CPU, RAM, Disk und Netzwerk deiner Hosts im Blick.", status: "planned" as const },
  { title: "NAS / Storage", description: "Speicherplatz und Freigaben deines NAS auf einen Blick.", status: "planned" as const },
  { title: "Netzwerkgeraete", description: "Uebersicht ueber Geraete in deinem Heimnetzwerk.", status: "planned" as const },
  { title: "Benachrichtigungen", description: "Zentrale Alerts fuer alle angebundenen Dienste.", status: "planned" as const },
  { title: "Plugins", description: "Erweiterbar ueber eigene Plugins.", status: "planned" as const },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg px-6 py-10 md:px-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">HomeOS</h1>
        <p className="text-white/60 mt-1">
          Zentrale Startseite und Verwaltungsoberflaeche fuer deinen Self-Hosted-Server.
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m) => (
          <ModuleCard key={m.title} {...m} />
        ))}
      </section>
    </main>
  );
}
