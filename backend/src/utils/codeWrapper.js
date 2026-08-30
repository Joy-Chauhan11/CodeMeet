export function createJavaScriptWrapper(code, functionName) {
  return `
${code}

const fs = require("fs");

const input = JSON.parse(
  fs.readFileSync(0, "utf8")
);

const result = ${functionName}(...input.args);

console.log(JSON.stringify(result));
`;
}




export function createPythonWrapper(code, functionName) {
  return `
${code}

import sys
import json

input_data = json.loads(sys.stdin.read())

result = ${functionName}(*input_data["args"])

print(json.dumps(result))
`;
}