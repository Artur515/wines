import React, { useCallback, useState } from 'react';
import styles from './style.module.scss';
import wine from '../../img/wine.jpg';

function WineCard({ props }) {
  const [visibilityStyle, setVisibilityStyle] = useState(false);

  const onPopupClick = useCallback(() => {
    setVisibilityStyle(!visibilityStyle);
  }, [visibilityStyle]);

  const onKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onPopupClick();
    }
  }, [onPopupClick]);

  const tooltipClassName = `${styles.tooltip} ${visibilityStyle ? styles.tooltipVisible : ''}`;
  const reviewsClassName = `${styles.reviewsTooltip} ${visibilityStyle ? styles.tooltipVisible : ''}`;

  return (
    <div
      className={styles.card}
      id={props.id}
      role="button"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onClick={onPopupClick}
    >
      <img className={styles.image} src={props.image ? props.image : wine} alt={props.wine} />
      <div>
        <h4 className={styles.title}>{props.wine}</h4>
        <p className={styles.meta}>{props.winery}</p>
        <p className={styles.meta}>{props.location}</p>
        <p
          className={tooltipClassName}
        >
          Average:
          {props.rating ? props.rating.average : ''}
        </p>
        <p
          className={reviewsClassName}
        >
          Reviews:
          {props.rating ? props.rating.reviews : ''}
        </p>
      </div>
    </div>
  );
}

export default WineCard;
