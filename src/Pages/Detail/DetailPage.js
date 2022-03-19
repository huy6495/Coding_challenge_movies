import React, { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Detail from "../../Components/Detail/Detail";

export default function DetailPage(props) {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  }, []);

  return (
    <div>
      <Header />
      <Detail id={props.match.params.id} />
      <Footer />
    </div>
  );
}
