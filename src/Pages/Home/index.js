import React, { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../redux/actions/userActions";

export default function Home() {
  const dispatch = useDispatch();

  const styleTitleCard = {
    textAlign: "center",
    marginTop: "20px",
  };
  const stylePersonTag = {
    marginTop: "25px",
    marginLeft: "20px",
  };

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  const { lists } = useSelector((state) => state.user);

  let totalAdmin = 0;
  let totalManager = 0;
  let totalRegister = 0;
  for (let item of lists) {
    if (item.Role === "Admin") {
      totalAdmin++;
    }
    if (item.Role === "Manager") {
      totalManager++;
    }
    if (item.Role === "Register") {
      totalRegister++;
    }
  }

  return (
    <Box className="home-content" p={2} style={{ position: "relative" }}>
      <Box fontSize={18} mb={2}>
        Home
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 340,
            height: 340,
            margin: "auto",
          },
        }}
      >
        <Paper elevation={3}>
          <h4 style={styleTitleCard}>Admin</h4>
          <Box mt={2}>
            <img
              src="/img/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
              width="340px"
              height="200px"
              alt="hinhAnh"
              style={{ cursor: "pointer" }}
            />
          </Box>

          <Box display="flex" justifyContent="space-around">
            <Typography style={stylePersonTag}>
              Member : {totalAdmin}{" "}
            </Typography>
            <Button
              style={{ marginTop: "20px" }}
              variant="outlined"
              color="primary"
            >
              Detail
            </Button>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <h4 style={styleTitleCard}>Manager</h4>
          <Box mt={2}>
            <img
              src="/img/dylan-gillis-KdeqA3aTnBY-unsplash.jpg"
              width="340px"
              height="200px"
              alt="hinhAnh"
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Typography style={stylePersonTag}>
              Member : {totalManager}
            </Typography>
            <Button
              style={{ marginTop: "20px" }}
              variant="outlined"
              color="primary"
            >
              Detail
            </Button>
          </Box>
        </Paper>
        <Paper elevation={3}>
          <h4 style={styleTitleCard}>Register</h4>
          <Box mt={2}>
            <img
              src="/img/blake-wisz-Xn5FbEM9564-unsplash.jpg"
              width="340px"
              height="200px"
              style={{ cursor: "pointer" }}
              alt="hinhAnh"
            />
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Typography style={stylePersonTag}>
              Member : {totalRegister}{" "}
            </Typography>
            <Button
              style={{ marginTop: "20px" }}
              variant="outlined"
              color="primary"
            >
              Detail
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box style={{ position: "absolute", bottom: "-200px", left: "260px" }}>
        <img
          width="750px"
          height="130px"
          src="/img/unnamed.png"
          alt="hinhAnh"
        />
        <Typography
          style={{
            fontSize: "9px",
            color: "grey",
            textAlign: "center",
            paddingTop: "20px",
            marginBottom: "-25px",
          }}
        >
          Developer by Tran Van hung, 2021
        </Typography>
      </Box>
    </Box>
  );
}
