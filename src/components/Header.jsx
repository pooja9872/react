import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginReact, setLoginReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="headers">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="headers">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="headers">
              Contact Us
            </Link>
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
