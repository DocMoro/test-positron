import './index.css';

import Prod from './components/Prod';
import Section from './components/Section';

import { dataProds } from './constants/constants';

const listProds = new Section(createProd, '.payment');
listProds.renderItems(dataProds);
listProds.setPriceChange();

function createProd(dataProd) {
  const prod = new Prod(dataProd, '.template-cell', listProds.handlePriceChange.bind(listProds));
  const prodFullPrice = prod.getFullPrise();
  listProds.changePrice('+', prodFullPrice);
  const elementProd = prod.generateProd();
  return elementProd;
}