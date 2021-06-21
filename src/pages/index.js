import React from "react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";
import "../styles/bootstrap.min.css";

import { graphql } from "gatsby";

export const query = graphql`
  query MyQuery {
    allSanityRegistrant {
      totalCount
    }
  }
`;

export default function Home({ data }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{"BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"}</title>
        <meta
          name="description"
          content={
            "Be a lifesaver in 2 easy steps: take the cheek swab and join the register! By joining the community, you increase the chances of patients finding a donor. A larger donor pool benefits you too! Discover what it means to be a marrow donor."
          }
        />
        <meta name="image" content={"../images/BMDP logo (pantone) 1.png"} />
        <link rel="canonical" href={"https://bmdp.org/"} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={"https://bmdp.org/"} />
        <meta property="og:title" content={"BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"} />
        <meta
          property="og:description"
          content={
            "Be a lifesaver in 2 easy steps: take the cheek swab and join the register! By joining the community, you increase the chances of patients finding a donor. A larger donor pool benefits you too! Discover what it means to be a marrow donor."
          }
        />
        <meta
          property="og:image"
          content={"../images/BMDP logo (pantone) 1.png"}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"} />
        <meta
          name="twitter:description"
          content={
            "Be a lifesaver in 2 easy steps: take the cheek swab and join the register! By joining the community, you increase the chances of patients finding a donor. A larger donor pool benefits you too! Discover what it means to be a marrow donor."
          }
        />
        <meta
          name="twitter:image"
          content={"../images/BMDP logo (pantone) 1.png"}
        />
      </Helmet>
      <Layout data={data}></Layout>
    </React.Fragment>
  );
}
