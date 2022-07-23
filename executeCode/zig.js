const executeZig = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'zig',
    args: [
      'run',
    ],
    timeout,
    language: 'zig',
    version: '0.10.0',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executeZig,
};
