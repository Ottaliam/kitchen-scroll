import styles from './NutritionFacts.module.css';

const NutritionFacts = () => {
  return (
    <div>
      <h2>Nutrition Facts</h2>
      <ul className={styles.nutritionFacts}>
        <li><span></span><span></span><span>% Daily Value</span></li>
        <li><span>Total Fat</span><span>9g</span><span>9%</span></li>
        <li><span>Cholesterol</span><span>5mg</span><span>2%</span></li>
        <li><span>Sodium</span><span>90mg</span><span>4%</span></li>
        <li><span>Total Carbohydrate</span><span>25g</span><span>9%</span></li>
        <li><span>Protein</span><span>2g</span><span></span></li>
      </ul>
    </div>
  );
};

export default NutritionFacts;