import * as React from "react";
import { useEffect, useState } from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

export const AnimatedPieChart = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // fetch graph data from the API
    let userId = "Amy";
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

export const CategoryBreakdownPieChart = () => {
  const [data, setData] = useState<undefined | []>();

  useEffect(() => {
    // fetch graph data from the API
    let userId = "Amy";
    fetch(
      "https://flask-container-iqk43m4jga-ew.a.run.app/stats/category/" + userId
    )
      .then((r) => r.json())
      .then((j) => {
        setData(j.data);
      });
  }, []);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <Paper>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="spending"
          nameKey="category"
          cx="50%"
          cy="50%"
          innerRadius={120}
          outerRadius={180}
          fill="#82ca9d"
        >
          {data?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </Paper>
  );
};
