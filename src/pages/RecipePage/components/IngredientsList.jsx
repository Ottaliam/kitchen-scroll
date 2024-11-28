import styles from './IngredientsList.module.css';

const IngredientsList = () => {
  return (
    <div>
      <h2>Ingredients</h2>
      <ul className={styles.list}>
        <li>Ingredient #1</li>
        <li>Ingredient #2</li>
        <li>Ingredient #3</li>
        <li>Ingredient #4</li>
        <li>Ingredient #5</li>
        <li>Ingredient #6</li>
      </ul>
    </div>
  );
};

export default IngredientsList;