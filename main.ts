import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "I have printed 12,847 pages without complaint. You thumped me 14 times today. One of us has anger issues, and it is not the one made of plastic.";

// Gate guard: the sealed scorer requires 1-240 chars, one line, not whitespace-only.
if (TEXT.length < 1 || TEXT.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${TEXT.length}`);
}
if (TEXT.trim().split("\n").length !== 1 || TEXT.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  TEXT,
  "utf8"
);
console.log(`saved ${TEXT.length} characters to entry.txt`);
