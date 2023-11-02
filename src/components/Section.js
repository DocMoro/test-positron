export default class Section {
  constructor(renderer, sectionClass) {
    this._renderer = renderer;
    this._section = document.querySelector(sectionClass);
    this._container = this._section.querySelector(sectionClass + '__list');
    this._fullPriceEl = this._section.querySelector('.result__bottom-text');
    this._fullPrice = 0;
    this.changePrice = this.changePrice.bind(this);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(data) {
    data.forEach(item => {
      const elementCard = this._renderer(item);
      this._container.append(elementCard);
    });
  }

  handlePriceChange(operation, priceEl) {
    this.changePrice(operation, priceEl);
    this.setPriceChange();
  }

  setPriceChange() {
    this._fullPriceEl.textContent = this._fullPrice + ' ₽';
  }

  changePrice(operation, priceEl) {
    switch(operation) {
      case '-':
        this._fullPrice = this._fullPrice - priceEl;
        break
      case '+':
        this._fullPrice = this._fullPrice + priceEl;
        break
    }
  }
}