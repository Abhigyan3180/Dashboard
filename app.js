import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Redux store (not included here)
import ThemeProvider, { themes } from "./theme";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [currentTheme, setCurrentTheme] = React.useState(themes.LightTheme);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.LightTheme ? themes.DarkTheme : themes.LightTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard toggleTheme={toggleTheme} />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
