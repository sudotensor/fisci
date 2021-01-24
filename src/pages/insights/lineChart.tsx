import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export const SpendingOverTimeLineChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch graph data from the API

    fetch("https://flask-container-iqk43m4jga-ew.a.run.app/stats/time/Amy")
      .then((r) => r.json())
      .then((j) => {
        setData(j.data);
      });
  }, []);
  return (
    <Paper style={{ padding: 20 }}>
      <LineChart data={data} width={800} height={400}>
        <Line type="monotone" dataKey="spending" stroke="#8884d8" />
        <XAxis dataKey={"date"} />
        <YAxis />
        <Tooltip />
      </LineChart>
    </Paper>
  );
};
