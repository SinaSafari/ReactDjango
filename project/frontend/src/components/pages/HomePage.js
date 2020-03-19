import React from "react";
import Counter from "../Counter/counter";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Reactify Django</h1>
        <p className="lead">
          This is just a demo for serveing react app as a app in django project
        </p>
        <hr className="my-4" />
        <p>here's an example. check the title and Count below</p>

        <Counter />
      </div>
    </div>
  );
};

export default HomePage;
