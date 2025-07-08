import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
const FilterItem = (props) => {
    const {name} = props
  return (
    <div>
      <button className="border border-gray-300 px-4 py-1 rounded-sm text-gray-500 text-sm font-medium flex items-center gap-x-1 cursor-pointer">
        Sort {name}
        <div className="flex flex-col">
          <button className="outline-none">
            <MdKeyboardArrowUp />
          </button>
          <button className="outline-none">
            <MdKeyboardArrowDown />
          </button>
        </div>
      </button>
    </div>
  );
};

export default FilterItem;
