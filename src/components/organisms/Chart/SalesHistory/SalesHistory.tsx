import { Box, Text } from "@chakra-ui/react";
import { ComponentProps, FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options: ComponentProps<typeof Bar>["options"] = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "25",
  "26",
  "27",
  "28",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export const data: ComponentProps<typeof Bar>["data"] = {
  labels,
  datasets: [
    {
      label: "Views",
      data: [3, 4, 2, 4, 4, 5, 8, 2, 4, 5, 2, 2, 4, 5, 2, 9],
      backgroundColor: "#7A52F4",
      maxBarThickness: 4,
      borderRadius: 100,
    },
    {
      label: "Sales",
      data: [1, 5, 3, 9, 2, 1, 2, 3, 3, 4, 5, 2, 4, 5, 2, 4],
      backgroundColor: "#F4C952",
      barThickness: 4,
      borderRadius: 100,
    },
  ],
};

export const SalesHistory: FC = () => {
  return (
    <Box border="1px" borderColor="outline.light" rounded="md">
      <Box borderBottom="1px" borderColor="outline.light" p="21px 25px">
        <Text textStyle="h6">Price history</Text>
      </Box>

      <Box py="25px">
        <Bar options={options} data={data} height="100" />
      </Box>
    </Box>
  );
};
