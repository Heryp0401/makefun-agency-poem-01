import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The recipe said three cloves of garlic.
I put in five.
Not because I was brave — because the pan
was already hot, and my hand was already moving,
and for once I did not ask it to stop and check.

My grandmother's card, in her handwriting,
says simmer, do not boil.
The pot was boiling.
I watched the surface break and knew:
she is not here to mind the stove.
The stove is mine now.

I tasted it from the wooden spoon —
salt, then smoke, then something green
I could not name. It was wrong
by the book. It was right
in my mouth.

I carried the bowl to the table
with both hands, like something breakable,
like a small animal learning to trust me.
He took one bite and did not speak.
Then he took another.

Nobody asked for the recipe.
There was nothing to write down.
The card stays in the drawer now.
The dish is mine —
not because I made it,
but because I stopped asking a dead woman's handwriting
for permission to feed the living.
`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
