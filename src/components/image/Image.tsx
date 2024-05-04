import { Product } from '../../utilities/products.utility';
import Backdrop from '../backdrop/Backrop';
import CloseImageBtn from '../icons/CloseImageBtn';
import Navigation from '../icons/Navigation';
import Thumbnail from '../thumbnail/Thumbnail';
import classes from './Image.module.scss';

const Image = ({ product }: { product: Product }): JSX.Element => {
  return (
    <>
      <div className={classes['container']}>
        <button type='button' className={classes['close-btn']}>
          <CloseImageBtn />
        </button>

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

        <div className={classes['thumbnail-container']}>
          <Thumbnail product={product} />
        </div>
      </div>
      <Backdrop duration={300} isOpen={true} onClick={() => {}} />
    </>
  );
};

export default Image;
