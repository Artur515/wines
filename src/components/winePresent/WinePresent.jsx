import React, { useState } from 'react';
import styles from './style.module.scss';
import wine from '../../img/wine.jpg';

function WinePresent({ props }) {
  const [visibilityStyle, setVisibilityStyle] = useState(false);

  const handlePopupClick = (event) => {
    setVisibilityStyle(!visibilityStyle);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handlePopupClick();
    }
  };
  const textVision = {
    visibility: 'visible',
    opacity: '1',
  };

  return (
    <div
      className={styles.card}
      id={props.id}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handlePopupClick}
    >
      <img className={styles.img} src={props.image ? props.image : wine} alt={props.wine} />
      <div>
        <h4 className={styles.h4}>{props.wine}</h4>
        <p className={styles.p}>{props.winery}</p>
        <p className={styles.p}>{props.location}</p>
        <p
          className={styles.text}
          style={visibilityStyle ? textVision : null}
        >
          Average:
          {props.rating ? props.rating.average : ''}
        </p>
        <p
          className={styles.text2}
          style={visibilityStyle ? textVision : null}
        >
          Reviews:
          {props.rating ? props.rating.reviews : ''}
        </p>
      </div>
    </div>
  );
}

export default WinePresent;
