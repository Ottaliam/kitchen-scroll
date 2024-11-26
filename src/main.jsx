import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home/Home.jsx";

import 'normalize.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
