import * as React from "react";

type Props = {};

export function LoginPage(props: Props) {
  return (
    <div>
      <h1>Login</h1>
      <button>Login with Google</button>
      (recommended) <br />
      <button>Login with email & password</button>
    </div>
  );
}
