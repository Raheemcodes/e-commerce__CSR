import classes from './QualityBtn.module.scss';

const QualityBtn = (): JSX.Element => {
  return (
    <div className={classes['quantity-container']}>
      <button
        className={`${classes['quantity-control']} ${classes['increment']}`}
      >
        <div className={classes['horizontal']}></div>
      </button>

      <div className={classes['quantity']}>0</div>

      <button
        className={`${classes['quantity-control']} ${classes['decrement']}`}
      >
        <div className={classes['horizontal']}></div>
        <div className={classes['vertical']}></div>
      </button>
    </div>
  );
};

export default QualityBtn;
