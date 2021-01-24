import * as React from "react";
import { PieChart } from "./insights/pieChart";
import { LineChart } from "./insights/lineChart";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

type Props = {};

export function InsightsPage(props: Props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  return (
    <div>
      <h1>Insights</h1>
      <p>View patterns in your spending history to see where you can save</p>
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
