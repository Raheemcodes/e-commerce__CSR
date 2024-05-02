import CartIcon from '../../components/icons/CartIcon';
import Image from '../../components/image/Image';
import { product } from '../../utilities/products.utility';
import classes from './Home.module.scss';

const Home = (): JSX.Element => {
  return (
    <>
      <Image product={product} />

      <div className={classes['content']}>
        <div className={classes['title-orange']}>Sneaker Company</div>
        <h2 className={classes['title']}>{product.title}</h2>

        <p className={classes['desc']}>{product.desc}</p>

        <div className={classes['price-section']}>
          <div className={classes['price-discount__container']}>
            <div className={classes['price']}>
              ${product.price * product.discount}
            </div>
            <div className={classes['discount']}>{product.discount * 100}%</div>
          </div>

          <div className={classes['undiscounted-price']}>${product.price}</div>
        </div>

        <div className={classes['btn-actions']}>
          <div className={classes['quantity-container']}>
            <button
              className={`${classes['quantity-control']} ${classes['increment']}`}
            >
              <div className={classes['horizontal']}></div>
            </button>

            <div className={classes['quantity']}>0</div>

            <button
              className={`${classes['quantity-control']} ${classes['decrement']}`}
            >
              <div className={classes['horizontal']}></div>
              <div className={classes['vertical']}></div>
            </button>
          </div>

          <button className={classes['add-to-cart']}>
            <div className={classes['cart-icon__container']}>
              <CartIcon />
            </div>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
