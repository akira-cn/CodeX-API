const path = require("path");
const fs = require("fs");

const executeErlang = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  const beamFile =  path.join(__dirname, `../classes/${codeFile.split(".")[0]}`);

  const ret = await runCode(codeFile, inputs, {
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
      beamFile,
      'main',
      '-s',
      'init',
      'stop',
    ],
    ws,
  });

  try {
    fs.unlinkSync(beamFile);
  } catch(ex) {
    
  }

  return ret;
};

module.exports = {
  executeErlang,
};