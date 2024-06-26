import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CartIcon from '../../components/icons/CartIcon';
import Image from '../../components/image/Image';
import QualityBtn from '../../components/quality-btn/QualityBtn';
import Thumbnail from '../../components/thumbnail/Thumbnail';
import { product } from '../../utilities/products.utility';
import classes from './Home.module.scss';
import { CartContext } from '../../store/cart.context';

const Home = (): JSX.Element => {
  const cartCtx = useContext(CartContext);
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const { productId } = useParams();
  const [quantity, setQuantity] = useState<number>(0);
  const navigate = useNavigate();

  const incrementQuantity = () => setQuantity((prevState) => prevState + 1);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const addToCart = () => {
    if (quantity > 0) {
      cartCtx.add({
        id: product.id,
        title: product.title,
        image: product.thumbnails[0],
        price: product.discount * product.price,
        quantity,
      });

      setQuantity(0);
    }
  };

  useEffect(() => {
    setIsImageOpen(!!productId);
  }, [productId]);

  return (
    <>
      <Image
        isOpen={isImageOpen}
        onClose={() => navigate('/')}
        product={product}
      />

      <div className={classes['image-thumbnail__container']}>
        <div className={classes['image-container']}>
          <img
            width={1000}
            height={1000}
            src={product.images[0].src}
            alt={product.title}
            loading='lazy'
          />
        </div>

        <div className={classes['thumbnail-container']}>
          <Thumbnail product={product} />
        </div>
      </div>

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
          <QualityBtn
            quantity={quantity}
            increment={incrementQuantity}
            decrement={decrementQuantity}
          />

          <button className={classes['add-to-cart']} onClick={addToCart}>
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
