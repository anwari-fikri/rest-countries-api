import FilterDropDown from "./components/FilterDropDown";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    // <div classname="very-light-gray-light">
    <div className="bg-red-500">
      <Header />
      <div className="px-4 py-5">
        <SearchBar />
      </div>
      <div className="px-4 py-5">
        <FilterDropDown />
      </div>
    </div>
  );
}

export default App;
