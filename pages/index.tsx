import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import Home from "features/home/Home";
import ManualScroll from "components/shared/ManualScroll";

const HomePage = () => {
  return (
    <Fragment>
      <ManualScroll />
      <Head>
        {/* THIS ARE TEMPORARY TO TEST seo */}
        <title>251 Home Expo</title>
        <meta
          name="description"
          content="Content About 251 Home Expo Description"
        />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </Fragment>
  );
};

export default HomePage;
