import React, { useCallback, useRef, useState } from 'react';
import wine from '../../img/wine.jpg';
import styles from './style.module.scss';

function WineCard({ props }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const closeTimerRef = useRef(null);

  const scheduleClose = useCallback(() => {
    closeTimerRef.current = setTimeout(() => {
      setIsFlipped(false);
      closeTimerRef.current = null;
    }, 500);
  }, []);

  const onCardClick = useCallback(() => {
    setIsFlipped((prev) => !prev);
  }, []);

  const onKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onCardClick();
    }
  }, [onCardClick]);

  const onImageError = useCallback((e) => {
    e.currentTarget.src = wine;
    e.currentTarget.onerror = null;
  }, []);

  const average = props.rating?.average ?? '—';
  const reviews = props.rating?.reviews ?? '—';

  return (
    <div
      className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}
      id={props.id}
      role="button"
      tabIndex={0}
      aria-pressed={isFlipped}
      onKeyDown={onKeyDown}
      onClick={onCardClick}
      onMouseLeave={scheduleClose}
      onBlur={scheduleClose}
    >
      <div className={styles.cardInner}>
        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.imageWrap}>
            <img
              className={styles.image}
              src={props.image || wine}
              alt={props.wine}
              onError={onImageError}
            />
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>{props.wine}</h4>
            <p className={styles.subtitle}>{props.winery}</p>
            {props.location ? (
              <div className={styles.locationRow}>
                <svg viewBox="0 0 24 24" width="16" height="16">
                  <path
                    d="M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="11" r="2.5" fill="#f8f6f1" />
                </svg>
                <span>{props.location}</span>
              </div>
            ) : null}
          </div>
        </div>
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.ratingRow}>
            <span className={styles.ratingLabel}>Average</span>
            <span className={styles.ratingValue}>{average}</span>
          </div>
          <div className={styles.ratingRow}>
            <span className={styles.ratingLabel}>Reviews</span>
            <span className={styles.ratingValue}>{reviews}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineCard;
