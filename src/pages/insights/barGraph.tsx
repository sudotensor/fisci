import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export const CategoryMonthlyBarChart = () => {
  return (
    <Paper style={{ padding: 20 }}>
      <BarChart
        data={[
          { month: 2019, food: 5, clothing: 9 },
          {
            month: 2020,
            food: 7,
            clothing: 9,
          },
          { month: 2021, food: 8, clothing: 7 },
          { month: 2021, food: 3, clothing: 2 },
          { month: 2021, food: 5, clothing: 3 },
          { month: 2021, food: 1, clothing: 13 },
          { month: 2021, food: 4, clothing: 11 },
        ]}
        width={800}
        height={400}
      >
        <Bar
          type="monotone"
          dataKey="food"
          stackId="a"
          stroke="#8884d8"
          fill={"tomato"}
        />
        <Bar
          type="monotone"
          dataKey="clothing"
          stackId="a"
          stroke="#8884d8"
          fill={"dodgerblue"}
        />
        <XAxis dataKey={"month"} />
        <YAxis />
        <Legend />
        <Tooltip />
      </BarChart>
    </Paper>
  );
};
