"use client"; 

import Image from "next/image";
import { Link as NextIntlLink } from "@/i18n/navigation";
import { baseURL } from "@/utils/api";


const SectorCard = ({ sector }) => {
  if (!sector) {
    return null; 
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <Image
          src={sector?.image ? `${baseURL}${sector?.image}`: "/assets/placeholder-image.jpg"} 
          alt={sector?.title}
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Content Area */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {sector?.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {sector?.description}
        </p>
        <div className="mt-4">
          <NextIntlLink
            href={`/sectors/${sector._id}`}
            className="text-btn-bg hover:text-btn-bg/90 font-medium inline-flex items-center"
          >
            Read More
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </NextIntlLink>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;