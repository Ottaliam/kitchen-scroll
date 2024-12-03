import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipeGrid from "./components/RecipeGrid.jsx";

import PropTypes from 'prop-types';

const RecipeListPage = ({ recipes }) => {
  return (
    <>
      <Header />
      <main>
        <RecipeGrid recipes={recipes} />
      </main>
      <Footer />
    </>
  );
};

RecipeListPage.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipeListPage;