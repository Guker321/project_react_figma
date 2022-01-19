import styles from './StepOne.module.css';

const StepOne = () => {
  return (
    <section>
      <div className={styles.stepper}>
        <div className={styles.stepper__circle}>
          <span>1</span>
        </div>
        <div className={styles.stepper__line}></div>
      </div>
    </section>
  );
};

export default StepOne;
