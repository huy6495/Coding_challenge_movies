import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./_searchBox.scss";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../Redux/Actions/UserActions";
import { NavLink } from "react-router-dom";

export default function SearchBox() {
  const dispatch = useDispatch();

  const { arraySearchName } = useSelector((state) => state.UserReducer);

  const searchChangeHandler = (e) => {
    dispatch(searchMovie(e.target.value));
  };

  const renderSearchResult = (arrayResult) => {
    if (arrayResult.length !== 0) {
      return arrayResult.map((item, index) => {
        // console.log(item.id);
        return (
          <NavLink key={index} to={`/detail/${item.id}`}>
            <p className="result-search">{item.title}</p>
          </NavLink>
        );
      });
    }
    return "";
  };

  return (
    <div
      id="searchMovies"
      className="wrap-search d-flex justify-content-center"
    >
      <div className="d-flex justify-content-center wrap-search-in">
        <form
          className="d-flex justify-content-center"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* 1. */}
          <div className="form-group form-search-first d-flex">
            <div className="p-2 pr-5 align-self-center text-left position-relative">
              <label className="text-dark pr-5 mb-0 font-weight-bold">
                Movies
              </label>
              <input
                className="input-search d-block p-0"
                placeholder="What movie are you going watch?"
                onChange={searchChangeHandler}
              />
              <div className="position-absolute">
                {renderSearchResult(arraySearchName)}
              </div>
            </div>
          </div>

          {/* 2. */}
          <div className="form-group form-search-end d-flex">
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
