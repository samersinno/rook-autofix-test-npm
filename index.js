const _ = require("lodash");
const minimist = require("minimist");

function greet(name) {
  return `Hello, ${_.capitalize(name)}!`;
}

function parseArgs(argv) {
  return minimist(argv, { string: ["name"], default: { name: "world" } });
}

module.exports = { greet, parseArgs };

if (require.main === module) {
  const { name } = parseArgs(process.argv.slice(2));
  console.log(greet(name));
}
