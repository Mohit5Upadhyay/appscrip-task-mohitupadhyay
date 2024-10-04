import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </div>
      <p className={styles.footerText}>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
