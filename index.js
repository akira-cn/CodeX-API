const { createCodeFile } = require("./createCodeFile"),
  { removeCodeFile } = require("./removeCodeFile"),
  {
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
  } = require("./executeCode");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const wsPort = process.env.WSPORT || 8889;
const cors = require("cors"); //use this

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Total languages supported
const supportedLanguages = ["java", "cpp", "py", "c", "js", "go", "cs", "rs", "zig", "rb",
  "php", "pl", "dart", "erl", "kt", "scala", "elixir"];
const compilerVersions = [
  "11.0.15",
  "11.2.0",
  "3.7.7",
  "11.2.0",
  "16.13.2",
  "1.18.3",
  "6.12.0.140",
  "1.62.1",
  "0.10.0",
  "2.7.0",
  "7.3.29",
  "5.30.0",
  "2.17.6",
  "10.6.4",
  "1.7.10",
  "2.11.12",
  "1.13.4",
];

const { WebSocketServer } = require('ws');
const wsClients = [];
let clientIndex = 0;

const wss = new WebSocketServer({ port: wsPort });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
  const id = clientIndex++;
  ws.send(JSON.stringify({ type: 'init', message: id}));
  wsClients[id] = ws;
  ws.on('close', function close() {
    wsClients[id] = null;
    console.log(`closed: ${id}`);
  });
});

app.post("/", async (req, res) => {
  let output = "";
  const { language = "java", code, input = "", timeout, wsID } = req.body;

  if (code === undefined || code.trim() === "")
    output = "No code specified to execute.";
  if (!supportedLanguages.includes(language))
    output = `Language ${language} is not supported. Please refer to docs to know the supported languages.`;

  if (output === "") {
    const codeFile = createCodeFile(language, code);

    console.log(codeFile, code, input);

    const ws = wsClients[wsID];

    switch (language) {
      case "dart":
        output = await executeDart(codeFile, input, timeout,ws);
        break;
      case "erl":
        output = await executeErlang(codeFile, input, timeout,ws);
        break;
      case "elixir":
        output = await executeElixir(codeFile, input, timeout,ws);
        break;
      case "kt":
        output = await executeKotlin(codeFile, input, timeout,ws);
        break;
      case "java":
        output = await executeJava(codeFile, input, timeout, ws);
        break;
      case "py":
        output = await executePython(codeFile, input, timeout, ws);
        break;
      case "php":
        output = await executePhp(codeFile, input, timeout, ws);
        break;
      case "pl":
        output = await executePerl(codeFile, input, timeout, ws);
        break;
      case "cpp":
        output = await executeCorCPP(codeFile, input, timeout, ws);
        break;
      case "c":
        output = await executeCorCPP(codeFile, input, timeout, ws);
        break;
      case "js":
        output = await executeJavaScript(codeFile, input, timeout, ws);
        break;
      case "rb":
        output = await executeRuby(codeFile, input, timeout, ws);
        break;
      case "rs":
        output = await executeRust(codeFile, input, timeout, ws);
        break;
      case "scala":
        output = await executeScala(codeFile, input, timeout, ws);
        break;
      case "go":
        output = await executeGo(codeFile, input, timeout, ws);
        break;
      case "cs":
        output = await executeCsharp(codeFile, input, timeout, ws);
        break;
      case "zig":
        output = await executeZig(codeFile, input, timeout, ws);
        break;
    }

    removeCodeFile(codeFile.split(".")[0], language);
  }

  res.send(output);
});

app.get("/list", (req, res) => {
  let versionObj = [];
  for (let i = 0; i < supportedLanguages.length; i++) {
    versionObj.push({
      language: supportedLanguages[i],
      compilerVersion: compilerVersions[i],
    });
  }
  res.send(versionObj);
});

app.listen(port);
