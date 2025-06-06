import { createHTTPHandler } from '@trpc/server/adapters/standalone';
import { appRouter } from './routers';
import { createServer } from 'http';
import { renderTrpcPanel } from 'trpc-ui';

export type AppRouter = typeof appRouter;

const handler = createHTTPHandler({
  router: appRouter,
  createContext: () => ({}),
});

const server = createServer((req, res) => {
  if (req.url === '/panel' && req.method === 'GET') {
    const html = renderTrpcPanel(appRouter, {
      url: 'http://localhost:4000/trpc',
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  if (req.url?.startsWith('/trpc')) {
    req.url = req.url.replace('/trpc', ''); // <-- para que el handler lea bien el procedimiento
    handler(req, res);
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(4000);
console.log('Servidor tRPC escuchando en http://localhost:4000');