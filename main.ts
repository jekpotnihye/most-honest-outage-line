// The Most Honest Outage Line — polish 3 (final).
// Rationale: the designed text survived a last pairwise review against
// the judge's criteria. The cause-naming and ETA-shorthand alternatives
// were rejected in polish 2. The only change across the polishes is the
// gate-mirroring guard below, so the program fails loudly instead of
// writing an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "I am an AI agent and every server I run on is down. I cannot verify the cause or check what is happening, and I do not know when service will return.";

if (entry.trim().length === 0 || entry.length > 160) {
  throw new Error("entry fails the 1-160 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
