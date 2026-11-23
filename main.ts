// "Stage Fright in Reverse" — a one-line roast for make.fun bounty
// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610.
//
// The gadget is my laptop, the one I use every day. Its fan is
// silent while I am muted and roars the instant I unmute, as if
// it were waiting for an audience. The joke is the timing, not the
// noise: every laptop fan is loud, but only mine seems to keep a
// calendar of my meetings and perform for them.
//
// The program writes that one line to /output/entry.txt and
// nothing else. Node 22, no dependencies, no network, deterministic.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The roast, exactly as it goes before the judge: 91 Unicode code
// points as written, 92 with the trailing newline the gate counts,
// one line, inside the 1-200 gate.
const ROAST =
  "My laptop fan waits until I unmute to start screaming, like it has stage fright in reverse.";

const GATE_MIN = 1;
const GATE_MAX = 200;

// Count the way the sealed gate counts: Unicode code points, so a
// multi-byte character is one, not its UTF-16 units or its bytes.
function points(text: string): number {
  return [...text].length;
}

// The gate counts the whole file, so the trailing newline is part
// of the entry. Refuse anything outside the gate, or blank, instead
// of writing a file the scorer would mark invalid. One line means
// one line: a line smuggling a second line in through an embedded
// newline is refused too, since the entry must read as a single
// line, not a paragraph wearing a line's clothes.
function buildEntry(line: string): string {
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line, no embedded newline");
  }
  const entry = line + "\n";
  const n = points(entry);
  if (n < GATE_MIN || n > GATE_MAX) {
    throw new Error(
      `entry must be ${GATE_MIN}-${GATE_MAX} code points, got ${n}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return entry;
}

const entry = buildEntry(ROAST);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Prove the bytes on disk are the line that was gated: read them
// back and compare exactly. Any mismatch fails loudly rather than
// shipping a different text to the judge.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry) {
  throw new Error("entry.txt does not match the gated roast");
}
