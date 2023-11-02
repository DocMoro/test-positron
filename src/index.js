import './index.css';

import Prod from './components/Prod';
import Section from './components/Section';
import Form from './components/Form';

import { dataProds } from './constants/constants';

const form = new Form('.result');
const listProds = new Section(createProd, '.payment', form.setDataForm);
listProds.renderItems(dataProds);
listProds.setPriceChange();

function createProd(dataProd) {
  const prod = new Prod(dataProd, '.template-cell', listProds.handlePriceChange, listProds.handleDeleteEl);
  const elementProd = prod.generateProd();
  return elementProd;
}