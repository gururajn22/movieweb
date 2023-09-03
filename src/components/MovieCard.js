


const MovieCard = ({ resData }) => {
  const { Title, imdbID, Year, Poster } = resData;
 const colorText={
       color: "black",
 }
   return (
    <div className="movie-card">
      <h3 style={colorText}>{Title}</h3>
      <h3 style={colorText}>{imdbID}</h3>
      <h3 style={colorText}>{Year}</h3>
      <img  src={Poster} />
    </div>
  );
};
export default MovieCard;
