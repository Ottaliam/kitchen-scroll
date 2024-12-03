import { MdAccessTimeFilled } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";

import breakfast from "../../../assets/breakfast.jpg"
import styles from "./RecipeCard.module.css"

const RecipeCard = () => {
  return (
    <div className={styles.card}>
      <img src={breakfast} alt="breakfast" />
      <h2>Breakfast</h2>
      <div>
        <span><MdAccessTimeFilled /> 5 mins</span>
        <span><BiSolidDish /> 2 servings</span>
      </div>
    </div>
  );
};

export default RecipeCard;