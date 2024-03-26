import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import useAuthCalls from "../services/useAuthCalls";
import { useState } from "react";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-800 p-4 py-5">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-0  md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-red-500 text-lg font-bold">
            BLOGPOST
          </Link>
        </div>
        <div className="flex flex-col md:flex-row   gap-2 justify-center items-center">
          <input
            className="h-[2rem] rounded w-full md:w-2/5    p-2 text-red-600 placeholder-gray-700"
            type="text"
            placeholder="Search Blog..."
            name="search"
            id="search"
            value={search}
            autoComplete="off"
            onChange={handleChange}
          />

          <div>
            <ul className="flex space-x-4 font-bold ">
              <NavLink
                to="/blogs"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "white",
                  };
                }}
              >
                My Blogs
              </NavLink>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "white",
                  };
                }}
              >
                About
              </NavLink>
              <NavLink
                to="/profile"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "white",
                  };
                }}
              >
                Profile
              </NavLink>

              {!user && (
                <NavLink
                  to="/auth"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "white",
                    };
                  }}
                >
                  Login
                </NavLink>
              )}

              {user && (
                <NavLink onClick={() => logout()} to="#" className="text-white">
                  Logout
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
