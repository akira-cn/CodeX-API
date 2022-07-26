const path = require("path");

const executeScala = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'scalac',
    args: [
    ],
    timeout,
    language: codeFile.split(".")[1],
    version: '2.11.12',
    needCompile: true,
    runCommand: 'scala',
    runArgs: [
      'Solution',
    ],
    ws,
  });
};

module.exports = {
  executeScala,
};