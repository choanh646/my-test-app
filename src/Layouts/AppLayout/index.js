import React from "react";
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import { Box } from "@material-ui/core";

export default function AppLayout({ children }) {
  return (
    <>
      <Box display="flex">
        <SideBar />
        <Box id="main" flex={1} minHeight="100vh" bgcolor="#F9FAFE">
          <Header />
          {children}
        </Box>
      </Box>
    </>
  );
}
