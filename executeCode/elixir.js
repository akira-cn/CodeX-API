const executeElixir = async (codeFile, inputs, timeout = 8, ws) => {
  const runCode = require('./run_code');
  return await runCode(codeFile, inputs, {
    command: 'elixir',
    args: [
    ],
    timeout,
    language: 'elixir',
    version: '1.13.4',
    needCompile: false,
    ws,
  });
};

module.exports = {
  executeElixir,
};
