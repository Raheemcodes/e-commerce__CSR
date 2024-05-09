import classes from './Cart.module.scss';
import CartItem from './CartItem';

const Cart = (): JSX.Element => {
  return (
    <div className={classes['container']}>
      <header className={classes['header']}>
        <h1 className={classes['title']}>Cart</h1>
      </header>

      <div className={classes['content']}>
        {true && (
          <>
            <ul className={classes['cart-list']}>
              <CartItem />
            </ul>
            <button type='submit' className={classes['checkout-btn']}>
              Checkout
            </button>
          </>
        )}

        {false && <h2 className={classes['msg']}>Your cart is empty.</h2>}
      </div>
    </div>
  );
};

export default Cart;
