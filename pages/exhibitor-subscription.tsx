import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import Exhibitor from "features/exhibitor/Exhibitor";
import ManualScroll from "components/shared/ManualScroll";

const exhibitorSubscription = () => {
  return (
    <Fragment>
      <ManualScroll />
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
