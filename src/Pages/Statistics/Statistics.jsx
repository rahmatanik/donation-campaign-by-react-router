import React, { PureComponent, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#FB923C", "#37B63F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const donationItems = JSON.parse(localStorage.getItem("donations"));

  let pieData = [];

  if (donationItems && donationItems.length > 0) {
    pieData = [
      { name: "Total Donation", value: 12 - donationItems.length },
      { name: "Your Donation", value: donationItems.length },
    ];
  } else {
    pieData = [
      { name: "Total Donation", value: 100 },
      { name: "Your Donation", value: 0 },
    ];
  }

  return (
    <div className="flex items-center justify-center mb-52">
      <div>
        <PieChart width={320} height={320}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
