import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const TableRowShimmer = () => {
    return (
      <tbody className="bg-white text-gray-800 w-full">
        {[...Array(10)].map((_, index) => (
          <tr key={index} className="border-t border-gray-300 hover:bg-gray-50">
            {/* ID */}
            <td className="px-4 py-3 text-sm text-gray-600 capitalize">
              <Skeleton width={30} height={16} />
            </td>
            {/* Name */}
            <td className="px-4 py-3 text-sm text-gray-600 capitalize">
              <Skeleton width={100} height={16} />
            </td>
            {/* Email */}
            <td className="px-4 py-3 text-sm text-gray-600 lowercase">
              <Skeleton width={140} height={16} />
            </td>
            {/* Comment */}
            <td className="px-4 py-3 text-sm text-gray-600 capitalize max-w-xs truncate">
              <Skeleton count={2} height={12} width="90%" />
            </td>
          </tr>
        ))}
      </tbody>
    );
  };
  
  export default TableRowShimmer;