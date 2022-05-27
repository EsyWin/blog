import React from "react";

import AppBar from "../components/AppBar";
import TypedTitle from "../components/TypedTitle";
import Footer from "../components/Footer";

import "../styles/global.css";
import "../styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="corporate" className="w-full">
      <AppBar />
      <div className="container flex justify-center align-center">
        <TypedTitle />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
