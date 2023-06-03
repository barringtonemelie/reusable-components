import { useState } from 'react';
import styles from '../App.module.css'; 

export default function Cart({ cart, setCart }) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <div
            className={styles.cartIconWrapper}
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}            
        >
            <img src="./src/assets/cart-shape-grey.svg" alt="Cart icon" styles={styles.cartIcon} />
            
            {cart.length > 0 ? <span className={styles.cartNum}>{cart.length}</span> : null}
            
            {cartOpen && <div className={styles.openCart}>Your cart items here {cart}</div>}
        </div>
    )
}