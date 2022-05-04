import { Route, Routes } from 'react-router-dom';
import Shirts from './shirts/Shirts';
import Cart from './cart/Cart';

const RouterRoutes = ({ productsArray, cartProducts, handleAddToCart, handleRemove }) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact element={
                    <Shirts productsArray={productsArray} handleAddToCart={handleAddToCart} />
                }>
                </Route>

                <Route path='/cart' exact element={
                    <Cart cartProducts={cartProducts} handleAddToCart={handleAddToCart} handleRemove={handleRemove} />
                }>
                </Route>
            </Routes>
        </div>
    );
};

export default RouterRoutes;