import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: "Star Wars",
      release_date: "1977-05-27",
      runtime: 121,
      mpaa_rating: "PG",
      description: "I don't know",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <>
      <div>
        <h2>Movie: {movie.title}</h2>
        <small><em>{movie.release_date}, {movie.runtime} minutes, Rated {movie.mpaa_rating}</em></small>
        <hr />
        <p>{movie.description}</p>
      </div>
    </>
  );
};

export default Movie;
