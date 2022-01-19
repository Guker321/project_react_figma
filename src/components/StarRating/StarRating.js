import React from 'react';
import styles from './StarRating.module.css';

export default function StarRating(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rating}>
        <div className={styles.rating_items}>
          <input id='rating_5' className={styles.rating_item} name='rating' type='radio' value='5' />
          <label htmlFor='rating_5' className={styles.rating_label}></label>
          <input id='rating_4' className={styles.rating_item} name='rating' type='radio' value='4' />
          <label htmlFor='rating_4' className={styles.rating_label}></label>
          <input id='rating_3' className={styles.rating_item} name='rating' type='radio' value='3' />
          <label htmlFor='rating_3' className={styles.rating_label}></label>
          <input id='rating_2' className={styles.rating_item} name='rating' type='radio' value='2' />
          <label htmlFor='rating_2' className={styles.rating_label}></label>
          <input id='rating_1' className={styles.rating_item} name='rating' type='radio' value='1' />
          <label htmlFor='rating_1' className={styles.rating_label}></label>
        </div>
      </div>
    </div>
  );
}
