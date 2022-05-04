import './Shirts.css';

const Shirts = ({ productsArray, handleAddToCart }) => {

    return (
        <div className='shirts'>
            {
                productsArray.map((product, i) => {

                    return (
                        <div className='product-block' key={i}>
                            <div className='products-div'>
                                <img src={product.productImage} alt={product.productName}></img>
                            </div>

                            <div>
                                <h3 className='product-name'>{product.productName}</h3>
                            </div>

                            <div className='product-price'>
                                <p>${product.productPrice}</p>
                            </div>

                            <div className='btn-div'>
                                <button className='add-to-cart-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Shirts;