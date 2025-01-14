import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabindex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabindex="0">
                <a href="www.google.com" className="justify-between">
                  Courses
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="www.google.com">HTML</a>
                  </li>
                  <li>
                    <a href="www.google.com">Javascript</a>
                  </li>
                </ul>
              </li>
              <li tabindex="0">
                <a href="www.google.com" className="justify-between">
                  Interview
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="www.google.com">Submenu 1</a>
                  </li>
                  <li>
                    <a href="www.google.com">Submenu 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a
            onClick={() => {
              navigate("/");
            }}
            className="btn btn-ghost normal-case text-xl"
          >
            Code Clinic
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabindex="0">
              <a href="www.google.com">
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="www.google.com">HTML</a>
                </li>
                <li>
                  <a href="www.google.com">Javascript</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a href="www.google.com">
                Interview
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2">
                <li>
                  <a href="www.google.com">Submenu 1</a>
                </li>
                <li>
                  <a href="www.google.com">Submenu 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="navbar-end">
          <a href="www.google.com" className="btn">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
