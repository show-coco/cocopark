import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  purple: {
    primary: "#7A52F4",
    resting: "#E4DCFD",
    "primary.hover": "#6242C3",
    "resting.hover": "#D3CAED",
    "resting.active": "#B9AAE7",
  },
  black: {
    primary: "#000000",
  },
  gray: {
    primary: "#5D5D5B",
  },
  green: "#03DB80",
  outline: {
    light: "#E2E9E6",
    dark: "#F8FAF9",
  },
  soft: {
    light: "#F5F8F8",
  },
};

const textStyles = {
  h1: {
    fontSize: ["42px"],
    fontWeight: "extrabold",
    lineHeight: "auto",
    letterSpacing: "0",
  },
  h2: {
    fontSize: ["34px"],
    fontWeight: "extrabold",
    lineHeight: "auto",
    letterSpacing: "0",
  },
  h3: {
    fontSize: ["28px"],
    fontWeight: "extrabold",
    lineHeight: "auto",
    letterSpacing: "0",
  },
  h4: {
    fontSize: ["24px"],
    fontWeight: "extrabold",
    lineHeight: "auto",
    letterSpacing: "0",
  },
  h5: {
    fontSize: ["20px"],
    fontWeight: "extrabold",
    lineHeight: "28px",
    letterSpacing: "0",
  },
  h6: {
    fontSize: ["18px"],
    fontWeight: "extrabold",
    lineHeight: "24px",
    letterSpacing: "0",
  },
  button: {
    16: {
      fontSize: ["16px"],
      fontWeight: "bold",
      lineHeight: "24px",
      letterSpacing: "0",
    },
    14: {
      fontSize: ["14px"],
      fontWeight: "bold",
      lineHeight: "21px",
      letterSpacing: "0",
    },
  },
  text: {
    16: {
      regular: {
        fontSize: ["16px"],
        fontWeight: "normal",
        lineHeight: "24px",
        letterSpacing: "0",
      },
      light: {
        fontSize: ["16px"],
        fontWeight: "light",
        lineHeight: "24px",
        letterSpacing: "0",
      },
    },
    14: {
      bold: {
        fontSize: ["14px"],
        fontWeight: "bold",
        lineHeight: "21px",
        letterSpacing: "0",
      },
      regular: {
        fontSize: ["14px"],
        fontWeight: "normal",
        lineHeight: "21px",
        letterSpacing: "0",
      },
      light: {
        fontSize: ["14px"],
        fontWeight: "light",
        lineHeight: "21px",
        letterSpacing: "0",
      },
    },
    12: {
      bold: {
        fontSize: ["12px"],
        fontWeight: "bold",
        lineHeight: "18px",
        letterSpacing: "0",
      },
      medium: {
        fontSize: ["12px"],
        fontWeight: "medium",
        lineHeight: "18px",
        letterSpacing: "0",
      },
    },
  },
};

export const theme = extendTheme({ colors, textStyles });
