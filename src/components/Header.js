import imgBanner from '../assets/banner_picture.png';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <div>
          <h1>Autumn Giveaways for FREE</h1>
          <p>
            Participate in Autumn Giveaway and treat yourself to nice and
            refreshing cosmetics for free
          </p>
        </div>
      </div>
      <img src={imgBanner} alt='banner' />
    </header>
  );
};

export default Header;
