import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme: ThemeConfig = extendTheme({
  styles: {
    global: (props: ThemeConfig) => ({
      "::-webkit-scrollbar-thumb": {
        background: mode("gray.200", "#171923")(props),
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  textStyles: {
    h1: {
      fontSize: ["38px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
    h4: {
      fontSize: ["24px", "30px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  components: {
    Divider: {
      baseStyle: (props: ThemeConfig) => ({
        borderColor: mode("gray.300", "gray.700")(props),
      }),
    },
    Code: {
      variants: {
        reversable: (props: ThemeConfig) => ({
          bg: mode("gray.200", "whiteAlpha.300")(props),
        }),
        titleCV: (props: ThemeConfig) => ({
          bg: mode("blue.500", "purple.700")(props),
        }),
      },
    },
    Text: {
      variants: {
        about: (props: ThemeConfig) => ({
          color: mode("blue.700", "purple.400")(props),
        }),
        bio: (props: ThemeConfig) => ({
          color: mode("blue.500", "purple.300")(props),
        }),
        title: (props: ThemeConfig) => ({
          color: mode("blue.700", "gray.400")(props),
        }),
        company: (props: ThemeConfig) => ({
          color: mode("blue.600", "purple.100")(props),
        }),
      },
    },
    Link: {
      variants: {
        "link-color": (props: ThemeConfig) => ({
          color: mode("blue.200", "purple.200")(props),
        }),
      },
    },
  },
});

export default theme;
