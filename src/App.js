import React from "react";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  return (
    <div>
      <Header handleThemeSwitch={handleThemeSwitch} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
