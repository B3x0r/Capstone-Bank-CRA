import React from "react";
import { UserContext, Card } from "./context";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { isLoggedin, setIsLoggedin, validateLogin } =
    React.useContext(UserContext);

    validateLogin({ email, password })
    .then(() => {
      setEmail("");
      setPassword("");
    })
    .catch(() => {
      setIsLoggedin(false);
    });
}

    function validate(field, label, setStatus) {
      if (!field) {
        setStatus("Error: " + label);
        setTimeout(() => setStatus(""), 3000);
        return false;
      } else if (label=="password" && field.length < 8) {
        setStatus("Error: Password must be at least 8 characters");
        setTimeout(() => setStatus(""), 3000);
        return false;
      } else {
        return true;
      }
    }

  const handleLogin = () => {
    if (!validateLogin(email, "email")) return <h5>Email not found.</h5>;
    if (!validateLogin(password, "password"))
      return <h5>Password does not match our records.</h5>;

  const handleLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <Card
      bgcolor="dark"
      header="Login"
      body={
        !isLoggedin ? (
          <>
            <form>
              <br />
              Email
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              Password
              <br />
              <input
                id="password"
                className="password"
                type="password"
                placeholder="Enter password"
                autoComplete="on"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </form>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={!email.length && !password.length}
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>User is logged in</h5>
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleLogout}
            >
              Logout User
            </button>
          </>
        )
      }
    />
  );
}

export default Login;
