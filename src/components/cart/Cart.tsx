import { useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../store/cart.context';
import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = (): JSX.Element => {
  const cartCtx = useContext(CartContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let timeout: NodeJS.Timeout[] = [];

    if (cartCtx.isOpen) {
      container!.style.display = 'block';

      timeout[0] = setTimeout(() => {
        container?.classList.add(classes['opened']);
      }, 0);
    } else {
      container?.classList.remove(classes['opened']);

      timeout[1] = setTimeout(() => {
        container!.style.display = 'none';
      }, 300);
    }
  }, [cartCtx.isOpen]);

  return (
    <div className={classes['container']} ref={containerRef}>
      <header className={classes['header']}>
        <h1 className={classes['title']}>Cart</h1>
      </header>

      <div className={classes['content']}>
        {cartCtx.cartList.length > 0 && (
          <>
            <ul className={classes['cart-list']}>
              {cartCtx.cartList.map((cart) => (
                <CartItem key={cart.id} prod={cart} />
              ))}
            </ul>
            <button type='submit' className={classes['checkout-btn']}>
              Checkout
            </button>
          </>
        )}

        {cartCtx.cartList.length === 0 && (
          <h2 className={classes['msg']}>Your cart is empty.</h2>
        )}
      </div>
    </div>
  );
};

export default Cart;
