import Backdrop from '../backdrop/Backrop';
import CloseBtn from '../icons/CloseBtn';
import classes from './MobileNav.module.scss';

const MobileNav = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}): JSX.Element => {
  return (
    <>
      <nav
        className={
          isOpen ? `${classes['nav']} ${classes['opened']}` : classes['nav']
        }
      >
        <button className={classes['close-btn']} onClick={onClose}>
          <CloseBtn />
        </button>

        <ul className={classes['nav-list']}>
          <li className={classes['nav-item']}>Collections</li>
          <li className={classes['nav-item']}>Men</li>
          <li className={classes['nav-item']}>Women</li>
          <li className={classes['nav-item']}>About</li>
          <li className={classes['nav-item']}>Contact</li>
        </ul>
      </nav>

      <Backdrop isOpen={isOpen} duration={300} onClick={onClose} />
    </>
  );
};

export default MobileNav;
