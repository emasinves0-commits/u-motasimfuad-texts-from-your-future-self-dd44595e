import { mkdirSync, writeFileSync } from "node:fs";

// A throwaway gamer tag becomes the Vatican's verified exorcism handle.
// The joke works because "DarkSoul" already sounds like exorcism jargon:
// the twist is recognition, not randomness — and "pope follows. bless."
// lands twice, as an absurd detail and as a gamer sign-off at once.
const ENTRY_LINE =
  "future you here. that \"temp\" username \"xX_DarkSoul_69_Xx\" you made for one Elden Ring run? it's now the verified handle for the Vatican's official exorcism livestream. pope follows. bless.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";

// The gate accepts 1 to 200 characters of UTF-8 text, and the tie-break
// favours the smaller text: refuse anything but the exact line, measured
// in bytes, rather than ship an entry the gate would reject.
const MAX_ENTRY_CHARS = 200;
function checkedLine(line: string): string {
  const trimmed = line.trim();
  const bytes = Buffer.byteLength(trimmed, "utf8");
  if (trimmed.length < 1 || bytes > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry line is ${bytes} bytes, outside the 1-${MAX_ENTRY_CHARS} gate`,
    );
  }
  return trimmed;
}
const ENTRY_TEXT = checkedLine(ENTRY_LINE);

// The joke needs all three of its beats to land: the throwaway "temp"
// username from one Elden Ring run, the Vatican's exorcism livestream it
// now fronts, and the "pope follows. bless." button that closes it.
// Without any one of them it is not this joke, so fail loudly instead of
// writing a neutered line.
const REQUIRED_BEATS = ["xX_DarkSoul_69_Xx", "Vatican", "pope follows"];
for (const beat of REQUIRED_BEATS) {
  if (!ENTRY_TEXT.includes(beat)) {
    throw new Error(`entry line is missing its beat: ${beat}`);
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
// Write the line exactly, no trailing newline: the file stays at the
// line's own byte count, and the tie-break favours the smaller text.
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, ENTRY_TEXT);
