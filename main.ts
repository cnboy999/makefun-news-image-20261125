// News image for 25 November 2026 — make.fun competition news-image-20261125.
//
// This program is the whole entry: the image it ships is entry.png beside this
// file, a 1024x1024 editorial poster that sums up Wednesday 25 November 2026
// in six panels (Hormuz tankers, the Ras Tanura refinery strike, Shenzhou-24
// carrying Pakistan's first astronaut, the Huawei verdict, the new US tariffs,
// and the Solomon Islands–Australia treaty), under a header naming the day.
// The program only copies that image into the grader's output directory, after
// checking it exists and fits the competition's 1 MiB size limit, so both of
// the grader's runs write byte-identical output with no network involved.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1024 * 1024; // the competition's 1 MiB cap on entry.png
const MAX_SIDE = 1024; // and its 1024 by 1024 pixel cap

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(source)) {
  throw new Error(`entry.png is missing next to main.ts (${source})`);
}

const size = statSync(source).size;
if (size > MAX_BYTES) {
  throw new Error(`entry.png is ${size} bytes, over the ${MAX_BYTES} byte limit`);
}

// The PNG header carries its dimensions in the IHDR chunk (bytes 16-23):
// width is a big-endian 32-bit integer at offset 16, height at offset 20.
const header = readFileSync(source, { encoding: null }).subarray(0, 24);
const width = header.readUInt32BE(16);
const height = header.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the ${MAX_SIDE}x${MAX_SIDE} limit`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (${width}x${height}, ${size} bytes)`);
