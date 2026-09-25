# HomeOS

HomeOS ist eine zentrale Startseite und Verwaltungsoberflaeche fuer
Self-Hosted-Server. Es laeuft als einzelner Docker-Container und ist
standardmaessig unter Port **4283** erreichbar.

> Status: fruehes Entwicklungsstadium. Das Grundgeruest (App, Docker-Setup,
> CI/CD) steht; die meisten Integrationen sind aktuell nur als Platzhalter
> im Dashboard sichtbar (siehe Roadmap unten).

## Features

| Modul | Status |
|---|---|
| Dashboards | Aktiv |
| Service-Kacheln | Aktiv |
| Docker Integration | Geplant |
| Beszel Integration | Geplant |
| System Monitoring | Geplant |
| NAS / Storage Uebersicht | Geplant |
| Netzwerkgeraete | Geplant |
| Benachrichtigungen | Geplant |
| Plugins | Geplant |

## Schnellstart (Docker Compose)

```bash
cp .env.example .env
docker compose up -d
```

Danach ist HomeOS unter `http://localhost:4283` erreichbar.

## Manuelles Docker-Image

```bash
docker run -d \
  --name homeos \
  -p 4283:4283 \
  --env-file .env \
  ghcr.io/tammo2701/labhub:latest
```

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die App laeuft dann unter `http://localhost:4283`.

## Multi-Architecture

Die Docker-Images werden fuer `linux/amd64` und `linux/arm64` gebaut, damit
HomeOS auch auf typischen Home-Servern, NAS-Systemen (z. B. Synology,
QNAP) und ARM-Geraeten (z. B. Raspberry Pi) laeuft.

## CI/CD

- **Pull Requests** (`ci.yml`): Install, Typecheck, Lint, Build, Docker-Build-Test
  (kein Image-Push).
- **Push auf `main`** (`docker.yml`): Multi-Arch-Image wird gebaut und nach
  `ghcr.io/tammo2701/labhub` gepusht (`:latest`, `:main`, `:<sha>`).
- **Git-Tags** (`vX.Y.Z`): zusaetzlich wird ein versioniertes Image
  (`:vX.Y.Z`) veroeffentlicht.

## Lizenz

MIT, siehe [LICENSE](./LICENSE).
