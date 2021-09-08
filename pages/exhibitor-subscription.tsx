import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import Exhibitor from "features/exhibitor/Exhibitor";

const exhibitorSubscription = () => {
  return (
    <Fragment>
      <Head>
        {/* THIS ARE TEMPORARY TO TEST seo */}
        <title>251 Home Expo | Exhibitor Subscription</title>
        <meta
          name="description"
          content="Content About 251 Home Expo Description"
        />
      </Head>
      <Layout>
        <Exhibitor />
      </Layout>
    </Fragment>
  );
};

export default exhibitorSubscription;
