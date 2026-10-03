import { test } from "node:test";
import assert from "node:assert/strict";
import { greetingFor } from "../src/index.js";

test("greetingFor says hello", () => {
  assert.deepEqual(greetingFor("Sam"), { message: "Hello, Sam!" });
});
