import './index.css';

import Prod from './components/Prod';
import Section from './components/Section';

import { dataProds } from './constants/constants';

const listProds = new Section(createProd, '.payment__list');
listProds.renderItems(dataProds);

function createProd(dataProd) {
  const prod = new Prod(dataProd, '.template-cell');
  const elementProd = prod.generateProd();
  console.log(dataProd);
  return elementProd;
}