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

  console.log("search :>> ", search);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-red-500 text-lg font-bold">
            BLOGPOST
          </Link>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          <input
            className="h-[2rem] rounded p-2 text-red-600 placeholder-gray-700"
            type="text"
            placeholder="Search Blog..."
            name="search"
            id="search"
            value={search}
            autoComplete="off"
            onChange={handleChange}
          />

          <ul className="flex space-x-4 font-bold  ">
            <NavLink
              to="/blogs"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                };
              }}
            >
              Blogs
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
    </nav>
  );
};

export default Navbar;
