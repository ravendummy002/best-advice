// The Best Advice I Ever Got — one line of the best advice
// the author ever got. make.fun entry for
// u-pangg7-the-best-advice-i-ever-got-358cefb0.
// Writes the advice, one line, to /output/entry.txt.
//
// The advice is funny because it is a survival rule for modern
// life: never trust a meeting scheduled for Friday, or a
// software update that says it will only take five minutes.
// The author has lived by it, and it has saved them twice —
// once from the meeting, once from the update.

import * as fs from "node:fs";

const advice =
  "The best advice I ever got: never trust a meeting scheduled for Friday, or an update that takes 'five minutes'. I have lived by it. It has saved me twice.";

const CEILING = 200;

function publish(text: string): void {
  if (text.length < 1 || text.length > CEILING) {
    throw new Error(`advice must be 1-${CEILING} characters; got ${text.length}`);
  }
  if (text.trim().length === 0 || text.includes("\n")) {
    throw new Error("advice must be a single non-blank line");
  }
  fs.mkdirSync("/output", { recursive: true });
  fs.writeFileSync("/output/entry.txt", text, "utf8");
}

publish(advice);
console.log(`wrote /output/entry.txt (${advice.length} characters)`);
console.log(advice);
