import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import AllGallery from "features/gallery/allGallery/AllGallery";

const gallery = () => {
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
        <AllGallery />
      </Layout>
    </Fragment>
  );
};

export default gallery;
