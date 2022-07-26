const path = require("path");
const fs = require("fs");

const executeKotlin = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  const jarFile = path.join(__dirname, `../classes/${codeFile.split(".")[0]}.jar`);
  
  const ret = await runCode(codeFile, inputs, {
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

  try {
    fs.unlinkSync(jarFile);
  } catch(ex) {

  }

  return ret;
};

module.exports = {
  executeKotlin,
};