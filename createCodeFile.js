const { v4: getUUID } = require("uuid"),
  fs = require("fs"),
  path = require("path");

if (!fs.existsSync(path.join(__dirname, "codes")))
  fs.mkdirSync(path.join(__dirname, "codes"));

if (!fs.existsSync(path.join(__dirname, "classes")))
  fs.mkdirSync(path.join(__dirname, "classes"));

const createCodeFile = (language, code) => {
  const jobID = getUUID();
  let fileName = `${jobID}.${language}`;

  if(language === 'erl') {
    fileName = 'x' + fileName;
    code = code.replace(/-module\(.*)\)/img, `-module(x${jobID})`);
  }
  fs.writeFileSync(path.join(__dirname, `codes/${fileName}`), code?.toString());

  return fileName;
};

module.exports = {
  createCodeFile,
};
