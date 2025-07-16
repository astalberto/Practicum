import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../backend/server/index';
console.log("Client/index");
const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});

async function main() {

}

main();
