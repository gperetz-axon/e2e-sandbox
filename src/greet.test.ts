import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "./greet.ts";

test("greet says hello to the name", () => {
  assert.equal(greet("World"), "Hello, World!");
  assert.equal(greet("Captain"), "Hello, Captain!");
});
