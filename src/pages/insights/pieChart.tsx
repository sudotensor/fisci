import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import firebase from "firebase/app";

export const PieChart = () => {
  const [data, setData] = useState();
  //     const [data, setData] = useState([
  //   {
  //     "category": "food",
  //     "spending": 301.82
  //   },
  //   {
  //     "category": "clothing",
  //     "spending": 87.05
  //   }
  // ])

  useEffect(() => {
    // fetch graph data from the API
    let userId = firebase.auth().currentUser
      ? firebase.auth().currentUser?.uid
      : "Amy";
    console.log("Users: ", userId);
    fetch(
      "https://flask-container-iqk43m4jga-ew.a.run.app/stats/category/" + userId
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
            <PieSeries
              valueField="spending"
              argumentField="category"
              innerRadius={0.6}
            />
            <Title text="Spending by category" />
            <Animation />
          </Chart>
        )}
      </Paper>
    </div>
  );
};
