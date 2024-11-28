import breakfast from "../../../assets/breakfast.jpg"

import styles from "./RecipeCard.module.css"

const RecipeCard = () => {
  return (
    <div className={styles.card}>
      <img src={breakfast} alt="breakfast" />
      <div>
        <h2>Breakfast</h2>
        <span>5 mins</span>
        <span>2 servings</span>
      </div>
    </div>
  );
};

export default RecipeCard;