import { Product } from '../../utilities/products.utility';
import classes from './Thumbnail.module.scss';

const Thumbnail = ({ product }: { product: Product }): JSX.Element => {
  return (
    <ul className={classes['list']}>
      {product.thumbnails.map((thumbnail, idx) => (
        <li className={classes['item']} key={idx}>
          <img
            width={176}
            height={176}
            src={thumbnail}
            alt={`${product.title} ${idx + 1}`}
            loading='lazy'
          />
        </li>
      ))}
    </ul>
  );
};

export default Thumbnail;
