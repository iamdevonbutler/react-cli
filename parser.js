module.exports = class Parser {

  constructor(file, data, options) {
    this.file = file;
    this.data = data;
    this.options = options || {};
  }

  parse() {
    this._parseVariables();
    this._parseConditionals();
    return this;
  }

  trimNewLines() {
    this.file = this.file.replace(/\n+\n/g, '\n\n');
    return this;
  }

  getFile() {
    return this.file;
  }

  _parseVariables() {
    const {data} = this;
    const matches = this.file.match(/{{\w+}}/g);
    matches.forEach(match => {
      var field;
      field = match.slice(2).slice(0, -2);
      if (data[field]) {
        this.file = this.file.replace(match, data[field]);
      }
      else {
        throw `Variable "${match}" is undefined.`;
      }
    });
  }

  _parseConditionals() {
    const {options} = this;
    const match = this.file.match(/<%\s?if\s?\((\w+)\)\s?%>([\S\s]*?)<%\s?endif\s?%>/);
    if (match) {
      var optName;
      optName = match[1];
      if (options[optName]) {
        this.file = this.file.replace(match[0], match[2]);
      }
      else {
        this.file = this.file.slice(0, match.index - 1) + this.file.slice(match.index);
        this.file = this.file.replace(match[0], '');
      }
      this._parseConditionals();
    }
  }

}
