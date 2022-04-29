import React from "react";

import "./";
function Homepage(props) {
  return <h1>Welcome to my blog !</h1>;
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "Rookie for life!",
  };
};

export default Homepage;
