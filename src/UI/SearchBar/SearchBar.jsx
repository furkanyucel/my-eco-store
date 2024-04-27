import { useState } from "react";

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Ürün ara..."
      value={searchTerm}
      onChange={handleSearch}
      className="border border-3 border-green-800 p-2 rounded my-3 bg-inherit w-30 placeholder:text-slate-100 font-normal"
    />
  );
};

export default SearchBar;
