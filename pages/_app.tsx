import "../styles/base.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextNprogress from "nextjs-progressbar";

import type { AppProps } from "next/app";
import { Fragment } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("nadas");
  return (
    <Fragment>
      <NextNprogress
        color="#FEE715"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
