import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = (props) => {
  const { onHandleSearchInput } = props;
  const [search, setSearch] = useState("");
  return (
    <div className="flex items-center gap-x-2 border border-gray-300 w-full md:w-[40%] lg:w-[30%] rounded-sm shadow-md px-4 py-2">
      <FiSearch className="text-gray-500 text-lg" />
      <input
        type="text"
        placeholder="Search name, email, comment"
        className="px-2 rounded-sm outline-none text-sm text-[#272a4b] flex-grow"
        autoComplete="off"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value), onHandleSearchInput(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
