import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipeInfo from "./components/RecipeInfo.jsx";
import IngredientsList from "./components/IngredientsList.jsx";
import RecipeInstructions from "./components/RecipeInstructions.jsx";
import NutritionFacts from "./components/NutritionFacts.jsx";

import styles from './RecipePage.module.css';

const RecipePage = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <RecipeInfo />
        <IngredientsList />
        <RecipeInstructions />
        <NutritionFacts />
      </main>
      <Footer />
    </>
  )
};

export default RecipePage;