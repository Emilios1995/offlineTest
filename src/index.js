require("offline-plugin/runtime").install();
require("./main.css");
var logoPath = require("./logo.svg");
var Elm = require("./App.elm");

var root = document.getElementById("root");

Elm.App.embed(root, logoPath);
