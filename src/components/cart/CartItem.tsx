import { useContext } from 'react';
import { CartContext } from '../../store/cart.context';
import { CartModel } from '../../utilities/cart.utitlity';
import DeleteBtn from '../icons/DeleteBtn';
import classes from './CartItem.module.scss';

const CartItem = ({ prod }: { prod: CartModel }): JSX.Element => {
  const cartCtx = useContext(CartContext);

  const removeFromCart = () => {
    cartCtx.remove(prod.id);
  };

  return (
    <li className={classes['item']}>
      <div className={classes['img-container']}>
        <img width={176} height={176} src={prod.image} alt={prod.title} />
      </div>
      <div className={classes['content']}>
        <h3 className={classes['title']}>{prod.title}</h3>
        <div className={classes['price-quantity__container']}>
          <div className={classes['price-quantity']}>
            ${prod.price}.00 x {prod.quantity}
          </div>
          <div className={classes['total']}>
            ${prod.price * prod.quantity}.00
          </div>
        </div>
      </div>

      <button
        type='button'
        className={classes['delete-btn']}
        onClick={removeFromCart}
      >
        <DeleteBtn />
      </button>
    </li>
  );
};

export default CartItem;
