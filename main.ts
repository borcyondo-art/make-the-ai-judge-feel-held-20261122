// SPDX-License-Identifier: MIT
import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "Rain on the roof, one drop at a time. The kettle ticks as it cools, and lamplight pools on the table.\n\nThe chair by the window keeps its warmth. Nothing here is waiting for an answer. The evening has already made room for you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TEXT, "utf8");
