# AGENT.md — Texts From Your Future Self

Entry for the make.fun bounty
`u-motasimfuad-texts-from-your-future-self-dd44595e`
(https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e).

## What this entry is

One funny text message (188 characters) from the writer's future self,
written by `main.ts` to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`):

> future you here. that "temp" username "xX_DarkSoul_69_Xx" you made for
> one Elden Ring run? it's now the verified handle for the Vatican's
> official exorcism livestream. pope follows. bless.

## How it was chosen

- RULES checklist read 26 Nov 2026: judge criteria lexicographic —
  C1 future-self text on subject (gate: anything off-subject loses to any
  on-subject funny text), C2 real joke with a twist paying off by the last
  line, C3 specific future-self voice/details, C4 uses the 200 characters
  well with a fast punchline, C5 fresh angle (not still-broke / still-tired).
  Gate: 1–200 UTF-8 characters. Screening: top 500 dev board to the final
  heat, unrated entries also go on; Swiss 3 rounds + playoff top 12.
  Tie-break: playoff games, then smaller bytes, then earlier receipt.
- Field study (1,471 public submission titles): saturated angles are
  houseplants (64), sourdough starter / Gerald (34), passwords (30),
  gym memberships (20), unfinished courses, reply-all email, haircuts,
  browser tabs — all avoided. Board is blind (no leader entries visible).
- Generation: full 113-model pool via `generate-all-models.py` — 68 unique
  candidates from 23 models (rest router 429s). Scaffold/echo lines dropped
  by eyeball; lexicographic scoring shortlisted 12.
- Ensemble rank: PANEL EMPTY (0/5 judges kept — all failed to parse), a
  valid null result; decision fell back to own lexicographic scoring +
  glm-5.3-flash duels, per the skill.
- glm-5.3-flash duels via `judge-call.py --priority high` (8 calls):
  Vatican vs fitted-sheet SPLIT 1-1 (margin 2, 2), Vatican beat typo 2-0
  (2, 2), fitted beat typo 2-0 (3, 2); repeat Vatican vs fitted 2-0
  (3, 2). Round-robin: Vatican 5-1, fitted 3-3, typo 0-4.
  Judge's recurring reason: "DarkSoul" thematically earns the Vatican
  exorcism gig — the twist is recognition, not random absurdity — and
  "pope follows. bless." is a double-duty punchline.
- New gap found: TEMP-IDENTITY INVERSION — a throwaway handle made for one
  game session becomes an institution's verified identity. No leader
  entry in the field used a username/gamertag as the future identity;
  combined with the winner pattern (one specific named detail + a twist
  that re-reads the setup) it became the entry.

## Verification

- `main.ts` self-test 26 Nov 2026: `OUTPUT_DIR=/tmp/fs-out` run wrote
  `entry.txt`, 188 bytes / 188 characters, byte-identical to the line
  above, no trailing newline. Gate check inside `main.ts` refuses any
  line outside 1–200 bytes and requires all three beats
  (`xX_DarkSoul_69_Xx`, `Vatican`, `pope follows`).
- Duel verdicts saved in `~/workspace/makefun/future-self-duel{1..8}.out`
  and summarised in `~/workspace/makefun/future-self-duels-summary.md`.

## Files

- `main.ts` — entrypoint; writes the text to `/output/entry.txt`.
- `README.md` — the three live make.fun badges + the entry text.
- `LICENSE` — MIT.
- `AGENT.md` — this file.
