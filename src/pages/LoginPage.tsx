import * as React from "react";
import "./login.css";

type Props = {};

export function LoginPage(props: Props) {
  return (
    <div id={"login-background"}>
      <h1>Login</h1>
      <div>
        <button>Login with Google</button>
        (recommended) <br />
        <button>Login with email & password</button>
      </div>
    </div>
  );
}
