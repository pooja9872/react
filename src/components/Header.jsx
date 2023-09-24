import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginReact, setLoginReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about"> About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              loginReact === "Login"
                ? setLoginReact("Logout")
                : setLoginReact("Login")
            }
            type="button"
          >
            {loginReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
