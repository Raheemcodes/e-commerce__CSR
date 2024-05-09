import { NavLink } from 'react-router-dom';
import { Product } from '../../utilities/products.utility';
import classes from './Thumbnail.module.scss';

const Thumbnail = ({ product }: { product: Product }): JSX.Element => {
  const isActive = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? `${classes['item']} ${classes['active']}`
      : classes['item'];
  };

  return (
    <ul className={classes['list']}>
      {product.thumbnails.map((thumbnail, idx) => (
        <NavLink
          to={product.images[idx].id}
          className={isActive}
          key={product.images[idx].id}
        >
          <img
            width={176}
            height={176}
            src={thumbnail}
            alt={`${product.title} ${idx + 1}`}
            loading='lazy'
          />
        </NavLink>
      ))}
    </ul>
  );
};

export default Thumbnail;
