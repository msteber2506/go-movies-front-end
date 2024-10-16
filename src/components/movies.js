import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let moviesList = [
      {
        id: 1,
        title: "Star Wars",
        release_date: "1977-05-27",
        runtime: 121,
        mpaa_rating: "PG",
        description: "I don't know",
      },
    ];

    setMovies(moviesList);
  }, []);

  return (
    <>
      <div>
        <h2>Movies</h2>
        <hr />
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m) => (
              <tr key={m.id}>
                <td>
                    <Link to={`/movies/${m.id}`}>
                        {m.title}
                    </Link>
                </td>
                <td>{m.release_date}</td>
                <td>{m.mpaa_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Movies;
