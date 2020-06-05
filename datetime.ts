import {
  parseDate,
  parseDateTime,
} from "https://deno.land/std/datetime/mod.ts";

console.log(parseDate("20-01-2019", "dd-mm-yyyy"));
parseDateTime("01-20-2019 16:34", "mm-dd-yyyy hh:mm");
