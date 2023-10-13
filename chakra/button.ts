import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "40px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#36454F",
      _hover: {
        bg: "#526a7a",
      },
    },
  },
};
