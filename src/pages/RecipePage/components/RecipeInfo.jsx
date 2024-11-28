import styles from './RecipeInfo.module.css';

const RecipeInfo = () => {
  return (
    <div className={styles.recipeInfo}>
      <h2>Chocolate Pie</h2>
      <ul>
        <li>
          <span>Estimate Time:</span>
          <span>10 mins</span>
        </li>
        <li>
          <span>For:</span>
          <span>6 people servings</span>
        </li>
      </ul>
    </div>
  );
}

export default RecipeInfo;