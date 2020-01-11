import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "Jan",
    "New Car": 4000,
    "Used Car": 2400,
    total: 2400
  },
  {
    name: "Feb",
    "New Car": 3000,
    "Used Car": 1398,
    total: 2210
  },
  {
    name: "Mar",
    "New Car": 2000,
    "Used Car": 9800,
    total: 2290
  },
  {
    name: "Apr",
    "New Car": 2780,
    "Used Car": 3908,
    total: 2000
  },
  {
    name: "May",
    "New Car": 1890,
    "Used Car": 4800,
    total: 2181
  },
  {
    name: "Jun",
    "New Car": 2390,
    "Used Car": 3800,
    total: 2500
  },
  {
    name: "Jul",
    "New Car": 3490,
    "Used Car": 4300,
    total: 2100
  },
  {
    name: "Aug",
    "New Car": 3400,
    "Used Car": 4100,
    total: 2100
  },
  {
    name: "Sep",
    "New Car": 2200,
    "Used Car": 2800,
    total: 2100
  },
  {
    name: "Oct",
    "New Car": 1460,
    "Used Car": 3200,
    total: 2100
  },
  {
    name: "Nov",
    "New Car": 2390,
    "Used Car": 3500,
    total: 2100
  },
  {
    name: "Dec",
    "New Car": 3490,
    "Used Car": 5000,
    total: 2100
  }
];

export default function Profits() {
  return (
    <div className='profits'>
      <h2 className='profits__title'>Average Profits</h2>
      <LineChart
        width={850}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
    <Line dataKey='Used Car' dot={{stroke: '#6dd400', strokeWidth: 4, fill: '#6dd400' } } stroke='#6dd400' strokeWidth="3" activeDot={{ r: 4 }} />
        <Line dataKey='New Car' stroke='#c30000' strokeWidth="3" dot= {{stroke: '#c30000', strokeWidth: 4, fill:'#c30000'}} />
      </LineChart>
    </div>
  );
}
