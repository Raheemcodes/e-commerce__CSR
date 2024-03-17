import CartBtn from '../icons/CartBtn';
import Logo from '../icons/Logo';
import ToggleBtn from '../icons/ToggleBtn';
import classes from './Header.module.scss';
import Avatar from '../../assets/images/avatar/image-avatar.png';
import DesktopNav from './DesktopNav';

const Header = (): JSX.Element => {
  return (
    <>
      <header className={classes['header']}>
        <div className={classes['left']}>
          <button className={classes['toggle-btn']}>
            <ToggleBtn />
          </button>

          <div className={classes['logo']}>
            <Logo />
          </div>

          <DesktopNav />
        </div>

        <div className={classes['right']}>
          <div className={classes['cart-btn']}>
            <CartBtn />
          </div>

          <div className={classes['pfp']}>
            <img src={Avatar} width={100} height={100} alt='Profile Avatar' />
          </div>
        </div>
        <div className={classes['nav-item__border']}></div>
      </header>

      <div className={classes['underline']}></div>
    </>
  );
};

export default Header;
