import * as React from "react";
import "./login.css";
import { LoginContext } from "../LoginContext";

type Props = {};

export function LoginPage(props: Props) {
  const loggedIn: boolean = React.useContext(LoginContext);
  return (
    <div id={"login-background"}>
      {loggedIn ? <h1>You are already logged in</h1> : <h1>Please Login</h1>}
      <div>
        <button>Login with Google</button>
        (recommended) <br />
        <button>Login with email & password</button>
      </div>
    </div>
  );
}
