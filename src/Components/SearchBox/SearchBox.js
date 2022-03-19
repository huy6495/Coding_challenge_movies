import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import React from "react";
import "./_searchBox.scss";

export default function SearchBox() {
  return (
    <div className="wrap-search d-flex justify-content-center">
      <div className="d-flex justify-content-center wrap-search-in">
        <form className="d-flex justify-content-center">
          {/* 1. */}
          <div className="form-group form-search-first d-flex">
            <div className="p-2 pr-5 align-self-center text-left">
              <label className="text-dark pr-5 mb-0 font-weight-bold">
                Movies
              </label>
              <input
                className="input-search d-block p-0"
                placeholder="What movie are you going watch?"
              />
            </div>
            {/* <div className="border-search align-self-center"></div> */}
          </div>

          {/* 4. */}
          <div className="form-group form-search-end d-flex">
            {/* <div className="p-2 align-self-center">
              <label className="text-dark mb-0 font-weight-bold">Guests</label>
              <input
                className="input-search d-block p-0"
                placeholder="Add guests"
              />
            </div> */}
            <div className="align-self-center p-3 text-light icon-search d-flex">
              <FontAwesomeIcon
                icon={solid("search")}
                size="lg"
                className="align-self-center"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
