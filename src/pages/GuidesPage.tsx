import * as React from "react";

type Props = {};

export function GuidesPage(props: Props) {
  return (
    <div>
      <h1>Guides</h1>
      <p>
        This can be financial advice for individuals and small businesses such
        as where to find relief and where to give to charity etc.
      </p>
      <h2>COVID-related information</h2>
      <h3>Small business: get support from the government</h3>
      <p>
        Use the <a href="https://www.gov.uk/business-coronavirus-support-finder">link</a> to determine what kind of help you can get.
      </p>
      <h3>Eager to help?</h3>
      <p>
        Checkout how to <a href="https://www.nhscharitiestogether.co.uk/">Donate to NHS</a>. Your generous donation is going to change the lives of many.
      </p>
      <h3>Thrive for individuals</h3>
      <p>
        COVID is affecting everyone. The 
        <a href="https://www.forbes.com/sites/brianmenickella/2020/05/01/6-financial-tips-for-surviving-covid-19/?sh=2140201a7825">tips from Forbes</a>
        will help you to survive!
      </p>
    </div>
  );
}
