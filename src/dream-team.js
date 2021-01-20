const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (!Array.isArray(array)) return false;
  let acronym = [];
  array.forEach((item) => {
    if (typeof item === 'string') {
      acronym.push(item.trim()[0].toUpperCase());
    }
  });
  return acronym.sort().join('');
};
