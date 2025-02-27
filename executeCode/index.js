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
const { executePerl } = require('./perl.js');
const { executeDart } = require('./dart.js');
const { executeErlang } = require('./erlang');
const { executeKotlin } = require('./kotlin.js');
const { executeScala } = require('./scala.js');
const { executeElixir } = require('./elixir.js');

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
  executePerl,
  executeDart,
  executeErlang,
  executeKotlin,
  executeScala,
  executeElixir,
};
