const { IP, PORT } = require("./constants");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
      port: PORT
  }); 
  conn.on("connect", () => {
console.log("Successfully connected to server")
conn.write("Name: FMG")
// conn.write("Move: up")

  });
  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {
  connect
}

