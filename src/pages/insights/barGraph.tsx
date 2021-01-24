import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const data = {
  february: [
    {
      category: "Transport running costs",
      spending: 280.61000061035156,
    },
    {
      category: "Transport running costs - Fuel",
      spending: 279.48999977111816,
    },
    {
      category: "Vehicle hire",
      spending: 381.3800048828125,
    },
  ],
  march: [
    {
      category: "Transport running costs",
      spending: 280.61000061035156,
    },
    {
      category: "Transport running costs - Fuel",
      spending: 279.48999977111816,
    },
    {
      category: "Vehicle hire",
      spending: 381.3800048828125,
    },
  ],
};

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
          { month: 2021, food: 8, clothing: 9 },
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
