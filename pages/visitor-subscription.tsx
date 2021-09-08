import React, { Fragment } from "react";
import Head from "next/head";
import Layout from "features/layout/Layout";
import Visitor from "features/visitor/Visitor";
import ManualScroll from "components/shared/ManualScroll";

const visitorSubscription = () => {
  return (
    <Fragment>
      <ManualScroll />
      <Head>
        {/* THIS ARE TEMPORARY TO TEST seo */}
        <title>251 Home Expo | Visitor Subscription</title>
        <meta
          name="description"
          content="Content About 251 Home Expo Description"
        />
      </Head>
      <Layout>
        <Visitor />
      </Layout>
    </Fragment>
  );
};

export default visitorSubscription;
