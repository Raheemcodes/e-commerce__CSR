import { useEffect, useRef, useState } from 'react';
import { Product } from '../../utilities/products.utility';
import Backdrop from '../backdrop/Backrop';
import CloseImageBtn from '../icons/CloseImageBtn';
import Navigation from '../icons/Navigation';
import Thumbnail from '../thumbnail/Thumbnail';
import classes from './Image.module.scss';
import { useNavigate, useParams } from 'react-router-dom';

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
  const { productId } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (productId) {
      setIndex(+productId!.split('')[1]);
    } else {
      timeout = setTimeout(() => {
        setIndex(0);
      }, 300);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [productId]);

  const next = () => {
    if (index < 3) {
      navigate('s' + (index + 1));
    }
  };

  const prev = () => {
    if (index > 0) {
      navigate('s' + (index - 1));
    }
  };

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
          <button
            type='button'
            className={classes['close-btn']}
            onClick={onClose}
          >
            <CloseImageBtn />
          </button>

          <ul className={classes['list']}>
            {product.images.map((image) => (
              <li
                className={classes['item']}
                key={image.id}
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                <img
                  width={1000}
                  height={1000}
                  src={image.src}
                  alt={product.title}
                  loading='lazy'
                />
              </li>
            ))}

            {index > 0 && (
              <button
                type='button'
                className={`${classes['navigation']} ${classes['left']}`}
                onClick={prev}
              >
                <Navigation />
              </button>
            )}
            {index < 3 && (
              <button
                type='button'
                className={`${classes['navigation']} ${classes['right']}`}
                onClick={next}
              >
                <Navigation />
              </button>
            )}
          </ul>

          <div className={classes['thumbnail-container']}>
            <Thumbnail product={product} />
          </div>
        </div>

        <div className={classes['backdrop-container']}>
          <Backdrop duration={300} isOpen={isOpen} onClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default Image;
