import {
    PieChart,
    Pie,
    Sector,
    ResponsiveContainer,
  } from "recharts";
  
  import { RechartsDevtools } from "@recharts/devtools";
  
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  const RADIAN = Math.PI / 180;
  
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    if (
      cx == null ||
      cy == null ||
      innerRadius == null ||
      outerRadius == null
    ) {
      return null;
    }
  
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  
    const x =
      cx + radius * Math.cos(-(midAngle || 0) * RADIAN);
  
    const y =
      cy + radius * Math.sin(-(midAngle || 0) * RADIAN);
  
    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${((percent || 0) * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  const MyCustomPie = (props) => {
    return (
      <Sector
        {...props}
        fill={COLORS[props.index % COLORS.length]}
      />
    );
  };
  
  export default function PieChartWithCustomizedLabel() {
    return (
      <div style={{ width: "300px", height: "250px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              shape={MyCustomPie}
              outerRadius={110}
            />
          </PieChart>
        </ResponsiveContainer>
  
        <RechartsDevtools />
      </div>
    );
  }