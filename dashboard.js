import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from "@mui/material";
import { Brightness4Icon, Brightness7Icon } from "@mui/icons-material";
import Table from "./components/Table"; // Replace with your Table component
import Chart from "./components/Chart"; // Replace with your Chart component
import Calendar from "./components/Calendar"; // Replace with your Calendar component
import KanbanBoard from "./components/KanbanBoard"; // Replace with your KanbanBoard component

const Dashboard = ({ toggleTheme }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            Admin Dashboard
          </Typography>
          <Tooltip title="Toggle Theme">
            <IconButton onClick={toggleTheme} color="inherit" size="large">
              {currentTheme === themes.LightTheme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Table />
      <Chart />
      <Calendar />
      <KanbanBoard />
    </div>
  );
};

export default Dashboard;
