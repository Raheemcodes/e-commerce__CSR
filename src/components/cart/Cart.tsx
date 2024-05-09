import classes from './Cart.module.scss';

const Cart = (): JSX.Element => {
  return (
    <div className={classes['container']}>
      <header className={classes['header']}>
        <h1 className={classes['title']}>Cart</h1>
      </header>
      <div className={classes['content']}></div>
    </div>
  );
};

export default Cart;
