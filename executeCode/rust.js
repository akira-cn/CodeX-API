const path = require("path");

const executeRust = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'rustc',
    args: [
      '-o',
      `${path.join(__dirname, `../classes/${codeFile.split(".")[0]}`)}.out`,
    ],
    timeout,
    language: codeFile.split(".")[1],
    version: '1.62.1',
    needCompile: true,
    ws,
  });
};

module.exports = {
  executeRust,
};
