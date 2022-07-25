const path = require("path");

const executeErlang = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'erlc',
    args: [
    ],
    timeout,
    language: codeFile.split(".")[1],
    version: '10.6.4',
    needCompile: true,
    runCommand: 'erl',
    runArgs: [
      '-noshell',
      '-s',
      codeFile.split(".")[0], 
      'main',
      '-s',
      'init',
      'stop',
    ],
    ws,
  });
};

module.exports = {
  executeErlang,
};