export default class Basket {
  constructor(selector) {
    this._form = document.querySelector(selector);
    this._priseProdsEl = this._form.querySelector('#basket-price');
    this._quantityProdsEl = this._form.querySelector('#basket-quantity');
    this.setDataBasket = this.setDataBasket.bind(this);
  }

  setDataBasket(price, quantity) {
    this._priseProdsEl.textContent = price + ' ₽';
    this._quantityProdsEl.textContent = quantity + ' шт';
  }
}