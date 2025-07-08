// components/ProfileShimmer.jsx
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileShimmer = () => {
  return (
    <div className="px-4 md:px-16 lg:px-28 py-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-x-2 mb-6">
        <div className="w-5 h-5 bg-gray-300 rounded-sm animate-pulse" />
        <Skeleton height={24} width={160} />
      </div>

      {/* Card Skeleton */}
      <div className="p-6 sm:p-8 shadow-lg rounded-md border border-gray-300">
        {/* Avatar and Name */}
        <div className="flex items-center gap-x-4 mb-6">
          <Skeleton circle height={100} width={100} />
          <div>
            <Skeleton height={24} width={140} />
            <Skeleton height={16} width={180} style={{ marginTop: 6 }} />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i}>
              <Skeleton height={14} width={80} />
              <Skeleton height={38} style={{ marginTop: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileShimmer;
