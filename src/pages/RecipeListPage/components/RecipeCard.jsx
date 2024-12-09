import { MdAccessTimeFilled } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import {useNavigate} from "react-router";

import breakfast from "../../../assets/breakfast.jpg"
import lunch from "../../../assets/lunch.jpg"
import dinner from "../../../assets/dinner.jpg"
import dessert from "../../../assets/dessert.jpg"
import styles from "./RecipeCard.module.css"

import PropTypes from 'prop-types';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const getCardImage = (category) => {
    switch (category) {
      case "breakfast":
        return breakfast;
      case "lunch":
        return lunch;
      case "dinner":
        return dinner;
      case "dessert":
        return dessert;
    }
  }

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      tabIndex="0"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.defaultMuiPrevented = true;
          navigate(`/recipe/${recipe.id}`);
        }
      }}
    >
      <img src={getCardImage(recipe.category)} alt="" />
      <h2>{recipe.name}</h2>
      <div>
        <span><MdAccessTimeFilled /> {recipe.estimateTime}</span>
        <span><BiSolidDish /> {recipe.servings} serving(s)</span>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    category: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    estimateTime: PropTypes.string.isRequired,
    servings: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeCard;