import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";

import HomePage from "./pages/HomePage/HomePage.jsx";
import RecipePage from "./pages/RecipePage/RecipePage.jsx";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage.jsx";

import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage />} />
        <Route path="recipe" element = {<RecipePage />} />
        <Route path="list" element={<RecipeListPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
