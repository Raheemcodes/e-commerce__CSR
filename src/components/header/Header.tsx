import CartBtn from '../icons/CartBtn';
import Logo from '../icons/Logo';
import ToggleBtn from '../icons/ToggleBtn';
import classes from './Header.module.scss';
import Avatar from '../../assets/images/avatar/image-avatar.png';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useState } from 'react';
import Cart from '../cart/Cart';

const Header = (): JSX.Element => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  const toggleHandler = (state: boolean) => {
    setNavIsOpen(() => state);
  };

  return (
    <>
      <header className={classes['header']}>
        <div className={classes['left']}>
          <button
            className={classes['toggle-btn']}
            onClick={() => toggleHandler(true)}
          >
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
            <Cart />
          </div>

          <div className={classes['pfp']}>
            <img src={Avatar} width={100} height={100} alt='Profile Avatar' />
          </div>
        </div>
        <div className={classes['nav-item__border']}></div>

        <MobileNav isOpen={navIsOpen} onClose={() => toggleHandler(false)} />
      </header>

      <div className={classes['underline']}></div>
    </>
  );
};

export default Header;
