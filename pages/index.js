import React from "react";

import "./";
function Homepage(props) {
  return <h1>Welcome to the blog: {props.blogTitle}!</h1>;
}

Homepage.getInitialProps = () => {
  return {
    blogTitle: "Rookie for life!",
  };
};

export default Homepage;
