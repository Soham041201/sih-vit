import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      // light mode bg, text color
      color: mode("gray.800", "whiteAlpha.800")(props),
      // dark mode bg, text color
      bg: mode("gray.100", "gray.600")(props),
    },
  }),
};

// const components = {
//   HStack: {
//     baseStyle: (props) => ({
//       dialog: {
//         color: mode("blue", "red")(props),
//         bg: mode("blue", "red")(props),
//       },
//     }),
//   },
// };

const theme = extendTheme({
  // components,
  styles,
});

export default theme;

// // https://stackoverflow.com/questions/64558533/changing-the-dark-mode-color-in-chakra-ui
