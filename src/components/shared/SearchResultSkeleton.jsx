
const SearchResultSkeleton = ({ count = 3 }) => {
    return (
        <ul className="list-none p-0 m-0 animate-pulse">
            {Array.from({ length: count }).map((_, index) => (
                <li
                    key={index}
                    className="p-2 border-b border-gray-200 flex items-center gap-2"
                >
                    {/* Skeleton for the image */}
                    <div className="relative w-14 h-14 bg-gray-200 rounded-md"></div>
                    {/* Skeleton for the title and shorter second line */}
                    <div className="flex-1 flex-col space-y-2">
                        <div className="flex-1 h-4 bg-gray-200 rounded-md max-w-4/5"></div>
                        {/* This line is now shorter (w-3/4) */}
                        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default SearchResultSkeleton;