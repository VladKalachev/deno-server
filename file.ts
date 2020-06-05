import { qrcode } from "https://deno.land/x/qrcode/mod.ts";
const img = await qrcode("http://webtricks-master.ru");

const encoder = new TextEncoder();

const data = encoder.encode(`<img src=${img} />`);

await Deno.writeFile("qrcode.html", data);
