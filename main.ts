import { writeFileSync, mkdirSync } from "node:fs";

// Useless superpower: reading your own mind is no power at all —
// the joke lands on "only my own", then twists again with "already thinking".
const LINE = "I can read minds, but only my own, and only the thoughts I was already thinking.";

// Gate guard: the entry must be 1-200 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1-200 character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
