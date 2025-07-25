import React from 'react';
import { Link as NextIntlLink } from "@/i18n/navigation";
import { getLinkHref } from "@/utils/linkHelper";
import { baseURL } from '@/utils/api';
import Image from 'next/image';
import SearchResultSkeleton from '../SearchResultSkeleton';

const SearchResults = ({ isLoading, results, clearSearch }) => {
  return (
    <div className="absolute top-full mt-2 min-w-xl bg-white border rounded-md shadow-lg z-10 text-black max-h-[50vh] overflow-y-auto scrl-hide">
      {isLoading && <SearchResultSkeleton count={3} />}
      {results && (
        <ul>
          {results.length > 0 ? (
            results.map((result) => (
              <li key={result.id} className="p-2 border-b border-gray-200 hover:bg-gray-100 cursor-pointer">
                <NextIntlLink href={getLinkHref(result)} className="flex items-center gap-2" onClick={clearSearch}>
                  {result?.images && (
                    <div className='relative w-14 h-14'>
                      <Image 
                        src={result?.images ? `${baseURL}${result?.images}` : "/assets/placeholder-image.jpg"} 
                        alt={result.title || 'Search Result Image'} 
                        fill
                        sizes="56px" 
                        className="object-cover rounded-md" 
                      />
                    </div>
                  )}
                  {result.title}
                </NextIntlLink>
              </li>
            ))
          ) : (
            <p className="p-2">No results found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;