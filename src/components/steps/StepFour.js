import { Link } from 'react-router-dom';

import styles from './StepFour.module.css';

import picture_giveaway_step_1 from '../../assets/picture_giveaway_step_1.png';
import num_gift from '../../assets/num_gift.png';

const StepOne = () => {
  return (
    <section className={styles.section_step}>
      <div className={styles.stepper}>
        <div className={`${styles.latest_circle}`}>
          <span>1</span>
        </div>
        <div className={`${styles.stepper__line} ${styles.current_line}`}></div>
        <div className={`${styles.latest_circle}`}>
          <span>2</span>
        </div>
        <div className={`${styles.stepper__line} ${styles.current_line}`}></div>
        <div className={styles.latest_circle}>
          <span>3</span>
        </div>
        <div className={`${styles.stepper__line} ${styles.current_line}`}></div>
        <div className={styles.current_circle}>
          <span>4</span>
        </div>
        <div className={styles.stepper__line}></div>
        <div className={styles.stepper__circle}>
          <span>5</span>
        </div>
      </div>

      <div className={styles.step_description}>
        <h2>Step 4</h2>
        <h3>How to Buy a Product with 100% BONUS!</h3>
        <div className={styles.offer_list}>
          <ul className={styles.offer_ul}>
            <li>
              <div className={styles.offer_icon}>1</div>
              <span>
                You need to Buy our Product on Amazon at the specified price
                $20.89!
              </span>
            </li>
            <li>
              <div className={styles.offer_icon}>2</div>
              <span>
                After the purchase - Send us your Order Number or the Screenshot
                to our manager in FB Messenger
              </span>
            </li>
            <li>
              <div className={styles.offer_icon}>3</div>
              <span>
                When you receive the product please use it and share product
                reviews
              </span>
            </li>
            <li>
              <div className={styles.offer_icon}>4</div>
              <span>
                We will send you the <strong>25$ Amazon Gift Card code within</strong> 24 hours
                after we get short review from you.
              </span>
            </li>
            <li>
              <div className={styles.offer_icon}>
                <img src={num_gift} alt='gift icon' />
              </div>
              <span>As a result, you will receive our Product Free!</span>
            </li>
          </ul>
        </div>
        <Link to='/main/step-five' className={styles.step_link}>
          AGREE AND CONTINUE
        </Link>
      </div>
      <div className={styles.step_img}>
        <picture>
          <img src={picture_giveaway_step_1} alt='background with cream' />
        </picture>
      </div>
    </section>
  );
};

export default StepOne;
