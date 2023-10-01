import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginReact, setLoginReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between border-solid shadow-xl border-2 bg-orange-400 text-slate-100 font-bold text-lg font-sans">
      <div className="logo-container">
        <img className="w-52 mix-blend-multiply" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex gap-4 m-8 p-4 flex-wrap">
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
            className=" bg-orange-950 p-2 rounded"
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
