const MovieCard = ({ resData }) => {
  const { Title, imdbID, Year, Poster } = resData;
  return (
    <div className="movie-card">
      <h3>{Title}</h3>
      <h3>{imdbID}</h3>
      <h3>{Year}</h3>
      <img src={Poster} />
    </div>
  );
};
export default MovieCard;
