import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { fetchComments } from "../services/commentsService";
import FilterItem from "../components/FilterItem";
import { filters } from "../utils/constants";
import SearchBar from "../components/SearchBar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TableRowShimmer from "../components/TableRowShimmer";

const formatColumn = (col) => {
  if (col === "Post ID") return "postId";
  if (col === "Name") return "name";
  if (col === "Email") return "email";
  return col;
};

const sortComments = (data, column, direction) => {
  if (!direction) return data;

  return [...data].sort((a, b) => {
    const valA = a[column];
    const valB = b[column];

    if (typeof valA === "number" && typeof valB === "number") {
      return direction === "asc" ? valA - valB : valB - valA;
    }

    const strA = valA?.toString().toLowerCase() ?? "";
    const strB = valB?.toString().toLowerCase() ?? "";

    if (strA < strB) return direction === "asc" ? -1 : 1;
    if (strA > strB) return direction === "asc" ? 1 : -1;
    return 0;
  });
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(15);
  const [sortConfig, setSortConfig] = useState({ col: null, direction: null });

  const getComments = async () => {
    try {
      const commentsList = await fetchComments();
      setComments(commentsList);
      setFilteredComments(commentsList);
    } catch (e) {
      console.error("Failed to fetch comments", e);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const onHandleSearchInput = (searchInput) => {
    const filtered = comments.filter((item) =>
      ["name", "email", "body"].some((field) =>
        item[field].toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredComments(filtered);
    setSortConfig({ col: null, direction: null });
    setCurrentPage(0);
  };

  const onHandleSort = (col) => {
    setSortConfig((prev) => {
      let direction = "asc";
      if (prev.col === col) {
        if (prev.direction === "asc") direction = "desc";
        else if (prev.direction === "desc") direction = null;
      }

      const columnKey = formatColumn(col);
      const sorted = direction
        ? sortComments(filteredComments, columnKey, direction)
        : [...comments];

      setFilteredComments(sorted);

      return { col, direction };
    });
  };

  const onHandlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(0);
  };

  const onHandlePreviousPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  const onHandleNextPage = () => {
    if (currentPage < Math.ceil(filteredComments.length / pageSize) - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const start = currentPage * pageSize;
  const end = start + pageSize;
  const paginatedData = filteredComments.slice(start, end);
  const noOfPages = Math.ceil(filteredComments.length / pageSize);

  return (
    <div className="px-8 md:px-16 lg:px-28 py-6">
      {/* Filter + Search */}
      <div className="my-8 flex flex-col md:flex-row md:items-center md:justify-between gap-y-4 md:gap-y-0">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              name={filter.label}
              onHandleSort={onHandleSort}
              sortConfig={sortConfig}
            />
          ))}
        </div>

        <SearchBar onHandleSearchInput={onHandleSearchInput} />
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full text-left border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <thead className="bg-gray-200 text-[#272a4b]">
            <tr>
              <th className="p-4 font-medium text-sm whitespace-nowrap">
                Post ID
              </th>
              <th className="p-4 font-medium text-sm whitespace-nowrap">
                Name
              </th>
              <th className="p-4 font-medium text-sm whitespace-nowrap">
                Email
              </th>
              <th className="p-4 font-medium text-sm whitespace-nowrap">
                Comment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-800">
            {comments.length === 0 ? (
              <TableRowShimmer />
            ) : paginatedData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No Comments Found
                </td>
              </tr>
            ) : (
              paginatedData.map((item) => (
                <TableRow key={item.id} tableData={item} commentInfo={item} />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="my-6 flex flex-col md:flex-row md:justify-end md:items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-gray-700 text-sm whitespace-nowrap">
            Comments per page
          </label>
          <select
            className="px-2 py-1 rounded-sm outline-none text-sm text-[#272a4b]"
            onChange={(e) => onHandlePageSizeChange(Number(e.target.value))}
            value={pageSize}
          >
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <button
            className={`${
              currentPage === 0 ? "cursor-not-allowed" : "cursor-pointer"
            } flex items-center gap-1 px-3 py-1.5 text-sm bg-white text-[#272a4b]`}
            onClick={onHandlePreviousPage}
            disabled={currentPage === 0}
          >
            <FaChevronLeft className="text-xs" />
            Prev
          </button>

          <span className="w-8 h-8 border-2 border-gray-300 shadow-md rounded-md flex items-center justify-center text-[#272a4b] font-medium">
            {currentPage + 1}
          </span>

          <button
            className={`${
              currentPage === noOfPages - 1
                ? "cursor-not-allowed"
                : "cursor-pointer"
            } flex items-center gap-1 px-3 py-1.5 text-sm bg-white text-[#272a4b]`}
            onClick={onHandleNextPage}
            disabled={currentPage === noOfPages - 1}
          >
            Next
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
