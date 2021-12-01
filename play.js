const { connect } = require('./client')
const { setupInput } = require("./input");

// establishes a connection with the game server


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  console.log(key)
  // your code here
};

console.log("Connecting ...");
const conn = connect();
setupInput(conn);