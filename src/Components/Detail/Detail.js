import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../Redux/Actions/MovieActions";
import { IMAGE_DOMAIN } from "../../Utils/setting";
import CirclePercent from "../CirclePercent/CirclePercent";
import Loading from "../Loading/Loading";
import "./_detail.scss";

export default function Detail(props) {
  const { detailMovie, isLoadingDetail } = useSelector(
    (state) => state.MovieReducer
  );
  const { id } = props;

  //   console.log(isLoadingDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailMovie(id));
    return () => {};
  }, []);

  return (
    <>
      {isLoadingDetail ? (
        <Loading size="400px"></Loading>
      ) : (
        <section className="detail-movie">
          <div
            className="detail-overlay"
            style={{
              backgroundImage: `url(${detailMovie.backdrop_path})`,
            }}
          ></div>
          <div className="container detail-card">
            <div className="card">
              <div className="row g-0 wrap-detail">
                <div className="col-md-3 img-movie p-0">
                  <div className="wrap-detail-img">
                    <img
                      src={IMAGE_DOMAIN + detailMovie.poster_path}
                      alt={detailMovie.title}
                      className="w-h-100"
                    />
                  </div>
                </div>

                <div className="col-md-6 detail-content d-flex justify-content-center overflow-auto c">
                  <div className="card-body content-detail">
                    <h3 className="card-title text-center">
                      {detailMovie.title}
                    </h3>
                    <h5 className="card-title">Overview:</h5>
                    <p className="card-text text-card">
                      {detailMovie.overview}
                    </p>
                    <div className="info card-body mt-3">
                      <small>Genres: </small>
                      <span className="nameFilm">
                        <span>C16</span>
                      </span>
                      <br />
                      <span className="timeFilm">Time: 100m</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 score-detail">
                  <div className="row">
                    <div className="col-md-12 mt-5 d-flex justify-content-center ">
                      <CirclePercent percent={detailMovie.vote_average * 10} />
                    </div>
                    <div className="col-12 text-center">
                      <small>Score: {detailMovie.vote_average}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
