import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AnimationScrollProvider } from "./components/AnimationScroll";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  xs: "280px",
  sm: "429px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
const theme = extendTheme({ breakpoints });
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AnimationScrollProvider
      globalScrollConfig={{
        duration: 100,
      }}
    >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AnimationScrollProvider>
  </React.StrictMode>
);
