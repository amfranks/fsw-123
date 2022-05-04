import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <header>
                <div>
                    <h1>
                        <Link to='/' className='shop-icon'>SUBURBAN SHIRTS</Link>
                    </h1>
                </div>

                <div className='header-links'>
                    <ul>
                        <li>
                            <Link to='/' className='link'>Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to='/cart' className='link'>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                            </Link>
                        </li>
                    </ul>
                </div>
        </header>
    );
};

export default Header;