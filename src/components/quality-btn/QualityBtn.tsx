import classes from './QualityBtn.module.scss';

const QualityBtn = ({
  quantity,
  increment,
  decrement,
}: {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}): JSX.Element => {
  return (
    <div className={classes['quantity-container']}>
      <button className={classes['quantity-control']} onClick={decrement}>
        <div className={classes['horizontal']}></div>
      </button>

      <div className={classes['quantity']}>{quantity}</div>

      <button className={classes['quantity-control']} onClick={increment}>
        <div className={classes['horizontal']}></div>
        <div className={classes['vertical']}></div>
      </button>
    </div>
  );
};

export default QualityBtn;
