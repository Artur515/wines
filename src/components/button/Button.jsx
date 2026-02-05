import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const Button = ({ text }) => {
  const history = useHistory();

  const onClick = useCallback(() => {
    history.push('./');
  }, [history]);

  return (
    <div className={style.wrapper}>
      <button type="button" onClick={onClick} className={style.button}>
        {text}
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: 'Browse wines',
};
