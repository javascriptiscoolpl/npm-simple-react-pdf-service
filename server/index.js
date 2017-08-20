'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SERVER_HOST = "127.0.0.1";
var SERVER_PORT = "3000";

var server = (0, _express2.default)();

function sendPDF(filePath, req, res) {
  _fs2.default.readFile(filePath, function (error, data) {
    if (error) {
      console.log(error);
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, { "Content-Type": "application/pdf" });
      res.write(data);
      res.end();
    }
  });
}

server.get('/1', function (req, res) {
  sendPDF("pdf/example1.pdf", req, res);
});
server.get('/2', function (req, res) {
  sendPDF("pdf/example2.pdf", req, res);
});

server.listen(SERVER_PORT, SERVER_HOST, function () {

  var SERVER_MSG = "Server ready for GET request at: ";
  SERVER_MSG += "http://" + SERVER_HOST + ":" + SERVER_PORT + "/";

  console.log(SERVER_MSG);
});
