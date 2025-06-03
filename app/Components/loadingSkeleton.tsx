import React from "react";

const LoadingSkeleton = () => {
  return (
   <div className="flex flex-col items-center justify-center">
     <div className="animate-pulse space-y-4">
      <div className="h-6 bg-red-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-purple-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
   </div>
  );
};

export default LoadingSkeleton;
