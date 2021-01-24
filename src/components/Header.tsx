import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1>
          Fisci .{" "}
          <sub>
            <code>online</code>
          </sub>
        </h1>
      </Link>
      <p>
        A finance web-app for individuals and businesses alike that helps users
        track their spendings.
      </p>
    </div>
  );
};
