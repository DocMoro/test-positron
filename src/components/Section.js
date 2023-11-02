export default class Section {
  constructor(renderer, sectionClass, setDataForm, setDataBasket) {
    this._renderer = renderer;
    this._section = document.querySelector(sectionClass);
    this._container = this._section.querySelector(sectionClass + '__list');
    this._isChecked = false;
    this._fullPrice = 0;
    this._quantityProds = 0;
    this._setDataForm = setDataForm;
    this._setDataBasket = setDataBasket;
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDeleteEl = this.handleDeleteEl.bind(this);
  }

  handleDeleteEl(prod) {
    const prodFullPrice = prod.getFullPrise()
    const prodQuantity = prod.getQuantity();

    this._fullPrice = this._fullPrice - prodFullPrice;
    this._quantityProds = this._quantityProds - prodQuantity;
    this.setPriceChange();
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(data) {
    data.forEach(item => {
      this._quantityProds = this._quantityProds + item.quantity;
      this._fullPrice = this._fullPrice + item.quantity * item.price;

      const elementCard = this._renderer(item);
      this._container.append(elementCard);
    });
    this._setEventListeners();
  }

  handlePriceChange(operation, priceEl) {
    this.changePrice(operation, priceEl);
    this.setPriceChange();
  }

  setPriceChange() {
    this._setDataForm(this._fullPrice, this._quantityProds, this._isChecked);
    this._setDataBasket(this._fullPrice, this._quantityProds);
  }

  changePrice(operation, priceEl) {
    switch(operation) {
      case '-':
        this._fullPrice = this._fullPrice - priceEl;
        this._quantityProds = this._quantityProds - 1;
        break
      case '+':
        this._fullPrice = this._fullPrice + priceEl;
        this._quantityProds = this._quantityProds + 1;
        break
    }
  }

  _handlerClickCheckbox(e) {
    this._isChecked = e.target.checked;
    this.setPriceChange();
  }

  _setEventListeners() {
    this._section.querySelector('.checkbox__input')
      .addEventListener('click', (e) => this._handlerClickCheckbox(e));
  }
}