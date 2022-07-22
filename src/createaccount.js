import React from "react";
import { validate } from "./utility";
import { UserContext, Card } from "./context";

function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { createAccount } = React.useContext(UserContext);

  function handleCreate() {
    if (!validate(name, "name", setStatus)) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    createAccount(name, email, password);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      bgcolor="dark"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            <form>
            <br />
              Name
              <br />
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
              Email address
              <br />
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
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
              <br />
              <button
                type="submit"
                className="btn btn-light"
                disabled={!name.length && !email.length && !password.length}
                onClick={handleCreate}
              >
                Create Account
              </button>
            </form>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit"
              className="btn btn-light"
              onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
