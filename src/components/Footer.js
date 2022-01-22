import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer__privacy}>
          <ul>
            <li className={styles.footer__heading}>Privacy and Terms</li>
            <li>
              <a href='/'>Privacy Policy</a>
            </li>
            <li>
              <a href='/'>Terms of use</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer__help}>
          <ul>
            <li className={styles.footer__heading}>Need Help?</li>
            <li>
              <a href='/'>mail@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className={styles.footer__social}>
          <ul>
            <li className={styles.footer__heading}>Social</li>
            <li>
              <a href='/'>Facebook</a>
            </li>
            <li>
              <a href='/'>Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className={styles.rights}>© All Rights Reserved</div>
    </>
  );
};

export default Footer;
