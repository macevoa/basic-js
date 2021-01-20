const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = '+';
  let additionSeparator = '|';
  let result = '';

  if (!options.repeatTimes) options.repeatTimes = 1;

  for (let i = 0; i < options.repeatTimes; i += 1) {
    result += str;
    if (Object.keys(options).indexOf('addition') !== -1) {
      if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

      for (let j = 0; j < options.additionRepeatTimes; j += 1) {
          result += '' + options.addition;
          if (j < options.additionRepeatTimes - 1) result += options.additionSeparator || additionSeparator;
      }
    }
    if (i < options.repeatTimes - 1) result += options.separator || separator;
  }

  return result;
};
  