import { Link } from 'react-router-dom';

import styles from './StepOne.module.css';

import picture_giveaway_step_1 from '../../assets/picture_giveaway_step_1.png';

const StepOne = () => {
  return (
    <section className={styles.section_step}>
      <div className={styles.stepper}>
        <div className={`${styles.current_circle}`}>
          <span>1</span>
        </div>
        <div className={`${styles.stepper__line}`}></div>
        <div className={`${styles.stepper__circle}`}>
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
        <h2>Step 1</h2>
        <h3>Lorem ipsum dolor sit amet</h3>
        <p>
          Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet
          metus. Curabitur at luctus massa. Vestibulum pretium sem tortor, vitae
          mattis odio accumsan vitae. Fusce id luctus erat:
        </p>
        <ol>
          <li>Mauris rutrum interdum condimentum.</li>
          <li>Donec commodo quis arcu eget pretium.</li>
        </ol>
        <Link className={styles.step_link} to='/main/step-two'>
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
