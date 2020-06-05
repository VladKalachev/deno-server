import { Application } from "https://deno.land/x/oak/mod.ts";
import {router} from './router.ts';

const port = 8000;
const app = new Application();

app.use(router.routes());
console.log(`app has be started on port ${port}`);

await app.listen({ port });

