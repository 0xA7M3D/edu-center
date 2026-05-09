import { Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 100, fill: "#0088FE" },
  { name: "Group B", value: 800, fill: "#00C49F" },
  { name: "Group C", value: 100, fill: "#FFBB28" },
  { name: "Group D", value: 200, fill: "#FF8042" },
];

export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
}) {
  return (
    <div style={{ width: "250px", height: "250px" }}>
      <PieChart width={220} height={220}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={100}
          cornerRadius={10}
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={isAnimationActive}
        />
      </PieChart>
    </div>
  );
}