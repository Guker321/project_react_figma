import styles from './StepThree.module.css';

import picture_giveaway_step_1 from '../../assets/picture_giveaway_step_1.png';

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
        <div className={styles.current_circle}>
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
        <h2>Step 3</h2>
        <h3>Amazon Prime</h3>
        <p>Do you have an Amazon Prime account?</p>
        <p>
          To be able to participate in this giveaway you need to have Amazon
          Prime.
        </p>
        <ol>
          <li>Mauris rutrum interdum condimentum.</li>
          <li>Donec commodo quis arcu eget pretium.</li>
        </ol>
        <div className={styles.btns}>
          <a className={styles.step_link} href='/'>
            YES, I HAVE
          </a>
          <a className={`${styles.step_link} ${styles.link_secondary}`} href='/'>
            NO, I DON'T HAVE
          </a>
        </div>
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
