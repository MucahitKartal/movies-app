import React from "react";

const MovieCard = ({ title, overview, vote_average, poster_path }) => {
  return (
    <div className="h-[500px]">
      <a href="#" className="group relative block bg-black h-[500px] ">
        <img
          alt="Developer"
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          className="absolute inset-0 h-full w-full  object-contain opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className="relative p-4 sm:p-6 lg:p-8 h-full">
          <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>
          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">{overview}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
