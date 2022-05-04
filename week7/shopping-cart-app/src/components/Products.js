import tankTop from '../images/tank-top.jpg';
import tShirt from '../images/t-shirt.jpg';
import vNeck from '../images/v-neck.jpg';
import poloShirt from '../images/polo-shirt.jpg';
import henley from '../images/henley.jpg';
import flannel from '../images/flannel.jpg';
import dressShirt from '../images/dress-shirt.jpg';
import sweatShirt from '../images/sweatshirt.jpg';
import hoodie from '../images/hoodie.jpg';
import denimJacket from '../images/denim-jacket.jpg';
import suitJacket from '../images/suit-jacket.jpg';
import winterCoat from '../images/winter-coat.jpg';

const { v4: uuidv4 } = require('uuid');

const tankTopProduct = tankTop;
const tShirtProduct = tShirt;
const vNeckProduct = vNeck;
const poloShirtProduct = poloShirt;
const henleyProduct = henley;
const flannelProduct = flannel;
const dressShirtProduct = dressShirt;
const sweatShirtProduct = sweatShirt;
const hoodieProduct = hoodie;
const denimJacketProduct = denimJacket;
const suitJacketProduct = suitJacket;
const winterCoatProduct = winterCoat;


export const productsArray = [
    { _id: uuidv4(), productName: 'Tank Top', productPrice: 10, productImage: tankTopProduct },
    { _id: uuidv4(), productName: 'T-shirt', productPrice: 15, productImage: tShirtProduct },
    { _id: uuidv4(), productName: 'V-Neck', productPrice: 15, productImage: vNeckProduct },
    { _id: uuidv4(), productName: 'Polo Shirt', productPrice: 30, productImage: poloShirtProduct },
    { _id: uuidv4(), productName: 'Henley', productPrice: 20, productImage: henleyProduct },
    { _id: uuidv4(), productName: 'Flannel', productPrice: 30, productImage: flannelProduct },
    { _id: uuidv4(), productName: 'Dress Shirt', productPrice: 40, productImage: dressShirtProduct },
    { _id: uuidv4(), productName: 'Sweatshirt', productPrice: 35, productImage: sweatShirtProduct },
    { _id: uuidv4(), productName: 'Hoodie', productPrice: 35, productImage: hoodieProduct },
    { _id: uuidv4(), productName: 'Denim Jacket', productPrice: 50, productImage: denimJacketProduct },
    { _id: uuidv4(), productName: 'Suit Jacket', productPrice: 75, productImage: suitJacketProduct },
    { _id: uuidv4(), productName: 'Winter Coat', productPrice: 100, productImage: winterCoatProduct },
];