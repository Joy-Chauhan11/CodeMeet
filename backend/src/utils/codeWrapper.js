export function createJavaScriptWrapper(code) {
  return `
${code}

const fs = require("fs");

const input = JSON.parse(
  fs.readFileSync(0, "utf8")
);

const result = twoSum(...input.args);

console.log(JSON.stringify(result));
`;
}