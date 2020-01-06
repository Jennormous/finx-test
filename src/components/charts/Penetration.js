import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];
const COLORS = ["#f04e31", "#8362fa", "#c30000", "#83ff00"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? "middle" : "middle"}
      dominantBaseline='central'>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Penetration() {
  return (
    <div className='pene'>
      <section className="pene__list">
        <ul>
          <li className="pene__list--item">Lease</li>
          <li className="pene__list--item">Subprime</li>
          <li className="pene__list--item">Cash</li>
          <li className="pene__list--item">Fleet</li>
        </ul>
      </section>
      <div className='pie'>
        <h3 className="pie__title">Penetration</h3>
        <PieChart width={250} height={300}>
          <Pie
          className="pie__pie"
            data={data}
            cx={115}
            cy={110}
            labelLine={false}
            label={renderCustomizedLabel}
            innerRadius={70}
            outerRadius={110}
            fill='#8884d8'>
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
}
