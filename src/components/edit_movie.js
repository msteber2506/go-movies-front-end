import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Input from "./form/input";
import Select from "./form/select";

const EditMovie = () => {
  const navigate = useNavigate();
  const { jwtToken } = useOutletContext;

  const [error, setError] = useState(null);
  const [errors, setErrors] = useState([]);

  const mpaaOptions = [
    {id:"G", value: "G"},
    {id:"PG", value: "PG"},
    {id:"PG13", value: "PG13"},
    {id:"R", value: "R"},
    {id:"NC17", value: "NC17"},
    {id:"18A", value: "18A"}
  ]
  const [movie, setMovie] = useState({
    id: 0,
    title: "",
    release_date: "",
    runtime: "",
    mpaa_rating: "",
    description: "",
  });

  let { id } = useParams();

  useEffect(() => {
    if (jwtToken === "") {
      navigate("/login");
      return;
    }
  }, [jwtToken, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = () => (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const hasError = (key) => {
    return errors.indexOf(key) !== -1;
  };

  return (
    <div>
      <h2>Add/Edit Movie</h2>
      <hr />
      <pre>{JSON.stringify(movie, null, 3)}</pre>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={movie} id="id"></input>

        <Input
          title={"Title"}
          className={"form-control"}
          type={"text"}
          name={"title"}
          value={movie.title}
          onChange={handleChange("title")}
          errorDiv={hasError("title") ? "text-danger" : "d-none"}
          errorMsg={"Please enter a title..."}
        ></Input>

        <Input
          title={"Release Date"}
          className={"form-control"}
          type={"date"}
          name={"release_date"}
          value={movie.release_date}
          onChange={handleChange("release_date")}
          errorDiv={hasError("release_date") ? "text-danger" : "d-none"}
          errorMsg={"Please enter a release date..."}
        ></Input>

        <Input
          title={"Runtime"}
          className={"form-control"}
          type={"text"}
          name={"runtime"}
          value={movie.runtime}
          onChange={handleChange("runtime")}
          errorDiv={hasError("runtime") ? "text-danger" : "d-none"}
          errorMsg={"Please enter a runtime..."}
        ></Input>

        {/* <Select>
          title ={"MPAA Rating"}
          name={"mpaa_rating"}
          options={mpaaOptions}
          onChange={handleChange("mpaa_rating")}
          placeholder={"Choose one..."}
          errorMsg={"Please choose one"}
          errorDiv={hasError("mpaa_rating") ? "text-danger" : "d-none"}
        </Select> */}
      </form>
    </div>
  );
};

export default EditMovie;
