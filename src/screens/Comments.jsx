import { useEffect, useState } from "react";
import TableRow from "../components/TableRow";
import { fetchComments } from "../services/commentsService";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import FilterItem from "../components/FilterItem";
import { filters } from "../utils/constants";
import SearchBar from "../components/SearchBar";
const Comments = () => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    try {
      const commentsList = await fetchComments();
      setComments(commentsList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="px-8 md:px-16 lg:px-28 pt-8">
      <div className="my-8">
        {/*Filters */}
        <div className="flex items-center gap-x-2">
          {filters.map((eachFilter) => (
            <FilterItem name={eachFilter.label} key={eachFilter.id} />
          ))}
        </div>
        {/*Search Bar */}
        <SearchBar />
      </div>

      {/*Comments Table */}
      <table className="w-full text-left border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-200 text-[#272a4b]">
          <tr>
            <th className="p-4 font-medium text-sm whitespace-nowrap">
              Post ID
            </th>
            <th className="p-4 font-medium text-sm">Name</th>
            <th className="p-4 font-medium text-sm">Email</th>
            <th className="p-4 font-medium text-sm">Comment</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {comments.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No Comments Found
              </td>
            </tr>
          ) : (
            comments.map((item) => (
              <TableRow key={item.id} tableData={item} commentInfo={item} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Comments;
