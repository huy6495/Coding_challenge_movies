import React from "react";
import "./_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import SgvLogo from "../SvgLogo/SvgLogo";
import Link from "react-scroll/modules/components/Link";
import { NavLink, useHistory } from "react-router-dom";

export default function Header() {
  const path = useHistory().location.pathname;

  return (
    <header className="header d-flex justify-content-center">
      <div className="wrap-header d-flex">
        <div className="logo">
          <NavLink to="/home">
            <SgvLogo />
          </NavLink>
        </div>
        <nav className="wrap-nav d-flex">
          <ul className="d-flex">
            <div className="parent-drop">
              <div className="drop-button">
                {path === "/" || path === "/home" ? (
                  <Link to="movies" spy={true} smooth={true} duration={1000}>
                    Movies
                  </Link>
                ) : (
                  <NavLink to="/home">Movies</NavLink>
                )}
              </div>
            </div>
            <div className="parent-drop">
              <div className="drop-button">
                {path === "/" || path === "/home" ? (
                  <Link
                    to="searchMovies"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Search
                  </Link>
                ) : (
                  <NavLink to="/home">Search</NavLink>
                )}
              </div>
            </div>
          </ul>
        </nav>
        <div className="right-header d-flex justify-content-right">
          <div className="pull-btn">
            <div id="basic-label">Pull To Refresh</div>
          </div>
          <div className="auth">
            <button>
              <FontAwesomeIcon icon={solid("user")} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
