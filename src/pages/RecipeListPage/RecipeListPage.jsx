import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import RecipeGrid from "./components/RecipeGrid.jsx";

import PropTypes from 'prop-types';
import {useLocation, useParams} from "react-router";

import recipes from "../../utils/recipes.js";

const RecipeListPage = ({ items }) => {
  const { searchText } = useParams();
  const location = useLocation();

  if (location.pathname.startsWith("/search")) {
    items = recipes.filter(recipe => recipe.name.toLowerCase().includes(decodeURIComponent(searchText.toLowerCase())));
  }

  return (
    <>
      <a id="skip-main" href="#main">Skip to main content</a>
      <Header/>
      <main id="main">
        <RecipeGrid recipes={items}/>
      </main>
      <Footer/>
    </>
  );
};

RecipeListPage.propTypes = {
  items: PropTypes.array.isRequired,
};

export default RecipeListPage;