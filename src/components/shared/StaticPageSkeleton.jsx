const StaticPageSkeleton = ({ count = 1 }) => {
  return (
    <div className="space-y-8">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          
          {/* Introduction Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div> {/* Placeholder for Introduction Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Introduction Paragraph 1 */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Introduction Paragraph 2 */}

          {/* Use of Website Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Use of Website Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Use of Website Paragraph */}

          {/* Confidential Information Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Confidential Information Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Confidential Information Paragraph */}

          {/* Copyright Section */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 mt-8"></div> {/* Placeholder for Copyright Title */}
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div> {/* Placeholder for Copyright Paragraph */}
        </div>
      ))}
    </div>
  );
};

export default StaticPageSkeleton;