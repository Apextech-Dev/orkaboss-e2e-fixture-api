import { test } from "node:test";
import assert from "node:assert/strict";
import { goodbyeFor, greetingFor } from "../src/index.js";

test("greetingFor says hello", () => {
  assert.deepEqual(greetingFor("Sam"), { message: "Hello, Sam!" });
});

test("goodbyeFor says goodbye", () => {
  assert.deepEqual(goodbyeFor("Ada"), { message: "Goodbye, Ada!" });
});
