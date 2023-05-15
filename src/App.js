import FilterDropDown from "./components/FilterDropDown";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="px-4 bg-very-light-gray-light">
      <Header />
      <SearchBar />
      <FilterDropDown />
    </div>
  );
}

export default App;
