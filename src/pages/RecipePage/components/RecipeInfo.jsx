import styles from './RecipeInfo.module.css';

import PropTypes from 'prop-types';

const RecipeInfo = ({ name, estimateTime, servings }) => {
  return (
    <div className={styles.recipeInfo}>
      <h2>{name}</h2>
      <ul>
        <li>
          <span>Estimate Time:</span>
          <span>{estimateTime}</span>
        </li>
        <li>
          <span>For:</span>
          <span>{servings} servings</span>
        </li>
      </ul>
    </div>
  );
}

RecipeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  estimateTime: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
};

export default RecipeInfo;