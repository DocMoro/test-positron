export default class Form {
  constructor(selector) {
    this._form = document.querySelector(selector);
    this._fullPriceEl = this._form.querySelector(selector + '__bottom-text');
    this._priseProdsEl = this._form.querySelector('#price');
    this._quantityProdsEl = this._form.querySelector('#quantity');
    this._installEl = this._form.querySelector('#help');
    this.setDataForm = this.setDataForm.bind(this);
  }

  setDataForm(price, quantity, checked) {
    this._fullPriceEl.textContent = price + ' ₽';
    this._priseProdsEl.textContent = price + ' ₽';
    this._quantityProdsEl.textContent = quantity + ' шт';
    this._installEl.textContent = checked ? 'Да' : 'Нет';
  }
}