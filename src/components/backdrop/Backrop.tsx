import { useEffect, useRef } from 'react';
import classes from './Backrop.module.scss';

const Backdrop = ({
  isOpen,
  duration,
  onClick,
}: {
  isOpen: boolean;
  duration: number;
  onClick: () => void;
}): JSX.Element => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = divRef.current;
    let timeout: NodeJS.Timeout[] = [];

    if (isOpen) {
      div!.style.display = 'block';

      timeout[0] = setTimeout(() => {
        div!.style.opacity = '0.7';
      }, 0);
    } else {
      div!.style.opacity = '0';

      timeout[1] = setTimeout(() => {
        div!.style.display = 'none';
      }, duration);
    }

    return () => {
      timeout.forEach((timeout) => clearTimeout(timeout));
    };
  });

  return (
    <div
      className={classes['backdrop']}
      ref={divRef}
      style={{ transition: `opacity ${duration}ms ease-out` }}
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
