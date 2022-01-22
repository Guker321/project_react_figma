import styles from './StepFive.module.css';

import picture_giveaway_step_1 from '../../assets/picture_giveaway_step_1.png';

import amazon_sm from '../../assets/amazon_sm.png';

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
        <div className={styles.latest_circle}>
          <span>4</span>
        </div>
        <div className={`${styles.stepper__line} ${styles.current_line}`}></div>
        <div className={styles.current_circle}>
          <span>5</span>
        </div>
      </div>

      <div className={styles.step_description}>
        <h2>Step 5</h2>
        <h3>Buy and Provide order ID to our Manager</h3>
        <p>Click the button GO TO AMAZON and Buy a Product</p>

        <a
          className={`${styles.step_link} ${styles.amazon_btn}`}
          href='https://www.amazon.com/'
          target='_blank'
          rel='noreferrer'>
          GO TO AMAZON <img src={amazon_sm} alt='amazon icon' />
        </a>
        <p>
          Click on the button below and{' '}
          <strong>Provide Order ID to our Manager</strong> in FB Messenger
        </p>
        <em>(If you have any questions, you can ask them to our Manager)</em>
        <a className={`${styles.step_link} ${styles.amazon_btn}`} href='/'>
          PROVIDE ORDER ID
        </a>
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
