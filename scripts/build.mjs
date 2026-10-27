import { cp, mkdir, writeFile } from 'node:fs/promises';
import { renderPage } from './page.mjs';

const outputDirectory = new URL('../dist/', import.meta.url);
await mkdir(outputDirectory, { recursive: true });
await writeFile(new URL('index.html', outputDirectory), await renderPage(), 'utf8');
for (const directory of ['src', 'assets']) {
  await cp(new URL(`../${directory}/`, import.meta.url), new URL(`${directory}/`, outputDirectory), { recursive: true });
}
console.log('Version statique générée : dist/ (HTML, styles, script et illustrations).');
