import React from "react";
import Layout from "../components/layout";
import "../styles/bootstrap.min.css";

import { graphql } from "gatsby";

export const query = graphql`
  query MyQuery {
    sanitySiteSettings {
      registrantCount
    }
    allSanityRegistrant {
      totalCount
    }
  }
`;

export default function Home({ data }) {
  return <Layout data={data}></Layout>;
}
