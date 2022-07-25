const executePerl = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'perl',
    args: [
    ],
    timeout,
    language: 'perl',
    version: '5.30.0',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executePerl,
};
