import React from "react";

export const LoginContext = React.createContext(false);

// to get whether or not the user is logged in anywhere in the app, use this:
// const loggedIn: boolean = React.useContext(LoginContext)
