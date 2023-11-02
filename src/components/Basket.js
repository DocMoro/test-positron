export default class Basket {
  constructor(selector) {
    this._basket = document.querySelector(selector);
    this._priseProdsEl = this._basket.querySelector('#basket-price');
    this._quantityProdsEl = this._basket.querySelector('#basket-quantity');
    this.setDataBasket = this.setDataBasket.bind(this);
  }

  setDataBasket(price, quantity) {
    this._priseProdsEl.textContent = price + ' ₽';
    this._quantityProdsEl.textContent = quantity + ' товара';
  }
}