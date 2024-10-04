import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description.substring(0, 100)}...</p>
      <span>${product.price}</span>
    </div>
  );
};

export default ProductCard;
