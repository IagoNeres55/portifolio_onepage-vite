import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  colors: {
    brand: {
      50: "#eafcff",
      100: "#c9f3ff",
      400: "#13ADC7",
      500: "#6978D1",
      600: "#945DD6",
    },
    bg: {
      base: "#0b1120",
      surface: "rgba(255, 255, 255, 0.03)",
      surfaceHover: "rgba(255, 255, 255, 0.06)",
      border: "rgba(255, 255, 255, 0.09)",
    },
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        bg: "#0b1120",
        backgroundImage:
          "radial-gradient(circle at 15% 0%, rgba(19,173,199,0.16), transparent 45%), radial-gradient(circle at 85% 20%, rgba(148,93,214,0.14), transparent 45%)",
        backgroundAttachment: "fixed",
        color: "#fff",
      },
      "::selection": {
        background: "#945DD6",
        color: "#fff",
      },
    },
  },
});

export default theme;
