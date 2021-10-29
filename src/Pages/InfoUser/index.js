import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { FiEdit3 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { TableBody } from "@material-ui/core";
import { updateAuth } from "../../redux/actions/authAction";

export default function InfoUser() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 650,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const styleTextField = {
    width: "250px",
    margin: "20px",
    justifyContent: "center",
  };

  // GENDER
  const genderOptions = [
    {
      value: 0,
      label: "Nam",
    },
    {
      value: 1,
      label: "Nữ",
    },
  ];
  const [GioiTinh, setGioiTinh] = useState(0);
  const handleChangeGioiTinh = (event) => {
    setGioiTinh(event.target.value);
  };

  // ROLE
  const roleOptions = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "Register",
      label: "Register",
    },
  ];
  const [Role, setRole] = useState("Admin");
  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const [Ten, setTen] = useState("Trần Văn Hùng");
  const [NgaySinh, setNgaySinh] = useState("12/05/1997");
  const [NgayTao, setNgayTao] = useState("28/10/2021");

  const { auth } = useSelector((state) => state.auth);
  useEffect(() => {}, [auth]);

  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    const authItem = {
      ID: auth.ID,
      Ten,
      NgaySinh,
      GioiTinh,
      NgayTao,
      Role,
      Gmail: auth.Gmail,
    };
    dispatch(updateAuth(authItem));
    handleClose();
  };

  return (
    <Box className="infoUser__content" p={2}>
      <Box fontSize={18} mb={2}>
        User Profile
      </Box>
      <Box className="container" display="flex" style={{ marginTop: "30px" }}>
        <Box style={{ width: "320px", marginTop: "50px" }}>
          <img
            src="https://picsum.photos/200/300"
            width="250px"
            height="250px"
            alt="hinhAnh"
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 20px #594757",
            }}
          />
        </Box>
        <Box flex={1}>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell align="left">
                    <b>ID</b>
                  </TableCell>
                  <TableCell align="left">{auth.ID}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <b>Họ Tên</b>
                  </TableCell>
                  <TableCell align="left">{auth.Ten}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <b>Ngày sinh</b>
                  </TableCell>
                  <TableCell align="left">{auth.NgaySinh}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <b>Giới Tính</b>
                  </TableCell>
                  <TableCell align="left">
                    {auth.GioiTinh === 0 ? "Nam" : "Nữ"}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <b>Ngày Tạo</b>
                  </TableCell>
                  <TableCell align="left">{auth.NgayTao}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <b>Chức Vụ</b>
                  </TableCell>
                  <TableCell align="left">{auth.Role}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box sx={{ marginTop: "70px", marginLeft: "500px" }}>
        <Button
          onClick={handleOpen}
          variant="outlined"
          color="secondary"
          style={{ fontSize: "18px" }}
          startIcon={<FiEdit3 />}
        >
          EDIT PROFILE
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form
              className="form__update"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmitUpdate}
            >
              <h2
                style={{
                  textAlign: "center",
                  color: "#1F285A",
                  margin: "20px 0 40px 0",
                }}
              >
                <i>Update Profile</i>
              </h2>
              <TextField
                style={styleTextField}
                label="ID"
                variant="outlined"
                disabled
                defaultValue={auth.ID}
              />
              <TextField
                style={styleTextField}
                label="Họ Tên"
                variant="outlined"
                required
                onChange={(e) => setTen(e.target.value)}
                defaultValue={auth.Ten}
              />
              <TextField
                style={styleTextField}
                label="Ngày Sinh"
                variant="outlined"
                required
                onChange={(e) => setNgaySinh(e.target.value)}
                defaultValue={auth.NgaySinh}
              />
              <TextField
                select
                label="Giới Tính"
                // value={GioiTinh}
                onChange={handleChangeGioiTinh}
                variant="outlined"
                required
                style={styleTextField}
                defaultValue={auth.GioiTinh}
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={styleTextField}
                label="Ngày Tạo"
                variant="outlined"
                required
                onChange={(e) => setNgayTao(e.target.value)}
                defaultValue={auth.NgayTao}
              />
              <TextField
                select
                style={styleTextField}
                label="Chức Vụ"
                // value={Role}
                onChange={handleChangeRole}
                variant="outlined"
                defaultValue={auth.Role}
                required
              >
                {roleOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Box py={4} style={{ marginLeft: "190px" }}>
                <Button
                  style={{ marginRight: "20px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Update
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
