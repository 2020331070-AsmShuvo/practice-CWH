import React from "react";
import PropTypes from "prop-types";
const Navbar = (props) => {
  let textColor = "black";
  if (props.mode == "black") {
    textColor = "white";
  }
  return (
    <div className="p-4">
      <div
        className={`navbar bg-${props.mode} text-${textColor} border rounded-lg bottom-6`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a>About</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">{props.title}</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>

            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className={`label-text text-${textColor} mr-2`}>{props.modeText}</span>
              <input onClick={props.toggleMode} type="checkbox" className="toggle"  />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
};
