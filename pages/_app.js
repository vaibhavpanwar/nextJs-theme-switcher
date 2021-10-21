import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import { DarkTheme, LightTheme, GlobalStyles } from "../styles/theme";
import Header from "@components/Layout/header.component";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const store = useStore();
  const [darkMode, setDarkMode] = useState(true);

  const switchTheme = () => setDarkMode(!darkMode);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? DarkTheme : LightTheme}>
        <GlobalStyles />
        <Header dark={darkMode} setDark={switchTheme} />

        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
