import { createTheme } from "@mui/material/styles";

const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007bff" },
    secondary: { main: "#ffc107" },
  },
});

const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6f1e5e" },
    secondary: { main: "#ffc107" },
  },
});

export const themes = { LightTheme, DarkTheme };

const ThemeProvider = ({ children, theme }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProvider;
