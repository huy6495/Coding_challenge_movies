import React from "react";
import "./_header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import SgvLogo from "../SvgLogo/SvgLogo";

export default function Header() {
  return (
    <header className="header d-flex justify-content-center">
      <div className="wrap-header d-flex">
        <div className="logo">
          <SgvLogo />
        </div>
        <nav className="wrap-nav d-flex">
          <ul className="d-flex">
            <div className="parent-drop">
              <div className="drop-button">
                <p>Movies</p>
              </div>
              {/* <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div> */}
            </div>
            <div className="parent-drop">
              <div className="drop-button">
                <p>About</p>
              </div>
            </div>
            <div className="parent-drop">
              <div className="drop-button">
                <p>Top rated</p>
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
