import { useState } from "react";
import Input from "./form/input";
import { useNavigate, useOutletContext } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setJwtToken } = useOutletContext();
  const { setAlertMessage } = useOutletContext();
  const { setAlertClassName } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("email/password", email, password);

    if (email === "admin@example.com") {
        setJwtToken("abc");
        setAlertClassName("d-none");
        setAlertMessage("")
        navigate("/");
    } else{
        setAlertClassName("alert-danger");
        setAlertMessage("invalid credentials");
    }
  };

  return (
    <>
      <div className="col-md-6 offset-md-3">
        <h2>Login</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <Input
            title="Email Address"
            type="email"
            className="from-control"
            name="email"
            autoComplete="email-new"
            onChange={(event) => setEmail(event.target.value)}
          ></Input>
          <Input
            title="Password"
            type="password"
            className="from-control"
            name="password"
            autoComplete="password-new"
            onChange={(event) => setPassword(event.target.value)}
          ></Input>

          <hr />
          <input
            type="submit"
            className="btn btn-primary"
            value="Login"
          ></input>
        </form>
      </div>
    </>
  );
};

export default Login;
