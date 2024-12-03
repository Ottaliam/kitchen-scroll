import styles from './NutritionFacts.module.css';

import PropTypes from 'prop-types';

const NutritionFacts = ({ nutrition }) => {
  return (
    <div>
      <h2>Nutrition Facts</h2>
      <ul className={styles.nutritionFacts}>
        <li><span></span><span></span><span>% Daily Value</span></li>
        <li><span>Total Fat</span><span>{nutrition.totalFat}</span><span>9%</span></li>
        <li><span>Cholesterol</span><span>{nutrition.cholesterol}</span><span>2%</span></li>
        <li><span>Sodium</span><span>{nutrition.sodium}</span><span>4%</span></li>
        <li><span>Total Carbohydrate</span><span>{nutrition.totalCarbohydrate}</span><span>9%</span></li>
        <li><span>Protein</span><span>{nutrition.protein}</span><span></span></li>
      </ul>
    </div>
  );
};

NutritionFacts.propTypes = {
  nutrition: PropTypes.shape({
    totalFat: PropTypes.string.isRequired,
    cholesterol: PropTypes.string.isRequired,
    sodium: PropTypes.string.isRequired,
    totalCarbohydrate: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
  }).isRequired,
};

export default NutritionFacts;