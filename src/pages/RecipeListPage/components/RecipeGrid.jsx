import RecipeCard from "./RecipeCard.jsx";

import styles from "./RecipeGrid.module.css"

const RecipeGrid = () => {
  return (
    <ul className={styles.recipeGrid}>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
    </ul>
  );
};

export default RecipeGrid;