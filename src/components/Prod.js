export default class Prod {
  constructor(dataProd, selector, handlePriceChange, handleDeleteEl) {
    this._name = dataProd.name;
    this._description = dataProd.description;
    this._vcode = dataProd.vcode;
    this._price = dataProd.price;
    this._link = dataProd.link;
    this._quantity = dataProd.quantity;
    this._selector = selector;
    this.handleDeleteEl = handleDeleteEl;
    this._handlePriceChange = handlePriceChange;
  }

  generateProd() {
    this._template = document.querySelector(this._selector).content;
    this._element = this._template.querySelector('.cell').cloneNode(true);
    this._imageElement = this._element.querySelector('.cell__image');
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._titleElement = this._element.querySelector('.cell__title');
    this._titleElement.textContent = this._name;
    this._textElement = this._element.querySelector('.cell__description');
    this._textElement.textContent = this._description;
    this._codeElement = this._element.querySelector('.cell__code');
    this._codeElement.textContent = 'Артикул: ' + this._vcode;
    this._priceThingElement = this._element.querySelector('.cell__price-thing');
    this._priceThingElement.textContent = this._price + ' ₽/шт.';
    this._quantityElement = this._element.querySelector('.cell__counter-text');
    this._priceElement = this._element.querySelector('.cell__price');
    this._buttonReduce = this._element.querySelector('.cell__button_icon_reduce');
    this._buttonAdd = this._element.querySelector('.cell__button_icon_add');
    this._setFullPrice();
    this._setEventListeners();
    return this._element;
  }

  _setFullPrice() {
    this._setQuantity();
    const fullPrice = this.getFullPrise();
    this._priceElement.textContent = fullPrice + ' ₽';
  }

  _setQuantity() {
    this._checkQuantity();
    this._quantityElement.textContent = this._quantity;
  }

  _setEventListeners() {
    this._buttonReduce.addEventListener('click', () => this._handleReduceQuantity());
    this._element.querySelector('.cell__close').addEventListener('click', () => {
      this.handleDeleteEl(this);
      this._removeProd()
    });
    this._buttonAdd.addEventListener('click', () => this._handleIncreaseQuantity());
  }

  _handleReduceQuantity() {
    this._quantity = this._quantity - 1;

    this._setFullPrice();
    this._handlePriceChange('-', this._price, this._quantity);

    if(this._quantity === 0) {
      this._removeProd();
    }
  }

  _handleIncreaseQuantity() {
    this._quantity = this._quantity + 1;
    this._setFullPrice();
    this._handlePriceChange('+', this._price, this._quantity);
  }

  _checkQuantity() {
    if(this._quantity === 1) {
      this._priceThingElement.classList.add('cell__price-thing_disabled');
      return
    }
    this._priceThingElement.classList.remove('cell__price-thing_disabled');
  }

  _removeProd() {
    this._element.remove();
    this._element = null;
  }

  getFullPrise() {
    return this._price * this._quantity;
  }

  getQuantity() {
    return this._quantity;
  }
}