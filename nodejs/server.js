var app = require("http").createServer(handler)
  , io = require("socket.io").listen(app)
  , fs = require("fs")

app.listen(80);

function handler(req, res)

