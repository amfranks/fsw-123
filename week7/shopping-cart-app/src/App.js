import './App.css';
import './components/FontAwesomeIcons';
import { useState } from 'react';
import { productsArray } from './components/Products';
import Header from './components/header/Header';
import RouterRoutes from './components/RouterRoutes';

function App() {

  const [cartProducts, setCartProducts] = useState([]);

  const handleAddToCart = (item) => {
    const doesProductExist = cartProducts.find((product) => product._id === item._id);

    if (doesProductExist) {
      setCartProducts(cartProducts.map((product) => product._id === item._id ? 
      {...doesProductExist, quantity: doesProductExist.quantity + 1} : product)
      );
    } else {
      setCartProducts([...cartProducts, {...item, quantity: 1 }]);
    }

    alert('Added to cart.');
  };

  const handleRemove = (item) => {
    const doesProductExist = cartProducts.find((product) => product._id === item._id);

    if (doesProductExist.quantity === 1) {
      setCartProducts(cartProducts.filter((product) => product._id !== item._id));
    } else {
      setCartProducts(cartProducts.map((product) => product._id === item._id ? {...doesProductExist, quantity: doesProductExist.quantity - 1} : product))
    }

    alert('Removed from cart.');
  };

  return (
    <div id="container">
      <Header />
      <RouterRoutes productsArray={productsArray} cartProducts={cartProducts} handleAddToCart={handleAddToCart} handleRemove={handleRemove} />
    </div>
  );
}

export default App;