import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipePage from "./pages/RecipePage/RecipePage.jsx";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

import recipes from "./utils/recipes.js";
import 'normalize.css';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/kitchen-scroll/">
      <Routes>
        <Route index element = {<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="list">
          <Route index element={<RecipeListPage items={recipes} />} />
          <Route path="breakfast" element={<RecipeListPage items={recipes.filter(recipe => recipe.category === 'breakfast')} />} />
          <Route path="lunch" element={<RecipeListPage items={recipes.filter(recipe => recipe.category === 'lunch')} />} />
          <Route path="dinner" element={<RecipeListPage items={recipes.filter(recipe => recipe.category === 'dinner')} />} />
          <Route path="dessert" element={<RecipeListPage items={recipes.filter(recipe => recipe.category === 'dessert')} />} />
        </Route>
        <Route path="search/:searchText" element={<RecipeListPage items={[]} />} />
        <Route path="recipe/:recipeId" element = {<RecipePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
