import React from "react";
import { Box } from "@material-ui/core";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (
    <Box className="home-content" p={2}>
      <Box fontSize={18} mb={2}>
        Home
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 150,
            marginRight:20
          },
        }}
      >
        <Paper elevation={3}>Admin</Paper>
        <Paper elevation={3}>Manager</Paper>
        <Paper elevation={3}>Register</Paper>
      </Box>
    </Box>
  );
}
