import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URI from "../api";
import { loginActions } from "../store/loginSlice";
import { NavLink } from "react-router-dom";

axios.defaults.withCredentials = true;

const Navbar = () => {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.login);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const JWT = localStorage.getItem("JWT");
    axios({
      method: "POST",
      url: `${BASE_URI}/auth/isLoggedIn`,
      headers: {
        Authorization: `Bearer ${JWT}`,
      },
    }).then(
      (res) => {
        dispatch(loginActions.setUser(res.data.data.user));
      },
      () => {}
    );
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("JWT");
    dispatch(loginActions.logout());
  };

  return (
    <nav className="relative bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <NavLink
          className="font-caveat-brush text-[28px] font-normal leading-[35.28px]"
          to={"/"}
        >
          Kashmi-Go
        </NavLink>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="/tour-packages"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Kashmir Tour Packages
            </a>
          </li>
          <li>
            <a
              href="/taxi-services"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Taxi Services
            </a>
          </li>
          <li>
            <a
              href="/activities"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              Activities
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
            >
              About us
            </a>
          </li>
        </ul>

        <div className="hidden md:flex space-x-4 md:items-center">
          {user ? (
            <>
              {user && user.role === "admin" && (
                <ul>
                  <NavLink
                    to={"/bookings"}
                    className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
                  >
                    Bookings
                  </NavLink>
                </ul>
              )}
              {user && user.role === "user" && (
                <ul>
                  <NavLink
                    to={"/myBookings"}
                    className="text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
                  >
                    My Bookings
                  </NavLink>
                </ul>
              )}
              <span className="px-4 py-2 text-[#228B22] font-semibold">
                {user.fullName}
              </span>
              <button
                className="px-4 py-2 text-white bg-red-500 rounded"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink className="px-4 py-2 text-[#228B22]" to="/login">
                Login
              </NavLink>
              <NavLink
                href="/signup"
                className="px-4 py-2 text-white bg-signup-gradient rounded"
              >
                Signup
              </NavLink>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-green-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="space-y-4 px-4 py-2">
            <li>
              <a
                href="/tour-packages"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Kashmir Tour Packages
              </a>
            </li>
            <li>
              <a
                href="/taxi-services"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Taxi Services
              </a>
            </li>
            <li>
              <a
                href="/activities"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                Activities
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
              >
                About us
              </a>
            </li>
            {user && user.role === "Admin" && (
              <li>
                <NavLink
                  href="/bookings"
                  className="block text-[16px] font-bold leading-6 text-[#000000] hover:text-[#228B22]"
                >
                  Bookings
                </NavLink>
              </li>
            )}
            {user ? (
              <>
                <li className="text-[#000000] font-semibold">
                  {user.fullName}
                </li>
                <li>
                  <button
                    className="block w-full px-4 py-2 text-white bg-red-500 rounded"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    className="block text-[#228B22] px-4 py-2"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/signup"
                    className="block px-4 py-2 text-white bg-signup-gradient rounded"
                  >
                    Signup
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
