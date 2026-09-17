import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Arial Narrow', 'Roboto Condensed', Impact, sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      50: "#fff0e8",
      100: "#ffd3bd",
      400: "#ff5a1f",
      500: "#e94b16",
      600: "#c63d10",
    },
    bg: {
      base: "#ece8df",
      surface: "#f6f3ed",
      surfaceHover: "#e5dfd5",
      border: "#1d1d1b",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#ece8df",
        color: "#171717",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.025) 1px, transparent 1px)",
        backgroundSize: "4px 4px, 4px 4px",
      },
      "::selection": {
        background: "#ff5a1f",
        color: "#fff",
      },
    },
  },
});

export default theme;
