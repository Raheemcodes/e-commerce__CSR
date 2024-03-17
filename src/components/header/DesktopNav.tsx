import classes from './DesktopNav.module.scss';

const DesktopNav = (): JSX.Element => {
  return (
    <ul className={classes['nav-list']}>
      <li className={classes['nav-item']}>Collections</li>
      <li className={classes['nav-item']}>Men</li>
      <li className={classes['nav-item']}>Women</li>
      <li className={classes['nav-item']}>About</li>
      <li className={classes['nav-item']}>Contact</li>
    </ul>
  );
};

export default DesktopNav;
