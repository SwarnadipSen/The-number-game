// 'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend,
} from "recharts";

const salesData = [
  {
    point: "0",
    Players: 1,
  },
  {
    point: "1",
    Players: 2,
  },
  {
    point: "2",
    Players: 6,
  },
  {
    point: "3",
    Players: 5,
  },
  {
    point: "4",
    Players: 3,
  },
  {
    point: "5",
    Players: 15,
  },
  {
    point: "6",
    Players: 16,
  },
  {
    point: "7",
    Players: 30,
  },
  {
    point: "8",
    Players: 12,
  },
  {
    point: "9",
    Players: 5,
  },
  {
    point: "10",
    Players: 2,
  },
  {
    point: "11",
    Players: 1,
  },
  {
    point: "12",
    Players: 0,
  },
  {
    point: "13",
    Players: 0,
  },
  {
    point: "14",
    Players: 1,
  },
  {
    point: "15",
    Players: 3,
  },
  {
    point: "16",
    Players: 0,
  },
  {
    point: "17",
    Players: 1,
  },
];

const AreaChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={300}
        height={400}
        data={salesData}
        // margin={{
        //   right: 30,
        // }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="point" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="Players" stroke="#3b82f6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-sm text-blue-400">
          Players:
          <span className="ml-2">
            <b>{payload[0].value}</b>{" "}
          </span>
        </p>
        <p className="text-medium text-lg">
          <b>Point: {label}</b>
        </p>
      </div>
    );
  }
};

export default AreaChartComponent;
