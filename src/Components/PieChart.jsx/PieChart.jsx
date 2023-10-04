/* import { Pie } from "react-chartjs-2";
import { Cell } from "recharts";

const PieChart = ({ yourDonation, totalDonation }) => {
  const remainingDonation = totalDonation - yourDonation;
  const data = [
    { name: "Your Donation", value: yourDonation },
    { name: "Remaining Donation", value: remainingDonation },
  ];

  const colors = ["#FF5733", "#33FF57"]; // Red and Green colors

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChart;
 */
