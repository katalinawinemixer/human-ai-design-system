#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP_PARENT="$(mktemp -d)"
PORT="${PUBLIC_SETUP_PORT:-41731}"
SERVER_PID=""

cleanup() {
  if [[ -n "$SERVER_PID" ]] && kill -0 "$SERVER_PID" 2>/dev/null; then
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
  rm -rf "$TMP_PARENT"
}
trap cleanup EXIT

COPY_ROOT="$TMP_PARENT/human-ai-design-system"

rsync -a \
  --exclude '.git' \
  --exclude 'frontend/node_modules' \
  --exclude 'frontend/dist' \
  --exclude 'frontend/.vite' \
  "$REPO_ROOT/" "$COPY_ROOT/"

cd "$TMP_PARENT"

# Exact public navigation command from README, PUBLIC_QA.md, and the site.
cd human-ai-design-system/frontend
bun install --frozen-lockfile

# Bounded equivalent of the public `bun dev` command so CI can verify the app serves.
bun dev --host 127.0.0.1 --port "$PORT" --strictPort > "$TMP_PARENT/vite.log" 2>&1 &
SERVER_PID="$!"

for _ in {1..30}; do
  if curl -fs "http://127.0.0.1:$PORT/" >/dev/null; then
    break
  fi
  sleep 1
done

curl -fsS "http://127.0.0.1:$PORT/" >/dev/null
kill "$SERVER_PID" 2>/dev/null || true
wait "$SERVER_PID" 2>/dev/null || true
SERVER_PID=""

bun run lint
bun run test
bun run build

echo "Public setup smoke test passed from a clean copied checkout: $COPY_ROOT"
