export default class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
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
}