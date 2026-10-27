import { readFile } from 'node:fs/promises';

export function renderPage() {
  return readFile(new URL('../index.html', import.meta.url), 'utf8');
}
