import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Section1 } from "./parts/Section1";
import { Section2 } from "./parts/Section2";
import { Section3 } from "./parts/Section3";
import { Section4 } from "./parts/Section4";
import { Section5 } from "./parts/Section5";
import { Section6 } from "./parts/Section6";
import { Footer } from "components/organisms/Footer/Footer";

export const LandingScreen: FC = () => {
  return (
    <Box>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </Box>
  );
};
