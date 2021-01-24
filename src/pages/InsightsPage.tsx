import * as React from "react";
import { PieChart } from "./insights/pieChart";
import { LineChart } from "./insights/lineChart";
import { Grid } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

type Props = {};

export function InsightsPage(props: Props) {
  return (
    <div>
      <h1 style={{ marginBottom: 4 }}>Insights</h1>
      <Divider />
      <p style={{ fontSize: 16 }}>
        View patterns in your spending history to see where you can save
      </p>{" "}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PieChart />
        </Grid>
        <Grid item xs={12}>
          <LineChart />
        </Grid>
      </Grid>
    </div>
  );
}
