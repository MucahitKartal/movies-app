import React, { useEffect, useState } from "react";
import requests from "../Requests";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  const API_KEY = process.env.REACT_MOVIE_API_KEY;
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`;

  const movie = movies[Math.floor(Math.random() * movies.lenght)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((res) => {
      setMovies(res.data);
    });
  }, []);
  console.log(movie);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <img src="" alt={movie?.title} />
      </div>
    </div>
  );
};

export default Main;
