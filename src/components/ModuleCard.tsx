type Status = "live" | "planned";

export function ModuleCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: Status;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-panel p-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "live"
              ? "bg-emerald-500/20 text-emerald-300"
              : "bg-white/10 text-white/60"
          }`}
        >
          {status === "live" ? "Aktiv" : "Geplant"}
        </span>
      </div>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  );
}
