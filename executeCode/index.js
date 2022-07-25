const { executeJava } = require('./java.js');
const { executePython } = require('./python.js');
const { executeCorCPP } = require('./c_or_cpp.js');
const { executeJavaScript } = require('./javascript.js');
const { executeGo } = require('./go.js');
const { executeCsharp } = require('./csharp.js');
const { executeRust } = require('./rust.js');
const { executeZig } = require('./zig.js');
const { executeRuby } = require('./ruby.js');
const { executePhp } = require('./php.js');

module.exports = {
  executeJava,
  executePython,
  executeCorCPP,
  executeJavaScript,
  executeGo,
  executeCsharp,
  executeRust,
  executeZig,
  executeRuby,
  executePhp,
};
