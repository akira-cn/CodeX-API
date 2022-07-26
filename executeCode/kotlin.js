const path = require("path");

const executeKotlin = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  const jarFile = `${codeFile.split(".")[0]}.jar`;
  return await runCode(codeFile, inputs, {
    command: 'kotlinc',
    args: [
      '-include-runtime',
      '-d',
      jarFile,
    ],
    timeout,
    language: codeFile.split(".")[1],
    version: '1.7.10',
    needCompile: true,
    runCommand: 'java',
    runArgs: [
      '-jar',
      jarFile,
    ],
    ws,
  });
};

module.exports = {
  executeKotlin,
};