import React from "react";
import "./_footer.scss";
import logoH from "../../Assets/Img/blue_square_2.svg";

export default function Footer() {
  return (
    <footer>
      <div className="wrap-footer">
        <div className="join">
          <img
            src={logoH}
            alt="The Movie Database (TMDB)"
            width={130}
            height={94}
          />
        </div>
        <div className="content-footer">
          <h3>The Basics</h3>
          <ul>
            <li>
              <a>About TMDB</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Support Forums</a>
            </li>
            <li>
              <a>API</a>
            </li>
            <li>
              <a>System Status</a>
            </li>
          </ul>
        </div>
        <div className="content-footer">
          <h3>Get Involved</h3>
          <ul>
            <li>
              <a>
                <span /> Contribution Bible
              </a>
            </li>
            <li>
              <a>Add New Movie</a>
            </li>
            <li>
              <a>Add New TV Show</a>
            </li>
          </ul>
        </div>

        <div className="content-footer">
          <h3>Legal</h3>
          <ul>
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>API Terms of Use</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w80 bg-light"></hr>
      <h6 className="w80 text-light mb-3">Copyright 2022 Huy Nguyen</h6>
    </footer>
  );
}
