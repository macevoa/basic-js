const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.maxDepth = 1;
  }
  calculateDepth(arr, depth = 1) {
    if (this.maxDepth < depth) this.maxDepth = depth;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        this.maxDepth = this.calculateDepth(item, depth + 1);
      }
    });
    let end = this.maxDepth;
    this.maxDepth = 1;
    return end;
  }
};