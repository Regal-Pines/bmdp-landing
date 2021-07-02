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
        <title>
          {
            "BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"
          }
        </title>
        <meta
          name="description"
          content={
            "Be a lifesaver in 2 easy steps: take the cheek swab and join the register! By joining the community, you increase the chances of patients finding a donor. A larger donor pool benefits you too! Discover what it means to be a marrow donor."
          }
        />
        <meta name="image" content={"../images/BMDP logo (pantone) 1.png"} />
        <link rel="canonical" href={"https://donor.bmdp.org/"} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={"https://donor.bmdp.org/"} />
        <meta
          property="og:title"
          content={
            "BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"
          }
        />
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
        <meta
          name="twitter:title"
          content={
            "BMDP Singapore | Register to be a marrow donor | Save a life, take the cheek swab!"
          }
        />
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
        {/* Hotjar Tracking Code for https://donor.bmdp.org/ */}
        <script>
          {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2483475,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </script>

        {/* Facebook Pixel Code */}
        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '797489664485699');
          fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`
            <img
              height="1"
              width="1"
              style="display:none"
              src="https://www.facebook.com/tr?id=797489664485699&ev=PageView&noscript=1"
            />`}
        </noscript>
      </Helmet>
      <Layout data={data}></Layout>
    </React.Fragment>
  );
}
