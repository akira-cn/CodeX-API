const path = require("path");
const fs = require("fs");

const executeScala = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  const className = codeFile.split(".")[0];

  const ret = await runCode(codeFile, inputs, {
    command: 'scalac',
    args: [
    ],
    timeout,
    language: codeFile.split(".")[1],
    version: '2.11.12',
    needCompile: true,
    runCommand: 'scala',
    runArgs: [
      className,
    ],
    ws,
  });

  try {
    fs.unlinkSync(`${className}.class`);
    fs.unlinkSync(`${className}$.class`);
  } catch(ex) {
    
  }

  return ret;
};

module.exports = {
  executeScala,
};