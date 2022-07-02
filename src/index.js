// import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Animals from "./components/Animals";
import AddAnimal from "./pages/AddAnimalPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="animals" element={<Animals />}>
          <Route index element={<Animals />} />
          {/* <Route path=":animalId" element={<AnimalDetails />} /> */}
        </Route>

        <Route path="addAnimal" element={<AddAnimal />} />

        <Route path="*" element={<h3 className="text-center">404 - page not found!</h3>} />
      </Route>
    </Routes>




  </BrowserRouter >
);


reportWebVitals();
