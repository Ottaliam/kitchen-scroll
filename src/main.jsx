import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./pages/HomePage/HomePage.jsx";

import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element = {<HomePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
