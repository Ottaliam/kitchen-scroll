import {useParams} from "react-router";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipeInfo from "./components/RecipeInfo.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import RecipeInstructions from "./components/RecipeInstructions.jsx";
import NutritionFacts from "./components/NutritionFacts.jsx";

import recipes from "../../utils/recipes.js";
import styles from './RecipePage.module.css';

const RecipePage = () => {
  const { recipeId } = useParams();
  console.log(`Recipe ID: ${recipeId}`);
  const recipe = recipes.find(recipe => recipe.id === Number(recipeId));

  return (
    <>
      <Header />
      <main className={styles.main}>
        <RecipeInfo name={recipe.name} estimateTime={recipe.estimateTime} servings={recipe.servings} />
        <IngredientsList ingredients={recipe.ingredients} />
        <RecipeInstructions steps={recipe.steps} />
        <NutritionFacts nutrition={recipe.nutrition} />
      </main>
      <Footer />
    </>
  )
}

export default RecipePage;