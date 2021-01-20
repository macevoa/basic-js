const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const commands = {
    isDiscardNext: false,
    isDoubleNext: false,
  };

  let newArray = [];

  arr.forEach((item, iter) => {
    switch(item) {
      case('--discard-next'):
        commands.isDiscardNext = true;
        commands.isDiscarded = true;
        break;
      case('--discard-prev'):
        if (newArray.length === 0 || arr[iter - 2] === '--discard-next') break;
        newArray.pop();
        break;
      case('--double-next'):
        commands.isDoubleNext = true;
        break;
      case('--double-prev'):
        if (newArray.length === 0 || arr[iter - 2] === '--discard-next') break;
        newArray.push(newArray.slice(-1)[0]);
        break;
      default:
        if (commands.isDiscardNext) {
          commands.isDiscardNext = false;
          break;
        }
        if (commands.isDoubleNext) {
          commands.isDoubleNext = false;
          newArray.push(item);
        }
        newArray.push(item);
        break;
    }
  });

  return newArray;
};
