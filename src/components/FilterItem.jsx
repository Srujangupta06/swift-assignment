import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const FilterItem = ({ name,  onHandleSort, sortConfig }) => {
  const isActive = sortConfig.col === name;
  const direction = sortConfig.direction;

  return (
    <button
      className="border border-gray-300 px-4 py-1 rounded-sm text-gray-600 text-sm font-medium flex items-center gap-x-1 cursor-pointer"
      onClick={() => onHandleSort(name)}
    >
      Sort {name}
      <div className="flex flex-col">
        <MdKeyboardArrowUp
          className={`text-base ${
            isActive && direction === "asc" ? "text-black" : "text-gray-400"
          }`}
        />
        <MdKeyboardArrowDown
          className={`text-base ${
            isActive && direction === "desc" ? "text-black" : "text-gray-400"
          }`}
        />
      </div>
    </button>
  );
};

export default FilterItem;
