import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  LineSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import firebase from "firebase/app";

export const LineChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch graph data from the API
    let userId = firebase.auth().currentUser
      ? firebase.auth().currentUser?.uid
      : "Amy";
    console.log("Users: ", userId);
    fetch(
      "https://flask-container-iqk43m4jga-ew.a.run.app/stats/time/" + userId
    )
      .then((r) => r.json())
      .then((j) => {
        setData(j.data);
      });
  }, []);

  useEffect(() => {
    console.log("Data: ", data);
  }, [data]);

  return (
    <div>
      <Paper>
        {data && (
          <Chart data={data}>
            <LineSeries
              argumentField={"date"}
              valueField={"spending"}
              name={"Spending"}
            />
            <Title text="Spending over time" />
            <Animation />
          </Chart>
        )}
      </Paper>
    </div>
  );
};
