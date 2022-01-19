import img1 from '../assets/product_1.png';
import img2 from '../assets/product_2.png';
import img3 from '../assets/product_3.png';
import img1_big from '../assets/product_1_big.png';
import amazon_prime_logo from '../assets/amazon_prime_logo.png';

import arrowUp from '../assets/svg/arrow_up.svg';
import arrowDown from '../assets/svg/arrow_down.svg';
import banner_bg from '../assets/svg/banner_bg.svg';

import StarRating from './StarRating/StarRating';

import styles from './Product.module.css';

const Product = () => {
  return (
    <section className={styles['section-product']}>
      <div className={styles['product-preview']}>
        <div className={styles['product-images__switcher']}>
          <button>
            <span>
              <img src={arrowUp} alt='arrow up' />
            </span>
          </button>
          <img className={`${styles['product-images__smallImg']} ${styles.active}`} src={img1} alt='product img 1' />
          <img className={styles['product-images__smallImg']} src={img2} alt='product img 2' />
          <img className={styles['product-images__smallImg']} src={img3} alt='product img 3' />
          <button>
            <img src={arrowDown} alt='arrow down' />
          </button>
        </div>
        <div className={styles['product-images__previewImg']}>
          <img src={img1_big} alt='Big of preview' />
        </div>
      </div>
      <div className={styles['product-description']}>
        <div className={styles['description__header']}>
          <p>Best Seller</p>
          <div className={styles.rating}>
            <StarRating />
            <span>(1731 reviews)</span>
          </div>
        </div>
        <div className={styles['description__body']}>
          <h2>Acne Treatment Cystic Acne heals, repairs & renews</h2>
          <p>Description:</p>
          <span>
            Addictively refreshing gel-cream leaves skin plump, dewy, glowing.
          </span>
          <div className={styles['description__count']}>
            <span>ITEMS LEFT: 12</span>
            <div className={styles['description__line']}>
              <img src={banner_bg} alt='Line before actions about buying' />
            </div>
            <div className={styles['sell']}>
              <div className={styles.prices}>
                <del>US$25.89</del>
                <p>$0.00 FREE</p>
              </div>
              <button className={styles['sell__btn']}>SELECT</button>
              <img
                className={styles['sell__logo']}
                src={amazon_prime_logo}
                alt='amazon logo'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
