import './Cart.css';

const Cart = ({ cartProducts, handleAddToCart, handleRemove }) => {

    const totalPrice = cartProducts.reduce((price, product) => price + product.quantity * product.productPrice, 0);

    return (
        <div className='cart-products'>
            <h1>Cart</h1>

            {
                cartProducts.length === 0 && <div className='empty-cart'>Cart is empty!</div>
            }

            <div className='cart-product'>
                <div className='total-price'>
                    <p>Total price: ${totalPrice}</p>
                </div>

                {
                    cartProducts.map((product, i) => {

                        return (
                            <>
                                <div className='product-list' key={i}>
                                    <div key={product._id} className='cart-list'>
                                        <img src={product.productImage} alt={product.productName} className='cart-product-image'></img>
                                    </div>

                                    <div className='cart-product-name'>
                                        <p>{product.productName}</p>
                                    </div>

                                    <div className='cart-product-btns'>
                                        <button className='cart-add-btn' onClick={() => handleAddToCart(product)}>ADD</button>
                                        <button className='cart-remove-btn' onClick={() => handleRemove(product)}>REMOVE</button>
                                    </div>

                                    <div>
                                        <p>{product.quantity} * ${product.productPrice}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Cart;