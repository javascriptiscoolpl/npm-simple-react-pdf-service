import express from 'express';
import fs from 'fs';

const SERVER_HOST = "127.0.0.1";
const SERVER_PORT = "3000";

const server = express();

function sendPDF(filePath, req, res) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, {"Content-Type": "application/pdf"});
      res.write(data);
      res.end();
    }
  });
}

server.get('/1', (req, res) => { sendPDF("pdf/example1.pdf", req, res); });
server.get('/2', (req, res) => { sendPDF("pdf/example2.pdf", req, res); });

server.listen(SERVER_PORT, SERVER_HOST, () => {

  let SERVER_MSG  = "Server ready for GET request at: ";
      SERVER_MSG += "http://"+SERVER_HOST+":"+SERVER_PORT+"/";

  console.log(SERVER_MSG);
});
