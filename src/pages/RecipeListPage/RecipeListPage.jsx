import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipeGrid from "./components/RecipeGrid.jsx";

const RecipeListPage = () => {
  return (
    <>
      <Header />
      <main>
        <RecipeGrid />
      </main>
      <Footer />
    </>
  );
};

export default RecipeListPage;