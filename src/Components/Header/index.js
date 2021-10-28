import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import {
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
} from "@material-ui/core";

export default function Header() {

  return (
    <div id="header">
      <Box
        minHeight={80}
        p={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          component="h1"
          style={{ fontSize: "28px", fontWeight: 600 }}
        >
          DASHBOARD
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton size="medium" style={{ outline: "none" }}>
            <BiSearch />
          </IconButton>
          <IconButton size="medium" style={{ outline: "none" }}>
            <IoNotificationsOutline />
          </IconButton>
          <Box display="flex" alignItems="center" style={{ cursor: "pointer" }}>
            <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
            <Box ml={2}>
              <Box style={{ fontWeight: 700 }}>Trần Văn Hùng</Box>
              <Box component="span" style={{ fontSize: 12 }}>
                ID: 1
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider />
    </div>
  );
}
