import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginReact, setLoginReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
