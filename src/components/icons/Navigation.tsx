import classes from './Navigation.module.scss';

const Navigation = (): JSX.Element => {
  return (
    <svg
      className={classes['svg']}
      xmlns='http://www.w3.org/2000/svg'
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
    >
      <circle cx='20' cy='20' r='20' fill='white' />
      <path
        d='M22.8572 14.2857L17.1429 20L22.8572 25.7143'
        stroke='#1D2026'
        strokeWidth='3'
      />
    </svg>
  );
};

export default Navigation;
