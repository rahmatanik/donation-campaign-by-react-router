import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky flex sm:flex-none center justify-between  items-center shadow-md px-2 rounded mx-auto max-screen-[1200px]">
      <Link to={"/"}>
        <Logo></Logo>
      </Link>
      <nav className="m-2 font-bold p-4 ">
        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 underline"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 underline"
                  : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-orange-400 underline"
                  : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
