import RecipeCard from "./RecipeCard.jsx";

import styles from "./RecipeGrid.module.css"
import PropTypes from 'prop-types';

const RecipeGrid = ({ recipes }) => {
  return (
    <ul className={styles.recipeGrid}>
      {recipes.map((recipe) => <li key={recipe.id}><RecipeCard recipe={recipe} /></li>)}
    </ul>
  );
};

RecipeGrid.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeGrid;