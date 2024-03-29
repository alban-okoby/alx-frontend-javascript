import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateAmount(amount);
    this._currency = this.validateCurrency(currency);
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateAmount(newAmount);
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency);
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }

  validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of class Currency');
    }
    return currency;
  }
}
