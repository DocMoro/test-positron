export default class Panel {
  constructor(selector, ) {
    this._panel = document.querySelector(selector);
    this._quantityProdsEl = this._panel.querySelector('.payment__text');
    this.setDataPanel = this.setDataPanel.bind(this);
  }

  setDataPanel(quantity) {
    this._quantityProdsEl.textContent = quantity + ' товара';
  }
}