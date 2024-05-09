import classes from './CartItem.module.scss';
import image from './../../assets/images/products/image-product-1-thumbnail.jpg';
import DeleteBtn from '../icons/DeleteBtn';

const CartItem = (): JSX.Element => {
  return (
    <li className={classes['item']}>
      <div className={classes['img-container']}>
        <img width={176} height={176} src={image} alt='Temporary' />
      </div>
      <div className={classes['content']}>
        <h3 className={classes['title']}>Fall Limited Edition Sneakers</h3>
        <div className={classes['price-quantity__container']}>
          <div className={classes['price-quantity']}>$125.00 x 3</div>
          <div className={classes['total']}>$375.00</div>
        </div>
      </div>

      <button type='button' className={classes['delete-btn']}>
        <DeleteBtn />
      </button>
    </li>
  );
};

export default CartItem;
