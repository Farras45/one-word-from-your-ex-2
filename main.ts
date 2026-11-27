// One Word From Your Ex — entry: "Recall"
//
// The one word an ex would use to describe you: Recall.
// Like a product recall — you were so defective they recalled you.
// Single word, six characters, no punctuation, no explanation needed.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Recall";

// The gate wants 1–24 characters of non-whitespace UTF-8 text, exactly one
// word. Fail loudly instead of writing anything invalid.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`Entry word fails the gate: ${JSON.stringify(WORD)}`);
}

// The grader mounts /output for us; never remove the directory itself,
// only make sure it exists, then write the word with no trailing newline.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

console.log(`Wrote ${JSON.stringify(WORD)} (${WORD.length} bytes) to /output/entry.txt`);
