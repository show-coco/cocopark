import { ComponentProps, FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options: ComponentProps<typeof Line>["options"] = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sep", "Oct"];

export const data: ComponentProps<typeof Line>["data"] = {
  labels,
  datasets: [
    {
      label: "Filled",
      backgroundColor: "#FFBD0024",
      borderColor: "#FFBD00",
      data: [10, 20, 3, 3, 2, 2, 1, 2, 9, 1, 1, 2],
      fill: true,
    },
  ],
};

export const PriceHistory: FC = () => {
  return (
    <Box border="1px" borderColor="outline.light" rounded="md">
      <Box borderBottom="1px" borderColor="outline.light" p="21px 25px">
        <Text textStyle="h6">Price history</Text>
      </Box>

      <Box py="25px">
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};
