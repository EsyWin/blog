import React from "react";

import AppBar from "../components/AppBar";
import TypedTitle from "../components/TypedTitle";
import Footer from "../components/Footer";

import "../styles/global.css";
import "../styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <main data-theme="corporate" className="w-full flex flex-col min-h-screen">
      <AppBar />
      <div className="container flex justify-center align-center">
        <TypedTitle />
      </div>
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
