import styles from './ProductCart.module.css';

const ProductCart = (props) => {
  return <section className={styles['product-section']}>{props.children}</section>
}

export default ProductCart;