import styles from './IngredientsList.module.css';

import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul className={styles.list}>
        {ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsList;