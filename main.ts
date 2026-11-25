// One-Liner Marathon — writes a single one-line comedy joke to /output/entry.txt.
// Plain Node 22 TypeScript, no dependencies, no network. Deterministic output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my smart speaker for something relaxing, so it started reading my search history in a spa voice.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");
