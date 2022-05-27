import React from "react";

function Homepage(props) {
  return (
    <div className="hero min-h-max">
      <span>test</span>
    </div>
  );
}

Homepage.getInitialProps = () => ({
  blogTitle: "Rookie for life!",
});

export default Homepage;
