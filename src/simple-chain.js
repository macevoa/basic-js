const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentChain: [],
  chainLength: 0,

  getLength() {
    return this.chainLength;
  },
  addLink(value) {
    value = '' + value;
    (value) ? this.currentChain.push(` ${value} `) : this.currentChain.push(' ');
    this.chainLength += 1;
    return this;
  },
  removeLink(position) {
    if (!this.currentChain[position]) {
      this.currentChain = [];
      this.chainLength = 0;
      throw new Error;
    }
    this.currentChain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return this;
  },
  finishChain() {
    let chain = '';
    this.currentChain.forEach((item) => {
      chain += `~~(${item})`;
    });
    chain = chain.slice(2);
    this.currentChain = [];
    this.chainLength = 0;
    return chain;
  }
};

module.exports = chainMaker;
