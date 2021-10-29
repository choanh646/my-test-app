import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Avatar, Divider, Typography } from "@material-ui/core";
import { BiHomeSmile } from "react-icons/bi";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function SideBar() {
  const { auth } = useSelector((state) => state.auth);
  return (
    <Box
      height="100vh"
      sx={{ bgcolor: "#2A2234", minWidth: 250, p: 2, position: "relative" }}
    >
      <Box>
        <Link to="/">
          <img
            width="240px"
            height="120px"
            src="/img/divi-logo-1-removebg-preview.png"
            alt="hinhAnh"
          />
        </Link>
      </Box>
      <Box>
        <Box mb={2} width={1}>
          <Link to="/">
            <Button
              variant="text"
              style={{ color: "white" }}
              fullWidth
              startIcon={<BiHomeSmile />}
            >
              Home
            </Button>
          </Link>
        </Box>
        <Box mb={2} width={1}>
          <Link to="/admin-users">
            <Button
              variant="text"
              style={{ color: "white" }}
              fullWidth
              startIcon={<FiUsers />}
            >
              Users management
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box mb={5}>
          <Link to="/info-user">
            <Box
              display="flex"
              alignItems="center"
              p={1}
              px={2}
              style={{ color: "white", border: "1px solid white" }}
              borderRadius="10px"
            >
              <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300" />
              <Box ml={2}>
                <Box style={{ fontWeight: 500 }}>{auth.Ten}</Box>
                <Box component="span" style={{ fontSize: 12 }}>
                  {auth.Gmail}
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
        <Divider style={{ backgroundColor: "white" }} />
        <Box
          mt={3}
          mb={5}
          style={{ color: "white", cursor: "pointer" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FiLogOut style={{ margin: "0 15px 0 -20px", fontSize: "20px" }} />
          <Typography>Log out</Typography>
        </Box>
      </Box>
    </Box>
  );
}
