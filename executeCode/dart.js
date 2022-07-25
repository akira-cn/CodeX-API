const executeDart = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'dart',
    args: [
    ],
    timeout,
    language: 'dart',
    version: '2.17.6',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executeDart,
};
