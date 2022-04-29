import "../styles.scss";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="header">
        <img
          src={
            "https://xn4dxyaid5lopieoqn3zr5pmume2bdjj56mlewlajof7dn2x4eva.arweave.net/u3g74AgfVuegjoN3mPXsowmgjSnvmLJZYEuL8bdX4So"
          }
          width={222}
          height={222}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
