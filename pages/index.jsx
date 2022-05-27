import React from "react";

function Homepage(props) {
  return (
    <div className="hero">
      {/* <h1 className="text-3xl font-bold text-center">ZK-PZ</h1> */}
    </div>
  );
}

Homepage.getInitialProps = () => ({
  blogTitle: "Rookie for life!",
});

export default Homepage;
