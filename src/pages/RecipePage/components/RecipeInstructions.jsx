import styles from './RecipeInstructions.module.css';
import PropTypes from 'prop-types';

const RecipeInstructions = ({ steps }) => {
  return (
    <div tabIndex="0">
      <h2>Instructions</h2>
      <ol className={styles.list}>
        {steps.map((step, index) => (<li key={index}>{step}</li>))}
      </ol>
    </div>
  );
};

RecipeInstructions.propTypes = {
  steps: PropTypes.array.isRequired,
};

export default RecipeInstructions;