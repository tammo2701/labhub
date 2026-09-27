# HomeOS

HomeOS is a central homepage and management dashboard for self-hosted
servers. It runs as a single Docker container and is reachable on
port **4283** by default.

> Status: early development. The scaffold (app, Docker setup, CI/CD,
> i18n) is in place; most integrations are currently only placeholders
> in the dashboard (see roadmap below).

## Languages

The UI is available in German (`/de`) and English (`/en`), with more
locales easy to add (see `src/dictionaries/`). The default locale is
detected from the browser's `Accept-Language` header, falling back to
German.

## Features

| Module | Status |
|---|---|
| Dashboards | Live |
| Service Tiles | Live |
| Docker Integration | Planned |
| Beszel Integration | Planned |
| System Monitoring | Planned |
| NAS / Storage overview | Planned |
| Network devices | Planned |
| Notifications | Planned |
| Plugins | Planned |

## Quick start (Docker Compose)

```bash
cp .env.example .env
docker compose up -d
```

HomeOS will then be available at `http://localhost:4283`.

## Manual Docker image

```bash
docker run -d \
  --name homeos \
  -p 4283:4283 \
  --env-file .env \
  ghcr.io/tammo2701/labhub:latest
```

## Local development

```bash
npm install
npm run dev
```

The app then runs at `http://localhost:4283`.

## Multi-architecture

Docker images are built for `linux/amd64` and `linux/arm64`, so HomeOS
also runs on typical home servers, NAS systems (e.g. Synology, QNAP)
and ARM devices (e.g. Raspberry Pi).

## CI/CD

- **Pull requests** (`ci.yml`): install, typecheck, lint, build,
  Docker build test (no image push).
- **Push to `main`** (`docker.yml`): a multi-arch image is built and
  pushed to `ghcr.io/tammo2701/labhub` (`:latest`, `:main`, `:<sha>`).
- **Git tags** (`vX.Y.Z`): additionally publishes a versioned image
  (`:vX.Y.Z`).

## License

MIT, see [LICENSE](./LICENSE).
