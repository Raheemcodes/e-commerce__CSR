import { useEffect, useRef } from 'react';
import { Product } from '../../utilities/products.utility';
import Backdrop from '../backdrop/Backrop';
import CloseImageBtn from '../icons/CloseImageBtn';
import Navigation from '../icons/Navigation';
import Thumbnail from '../thumbnail/Thumbnail';
import classes from './Image.module.scss';

const Image = ({
  product,
  isOpen,
  onClose,
}: {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let timeout: NodeJS.Timeout[] = [];

    if (isOpen) {
      container!.classList.remove(classes['display-none']);

      timeout[0] = setTimeout(() => {
        container!.classList.add(classes['opened']);
      }, 0);
    } else {
      container!.classList.remove(classes['opened']);

      timeout[1] = setTimeout(() => {
        container!.classList.add(classes['display-none']);
      }, 300);
    }

    return () => {
      timeout.forEach((timeout) => clearTimeout(timeout));
    };
  });

  return (
    <>
      <div
        className={`${classes['main-container']} ${classes['display-none']}`}
        ref={containerRef}
      >
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
        <Backdrop duration={300} isOpen={isOpen} onClick={onClose} />
      </div>
    </>
  );
};

export default Image;
