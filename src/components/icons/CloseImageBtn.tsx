import classes from './CloseImageBtn.module.scss';

const CloseImageBtn = (): JSX.Element => {
  return (
    <svg
      className={classes['svg']}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M20 2.85714L17.1429 0L10 7.14286L2.85714 0L0 2.85714L7.14286 10L0 17.1429L2.85714 20L10 12.8571L17.1429 20L20 17.1429L12.8571 10L20 2.85714Z'
        fill='white'
      />
    </svg>
  );
};

export default CloseImageBtn;
