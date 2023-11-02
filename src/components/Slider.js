export default class Slider {
  constructor(selector, swiper) {
    this._swiper = swiper;
    this._counter = 1;
    this._sliderEl = document.querySelector(selector);
    this._nextBtn = this._sliderEl.querySelector(selector + '__button_icon_next');
    this._prevBtn = this._sliderEl.querySelector(selector + '__button_icon_prev');
    this._currPageEl = this._sliderEl.querySelector(selector + '__current-page');
  }

  setEventListeners() {
    this._nextBtn.addEventListener('click', () => this._handleClickNextSlide());
    this._prevBtn.addEventListener('click', () => this._handleClickPrevSlide());
  }

  _handleClickNextSlide() {
    if (this._counter === 6) {
      return
    }
    this._swiper.slideNext();
    this._counter = this._counter + 1;
    this._setCurrentPage();
  }

  _handleClickPrevSlide() {
    if (this._counter === 1) {
      return
    }
    this._swiper.slidePrev();
    this._counter = this._counter - 1;
    this._setCurrentPage();
  }

  _setCurrentPage() {
    this._currPageEl.textContent = this._counter;
  }
}