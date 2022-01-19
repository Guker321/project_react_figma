import styles from './How.module.css';

// svg
import choose_product from '../assets/svg/choose_product.svg';
import buy_product from '../assets/svg/buy_product.svg';
import test_and_share from '../assets/svg/test_and_share.svg';
import money_back from '../assets/svg/money_back.svg';
import easy_text from '../assets/svg/easy_text.svg'
import how_arrow from '../assets/svg/how_arrow.svg';

const How = () => {
  return (
    <section className={styles.how}>
      <h2>How does it work?</h2>

      <div className={styles.how__features}>
        <div className={styles.how__feature}>
          <div className={styles.how__img_block}>
          <img src={easy_text} alt='' />
          </div>
        </div>
        <div>
          <img src={how_arrow} alt='' />
        </div>
        <div className={styles.how__feature}>
          <div className={styles.how__img_block}>
            <img src={choose_product} alt='' />
          </div>
          <p className={styles.how__description}>Choose Product</p>
        </div>
        <div>
          <img src={how_arrow} alt='' />
        </div>
        <div className={styles.how__feature}>
          <div className={styles.how__img_block}>
            <img src={buy_product} alt='' />
          </div>
          <p className={styles.how__description}>Buy product</p>
        </div>
        <div>
          <img src={how_arrow} alt='' />
        </div>
        <div className={styles.how__feature}>
          <div className={styles.how__img_block}>
            <img src={test_and_share} alt='' />
          </div>
          <p className={styles.how__description}>Test and share review</p>
        </div>
        <div>
          <img src={how_arrow} alt='' />
        </div>
        <div className={styles.how__feature}>
          <div className={styles.how__img_block}>
            <img src={money_back} alt='' />
          </div>
          <p className={styles.how__description}>Get 100% money back</p>
        </div>
      </div>
    </section>
  );
};

export default How;

// <div className={styles.how__feature}>
// <div className={styles.how__img_block}>
//   <img src={buy_product} alt='' />
// </div>
// <p className={styles.how__description}>CHOOSE PRODUCT</p>
// </div>

// <div className={styles.how__feature}>
// <div className={styles.how__img_block}>
//   <img src={test_and_share} alt='' />
// </div>
// <p className={styles.how__description}>CHOOSE PRODUCT</p>
// </div>

// <div className={styles.how__feature}>
// <div className={styles.how__img_block}>
//   <img src={money_back} alt='' />
// </div>
// <p className={styles.how__description}>CHOOSE PRODUCT</p>
// </div>
