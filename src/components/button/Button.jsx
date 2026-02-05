import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import style from './style.module.scss';

const Button = () => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push('./');
  }, [history]);

  return (
    <div className={style.wrapper}>
      <button type="button" onClick={onClick} className={style.button}>
        All wines
      </button>
    </div>
  );
};

export default Button;
