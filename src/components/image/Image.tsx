import { Product } from '../../utilities/products.utility';
import Navigation from '../icons/Navigation';
import classes from './Image.module.scss';

const Image = ({ product }: { product: Product }): JSX.Element => {
  return (
    <ul className={classes['list']}>
      {product.images.map((image, index) => (
        <li className={classes['item']} key={index}>
          <img
            width={1000}
            height={1000}
            src={image}
            alt={product.title}
            loading='lazy'
          />
        </li>
      ))}
      <button
        type='button'
        className={`${classes['navigation']} ${classes['left']}`}
      >
        <Navigation />
      </button>
      <button
        type='button'
        className={`${classes['navigation']} ${classes['right']}`}
      >
        <Navigation />
      </button>
    </ul>
  );
};

export default Image;
