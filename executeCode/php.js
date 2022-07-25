const executePhp = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'php',
    args: [
    ],
    timeout,
    language: 'php',
    version: '7.3.29',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executePhp,
};
