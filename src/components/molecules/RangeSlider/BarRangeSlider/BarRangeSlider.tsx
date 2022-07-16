import {
  Box,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";

type Props = {
  dataSet: number[];
  min: number;
  max: number;
};

export const BarRangeSlider: FC<Props> = ({ dataSet, min, max }) => {
  const highest = useMemo(() => {
    const _dataSet = [...dataSet];
    return _dataSet.sort((a, b) => b - a)[0];
  }, [dataSet]);

  const range = max - min;
  const step = range / 18;

  const [start, setStart] = useState(min);
  const [end, setEnd] = useState(max);

  return (
    <Box>
      <HStack alignItems="flex-end" spacing="5px" h="180px">
        {dataSet.map((data, i) => {
          const value = (i + 1) * step;
          return (
            <Bar
              isActive={value >= start && value <= end}
              height={(data / highest) * 100}
            />
          );
        })}
      </HStack>
      <RangeSlider
        aria-label={["min", "max"]}
        colorScheme="purple"
        min={min}
        max={max}
        defaultValue={[min, max]}
        step={step}
        onChange={(values) => {
          setStart(Number(values[0]));
          setEnd(Number(values[1]));
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>

      <HStack justify="space-between" mt="18px">
        <Text textStyle="text.12.bold">${start.toLocaleString()}</Text>
        <Text textStyle="text.12.bold">${end.toLocaleString()}</Text>
      </HStack>
    </Box>
  );
};

type BarProps = {
  isActive: boolean;
  height: number;
};

const Bar: FC<BarProps> = ({ isActive, height }) => {
  return (
    <Box
      rounded="sm"
      w="10px"
      h={`${height}%`}
      bgColor={isActive ? "purple.primary" : "purple.resting"}
    ></Box>
  );
};
