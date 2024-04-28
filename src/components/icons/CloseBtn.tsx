import classes from './CloseBtn.module.scss';

const CloseBtn = () => {
  return (
    <svg
      className={classes['svg']}
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.99998 5.37868L2.40379 0.782486L0.282471 2.90381L4.87866 7.5L0.282471 12.0962L2.40379 14.2175L6.99999 9.62132L11.5962 14.2175L13.7175 12.0962L9.12131 7.5L13.7175 2.90381L11.5962 0.782486L6.99998 5.37868Z'
        fill='#69707D'
      />
    </svg>
  );
};

export default CloseBtn;
