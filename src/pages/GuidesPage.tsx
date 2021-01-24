import * as React from "react";
import Divider from "@material-ui/core/Divider";

type Props = {};

export function GuidesPage(props: Props) {
  return (
    <div>
      <h1 style={{ marginBottom: 4 }}>Guides</h1>
      <Divider />
      <p style={{ fontSize: 16 }}>
        Here, you'll find curated resources that offer financial advice for both
        small businesses and individuals. You'll also be able to find resources
        that point towards COVID-relief and charities.
      </p>
      <h2 style={{ marginBottom: 2 }}>COVID-related information</h2>
      <p style={{ fontSize: 16 }}>
        Small businessed based in the UK may be eligible for support from the
        government. Use the{" "}
        <a
          style={{ textDecoration: "none", color: "orange" }}
          href="https://www.gov.uk/business-coronavirus-support-finder"
        >
          link
        </a>{" "}
        to determine what kind of help you can get.
      </p>
      <h2 style={{ marginBottom: 2 }}>Places To Donate</h2>
      <p style={{ fontSize: 16 }}>
        Checkout how to{" "}
        <a
          style={{ textDecoration: "none", color: "orange" }}
          href="https://www.nhscharitiestogether.co.uk/"
        >
          Donate to NHS
        </a>
        . Your generous donation is going to change the lives of many.
      </p>
      <h2 style={{ marginBottom: 2 }}>Reach Financial Stability</h2>
      <p style={{ fontSize: 16 }}>
        COVID is affecting everyone. These{" "}
        <a
          style={{ textDecoration: "none", color: "orange" }}
          href="https://www.forbes.com/sites/brianmenickella/2020/05/01/6-financial-tips-for-surviving-covid-19/?sh=2140201a7825"
        >
          tips from Forbes
        </a>{" "}
        will help you progress towards financial stability and gain an
        understanding of the world of finance!{" "}
      </p>
    </div>
  );
}
