import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import Home from "features/home/Home";

const HomePage = () => {
  return (
    <Fragment>
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
