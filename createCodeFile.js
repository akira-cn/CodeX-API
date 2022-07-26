const { v4: getUUID } = require("uuid"),
  fs = require("fs"),
  path = require("path");

if (!fs.existsSync(path.join(__dirname, "codes")))
  fs.mkdirSync(path.join(__dirname, "codes"));

if (!fs.existsSync(path.join(__dirname, "classes")))
  fs.mkdirSync(path.join(__dirname, "classes"));

const createCodeFile = (language, code) => {
  let jobID = getUUID(),
    fileName = `${jobID}.${language}`;

  if(language === 'erl' || language === 'scala') {
    jobID = 'x' + jobID.replace(/-/g, '');
    fileName = `${jobID}.${language}`;
    if(language === 'erl') code = code.replace(/-module\(.*\)/img, `-module(${jobID})`);
    else code = code.replace(/object\s+(\w+)/img, `object ${jobID}`);
  }
  fs.writeFileSync(path.join(__dirname, `codes/${fileName}`), code?.toString());

  return fileName;
};

module.exports = {
  createCodeFile,
};
