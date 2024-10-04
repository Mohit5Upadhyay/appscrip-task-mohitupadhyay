// import styles from '../styles/Filter.module.css';

// const RecommendationFilter = () => {
//   return (
//     <aside className={styles.filterContainer}>
//       <h2 className={styles.filterSection}>Filters</h2>
//       <div className={styles.filterSection}>
//         <h3>Price Range</h3>
//         <input type="range" min="0" max="1000" className={styles.priceRange} />
//       </div>
//       <div className={styles.filterSection}>
//         <h3>Category</h3>
//         <ul>
//           <li><input type="checkbox" /> Electronics</li>
//           <li><input type="checkbox" /> Clothing</li>
//           <li><input type="checkbox" /> Home Appliances</li>
//         </ul>
//       </div>
//       <div className={styles.filterSection}>
//         <h3>Rating</h3>
//         <input type="radio" name="rating" /> 4 stars and up
//         <br />
//         <input type="radio" name="rating" /> 3 stars and up
//       </div>
//     </aside>
//   );
// };

// export default RecommendationFilter;



import { useState } from 'react';
import styles from '../styles/Filter.module.css';

const RecommendationFilter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  return (
    <aside className={styles.filterContainer}>
      {/* Toggle Button for Mobile (only visible on mobile screens) */}
      <button className={styles.filterToggleButton} onClick={toggleFilter}>
        Filters &#9660; {/* Arrow down icon */}
      </button>

      {/* Filter Content - Visible based on the state */}
      <div className={`${styles.filterContent} ${isFilterOpen ? styles.showFilter : ''}`}>
        <h2 className={styles.filterSection}>Filters</h2>

        <div className={styles.filterSection}>
          <h3>Price Range</h3>
          <input type="range" min="0" max="1000" className={styles.priceRange} />
        </div>

        <div className={styles.filterSection}>
          <h3>Category</h3>
          <ul>
            <li><input type="checkbox" /> Electronics</li>
            <li><input type="checkbox" /> Clothing</li>
            <li><input type="checkbox" /> Home Appliances</li>
          </ul>
        </div>

        <div className={styles.filterSection}>
          <h3>Rating</h3>
          <input type="radio" name="rating" /> 4 stars and up
          <br />
          <input type="radio" name="rating" /> 3 stars and up
        </div>
      </div>
    </aside>
  );
};

export default RecommendationFilter;
