const executeRuby = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'ruby',
    args: [
    ],
    timeout,
    language: 'ruby',
    version: '2.7.0',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executeRuby,
};
