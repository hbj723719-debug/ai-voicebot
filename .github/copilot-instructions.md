## Quick orientation

This repository is a very small starter for an "ai-voicebot" project (the only present files are `README.md` and a VS Code launch config). The README states the project is a modular Node.js blueprint that integrates nodes, SIP/VoIP, and Facebook. Use this file to quickly orient an AI coding agent about what's known, what to check next, and how to be immediately productive.

## What we *do* know (from the repo)
- `README.md` — project description: "constantly learning AI voicebot activated by nodes, SIP/VoIP, and Facebook using deep-rooted Node.js". Treat that as the high-level intent.
- `.vscode/launch.json` — contains a Chrome launch config pointing at `http://localhost:8080`. This implies a local web/debug surface on port 8080 is expected during development.

## Immediate checks (always do these first)
1. Look for a `package.json` at the workspace root. If present: prefer `npm ci` then `npm run dev` / `npm start` / `npm test` depending on scripts.
2. Look for common service files: `src/`, `services/`, `integrations/`, `config/`, `docker-compose.yml`, `.env` — these will reveal service boundaries and env vars.
3. If there is no `package.json`, do not assume run/build scripts — open `README.md` or any service folders to discover per-service tooling.

## Architecture hints (inferred, verify before changing)
- Ingest boundaries: SIP/VoIP and Facebook (from `README.md`) — treat these as separate adapters/integration modules. Search for files named like `sip*`, `voip*`, `facebook*` when they exist.
- Processing/core: a learning loop / model orchestration layer should be isolated from transport adapters. Favor keeping AI model code separate from protocol adapters.
- Web/debug surface: the presence of the Chrome launch config suggests a local HTTP UI or admin surface expected at `http://localhost:8080` during development. Confirm by finding a web server entrypoint (e.g. `src/server.js`, `app.js`, or `bin/www`).

## Conventions & patterns to follow when editing
- Respect environment-config driven behavior. Look for `.env` or `config/*` and prefer non-hardcoded credentials.
- Keep integrations modular: create an `integrations/` or `adapters/` directory for new protocol code (SIP, Facebook, etc.).
- If adding new runtime or debug entries, also update `.vscode/launch.json` to keep local debug flows working (the existing launch config targets port 8080).

## Integration points & external dependencies (to discover)
- Telephony stacks (Asterisk, FreeSWITCH, or SIP libraries) are likely required for SIP/VoIP integration — search code for `sip`, `drachtio`, `sofia`, `rtp`, or `sip.js`.
- Facebook integration will rely on webhooks / Graph API — search for `facebook`, `webhook`, `graph`, or `FB_APP`-style env vars.
- External AI/model services may be present; search for `openai`, `tensorflow`, `torch`, `ml`, `model`, or `trainer` keywords.

## Safe edit rules for AI agents
- Do not create or commit secrets (API keys, tokens, certificates). If you need credentials to run code, create a `.env.example` and instruct humans to populate real secrets.
- Before running any start/build script, confirm `package.json` and `node` version constraints. If none exist, request guidance.
- Avoid making network calls or sending messages to external systems in CI/automated runs without explicit test stubs or mocks.

## Files to reference when present (examples to search for)
- `package.json` — scripts, dependencies, engines
- `README.md` — high-level intent (already present)
- `.vscode/launch.json` — local debug behavior (already present)
- `src/` or `lib/` — core application code
- `integrations/` or `adapters/` — external protocol glue
- `docker-compose.yml`, `Dockerfile` — local dev infra

## If you add or modify behavior
- Document runtime changes in `README.md` and update `.vscode/launch.json` if the default debug port or start command changes.
- Add or update a top-level `CONTRIBUTING.md` if you introduce new workflows (Docker, background workers, or provisioned services).

## When you need clarification
- If critical files (`package.json`, `src/`, or integration adapters) are missing, ask the repository owner for the canonical project layout and preferred start scripts before implementing major features.

---
## VS Code / environment notes (from supplied defaults)
- The workspace contains a `.vscode/launch.json` that launches Chrome at `http://localhost:8080`. Keep this in sync when adding a frontend/admin surface.
- Default editor settings observed (from supplied defaults): `editor.formatOnSave` is `false`, `editor.tabSize` is `4`. Avoid assuming a formatter or different tab size unless a project `/.editorconfig` or `package.json` scripts specify them.
- The default settings list `GitHub.copilot` and `ms-vscode.js-debug` among folding/formatter providers and debug tooling — these indicate the environment is prepared for Copilot-assisted edits and browser-attached debugging. Do not hard-rely on Codespaces-only features.
- The workspace includes the simple browser capability (`vscode.simple-browser`) — useful for quick previews of the `http://localhost:8080` admin surface without leaving the editor.

Please review this content and tell me if you want more detail about inferred architecture, or if I should merge this guidance and scaffold a minimal `package.json`/starter structure to make the repo runnable.
