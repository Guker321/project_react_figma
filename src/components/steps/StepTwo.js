import styles from './StepTwo.module.css';

import { Link } from 'react-router-dom';

import facebook_post from '../../assets/facebook_post.png';
import press_here_block from '../../assets/press_here_block.png';

const StepOne = () => {
  return (
    <section className={styles.section_step}>
      <div className={styles.stepper}>
        <div className={`${styles.latest_circle}`}>
          <span>1</span>
        </div>
        <div className={`${styles.stepper__line} ${styles.current_line}`}></div>
        <div className={`${styles.current_circle}`}>
          <span>2</span>
        </div>
        <div className={styles.stepper__line}></div>
        <div className={styles.stepper__circle}>
          <span>3</span>
        </div>
        <div className={styles.stepper__line}></div>
        <div className={styles.stepper__circle}>
          <span>4</span>
        </div>
        <div className={styles.stepper__line}></div>
        <div className={styles.stepper__circle}>
          <span>5</span>
        </div>
      </div>

      <div className={styles.step_description}>
        <h2>Step 2</h2>
        <h3>Share Facebook post</h3>
        <p>
          To participate in this giveaway please share this giveaway offer with
          your friends. Not only your friends will appreciate this offer but you
          will receive $10 Amazon Gift Card for each of your friends that
          participates in this giveaway!
        </p>
        <Link to='/main/step-three' className={styles.step_link}>
          CONTINUE
        </Link>
      </div>
      <div className={styles.step_img}>
        <picture>
          <img src={facebook_post} alt='background with cream' />
        </picture>
        <picture>
          <img className={styles.press_btn} src={press_here_block} alt='background with cream' />
        </picture>
      </div>
    </section>
  );
};

export default StepOne;
