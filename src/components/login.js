import React from "react";
import { navigate } from "hookrouter";
import Cookie from "js-cookie";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (username === "admin" && password === "a") {
      Cookie.set("username", username);
      Cookie.set("password", password);
      setErrorText("");
      navigate("/student-form");
    } else {
      setErrorText("Wrong Username or Password");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="User Name"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <p>{errorText}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
