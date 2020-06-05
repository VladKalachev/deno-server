import { sum, sub } from "./calc.ts";
//  import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
// import { assertEquals } from "https://deno.land/std@0.53.0/testing/asserts.ts";
import { assertEquals } from "../dependencies.ts";

Deno.test("Culc function", () => {
  const result = sum(1, 1);
  assertEquals(result, 2);
});

Deno.test("Culc function", () => {
  const result = sub(2, 1);
  assertEquals(result, 1);
});
