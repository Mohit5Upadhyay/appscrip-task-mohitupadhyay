

import { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Your Logo</div>
      
      {/* Toggle Button for Mobile */}
      <button className={styles.toggleButton} onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>

      <div className={styles.navActions}>
        <input type="text" placeholder="Search..." className={styles.searchInput} />
        <button className={styles.cartButton}>Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
