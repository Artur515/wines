import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';

function Button({ props }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('./');
  };

  return (
    <div className={style.btnWrap}>
      <button type="button" onClick={handleClick} className={style.button}>
        All wines
      </button>
    </div>
  );
}

export default Button;
