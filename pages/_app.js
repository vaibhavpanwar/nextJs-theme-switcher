import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme, GlobalStyles } from "../styles/theme";
import Header from "@components/Layout/header.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(true);

  const switchTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
      <GlobalStyles />
      <Header dark={darkMode} setDark={switchTheme} />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
