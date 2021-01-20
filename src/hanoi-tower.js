const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const myObj = {};
  myObj.turns = (2 ** disksNumber - 1);
  myObj.seconds = Math.floor(myObj.turns / (turnsSpeed / 3600));
  return myObj;
};
