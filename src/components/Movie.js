import { useState } from "react";
import MovieCard from "./MovieCard";
import { json_data } from "../../utils/constant";
import useOnline from "../../utils/useOnline";
const Movie = () => {
  const [search, setSearch] = useState("");
  const [listOfMovie, setlistOfMovie] = useState(json_data);

  const filterMovies = () => {
    const filteredMovies = listOfMovie.filter((movie) => movie.Year > "2000");
    setlistOfMovie(filteredMovies);
  };

  const showOnline = useOnline();
  if (showOnline === false) return <h1>pls check your Internet</h1>;

  return (
    <>
      <div className="seatchText">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredMovie = listOfMovie.filter((res) =>
              res.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            );
            setlistOfMovie(filteredMovie);
          }}
        >
          search
        </button>
      </div>
      <div className="btn">
        <button onClick={filterMovies}>Movies released after 2000</button>
      </div>
      <div className="movie-container">
        {listOfMovie.map((movieList) => (
          <MovieCard key={movieList.imdbID} resData={movieList} />
        ))}
      </div>
    </>
  );
};

export default Movie;
