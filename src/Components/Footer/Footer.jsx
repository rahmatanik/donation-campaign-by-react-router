import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
        <p className="block font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
          © 2023 | Donation | All Rights Reserved | Developed by Rahmat Anik
        </p>
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
      </footer>
    </div>
  );
};

export default Footer;
