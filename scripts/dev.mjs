import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { renderPage } from './page.mjs';

const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';
if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error('PORT doit être un entier entre 1 et 65535.');
}

const staticFiles = new Map([
  ['/src/styles.css', ['src/styles.css', 'text/css; charset=utf-8']],
  ['/src/main.js', ['src/main.js', 'text/javascript; charset=utf-8']],
]);
for (const scene of ['canopy', 'savanna', 'rock']) {
  for (const size of ['', '-mobile']) {
    const file = `assets/${scene}-canva${size}.webp`;
    staticFiles.set(`/${file}`, [file, 'image/webp']);
  }
}

const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Méthode non autorisée');
    return;
  }

  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    const headers = { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' };
    let body;
    if (pathname === '/' || pathname === '/index.html') {
      body = await renderPage();
      headers['Content-Type'] = 'text/html; charset=utf-8';
    } else if (staticFiles.has(pathname)) {
      const [file, contentType] = staticFiles.get(pathname);
      body = await readFile(new URL(`../${file}`, import.meta.url));
      headers['Content-Type'] = contentType;
    } else {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Page introuvable');
      return;
    }
    response.writeHead(200, headers);
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch (error) {
    console.error(error);
    response.writeHead(error.code === 'ENOENT' ? 404 : 500, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('La ressource ne peut pas être chargée. Consultez le terminal.');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Le port ${port} est occupé. Essayez PORT=4174 npm run dev.`
    : error);
  process.exitCode = 1;
});
server.listen(port, host, () => console.log(`Akokang est disponible sur http://${host}:${port}`));
