import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The cliff kept its own counsel.
Below, the river practised patience,
folding the light into itself, again and again.

I stood an hour at the edge, bargaining
with the wind, the water, my own knees.
Every reason to stay was a small warm room.

Then my feet decided.
Not me — my feet.
One breath, and the edge was behind me.

The fall was gravity's.
But the leaving?
The leaving was mine.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
