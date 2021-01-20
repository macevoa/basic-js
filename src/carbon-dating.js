const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(activity) {
  if (!(+activity) || typeof activity !== 'string' || !(activity > 0 && activity <= 15)) return false;
  let ln = Math.log(MODERN_ACTIVITY / +activity);
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(ln / k);
};
