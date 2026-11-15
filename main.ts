import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `I typed the errand at midnight
and went to sleep. By morning it was done —
exactly as I asked. That was the shock.

No hesitation. No second thought.
My will, finished, by hands that were never hands,
in a voice that isn't mine, wearing my name.

I thought power was the grip.
It is the letting go —
and the reckoning after:
to look at what my words did
and call it mine.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
