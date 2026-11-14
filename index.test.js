const test = require("node:test");
const assert = require("node:assert");
const { greet, parseArgs } = require("./index");

test("greet capitalises the name", () => {
  assert.strictEqual(greet("sam"), "Hello, Sam!");
});

test("parseArgs reads --name and falls back to world", () => {
  assert.strictEqual(parseArgs(["--name", "kromse"]).name, "kromse");
  assert.strictEqual(parseArgs([]).name, "world");
});
