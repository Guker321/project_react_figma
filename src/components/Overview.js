import styles from './Overview.module.css';

const Overview = () => {
  return (
    <section className={styles['overview']}>
      <h2 className={styles['overview__header']}>Overview</h2>
      <p className={styles['overview__subheader']}>Who It's For</p>
      <p className={styles['overview__text']}>
        Very Dry, Dry, Dry Combination Skin (Type 1, 2)
      </p>
      <p className={styles['overview__subheader']}>What It Is</p>
      <p className={styles['overview__text']}>
        Step 3 in our customized 3-Step Skincare System. Dermatologist-developed
        face moisturizer softens, smooths, improves. Leaves skin glowing.
      </p>
      <p className={styles['overview__subheader']}>What It Does</p>
      <ul className={styles['overview__ul']}>
        <li>Silky lotion delivers 8-hour hydration.</li>
        <li>Slips on easily, absorbs quickly.</li>
        <li>
          Helps strengthen skin's own moisture barrier so more moisture stays
          in. Skin that holds onto moisture has a youthful-looking glow.
        </li>
      </ul>
      <span>
        <a href='/'>Read more...</a>
      </span>
    </section>
  );
};

export default Overview;
