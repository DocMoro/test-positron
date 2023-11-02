import './index.css';

import Prod from './components/Prod';
import Section from './components/Section';
import Form from './components/Form';
import Basket from './components/Basket';
import Panel from './components/Panel';
import Slider from './components/Slider';

import { dataProds } from './constants/constants';

const panel = new Panel('.payment__top-panel');
const basket = new Basket('.basket');
const form = new Form('.result');
const listProds = new Section(
  createProd,
  '.payment',
  form.setDataForm,
  basket.setDataBasket, 
  panel.setDataPanel
);
listProds.renderItems(dataProds);
listProds.setPriceChange();

const swiper = new Swiper('.swiper');
const slider = new Slider('.slider', swiper);
slider.setEventListeners();

function createProd(dataProd) {
  const prod = new Prod(
    dataProd, 
    '.template-cell', 
    listProds.handlePriceChange, 
    listProds.handleDeleteEl
  );
  const elementProd = prod.generateProd();
  return elementProd;
}