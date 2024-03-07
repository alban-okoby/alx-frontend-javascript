export default class Airport {
  constructor(name, code) {
    this._name = this.validateString(name, 'Name');
    this._code = this.validateString(code, 'Code');
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }

  validateString(value, label) {
    if (typeof value !== 'string') {
      throw new TypeError(`${label} must be a string`);
    }
    return value;
  }
}
