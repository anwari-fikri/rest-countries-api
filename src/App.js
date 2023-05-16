import React from "react";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
