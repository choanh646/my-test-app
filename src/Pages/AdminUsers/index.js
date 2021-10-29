import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { IoPersonAdd } from "react-icons/io5";
import { FiFilter, FiEdit3 } from "react-icons/fi";
import Modal from "@mui/material/Modal";
import { Box } from "@material-ui/core";
import { BsSortDownAlt } from "react-icons/bs";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getListUser,
  deleteUser,
  addUser,
  setUserSelected,
  updateUser,
} from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import ModalUpdateUser from "./ModalUpdateUser";

export default function AdminUsers() {
  const dispatch = useDispatch();

  // modal create
  const [openCreate, setOpenCreate] = React.useState(false);
  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  // modal update
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const handleOpenUpdate = (item) => {
    setOpenUpdate(true);
  };
  const handleCloseUpdate = () => setOpenUpdate(false);

  const styleModal = {
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
  const [GioiTinh, setGioiTinh] = React.useState(0);
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
  const [Role, setRole] = React.useState("Admin");
  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };

  const { lists, userSelected } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  const handleDeleteUser = (item) => {
    Swal.fire({
      title: `Bạn có muốn xóa ${item.Ten}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Đồng ý",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy bỏ",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(item.ID));
        Swal.fire("Xóa Thành Công!", "", "success");
      }
    });
  };

  const [Ten, setTen] = useState("");
  const [NgaySinh, setNgaySinh] = useState("");
  const [NgayTao, setNgayTao] = useState("");

  const handleSubmitCreate = (e) => {
    e.preventDefault();
    const valueItem = { Ten, NgaySinh, GioiTinh, NgayTao, Role };
    dispatch(addUser(valueItem));
    handleCloseCreate();
  };

  const getUserSelected = (item) => {
    dispatch(setUserSelected(item));
    handleOpenUpdate();
  };
  const handleSubmitUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(userSelected));
    handleCloseUpdate();
    dispatch(getListUser());
  };

  return (
    <Box className="adminUsers__content" p={2}>
      <Box>
        <Box fontSize={18} mb={2}>
          Users Management
        </Box>
        <Box
          display="flex"
          justifyContent="flex-end"
          mb={4}
          style={{ marginTop: "-40px" }}
        >
          {/* START FILTER - Chưa hoàn thành*/}
          <FormControl
            style={{ marginRight: "15px", width: "150px" }}
            color="primary"
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              <FiFilter style={{ marginRight: "5px" }} />
              Filters
            </InputLabel>
            <Select native defaultValue="all" label="filter-tool">
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Register">Register</option>
            </Select>
          </FormControl>
          {/* END FILTER */}

          {/* START SORT - chưa hoàn thành*/}
          <FormControl
            style={{ marginRight: "15px", width: "150px" }}
            color="primary"
            size="small"
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-age-native-simple">
              <BsSortDownAlt style={{ marginRight: "5px" }} />
              Sort
            </InputLabel>
            <Select native defaultValue="all" label="sort-tool">
              <option value="ID">ID</option>
              <option value="Ten">Họ Tên</option>
              <option value="NgaySinh">Ngày Sinh</option>
              <option value="NgayTao">Ngày Tạo</option>
            </Select>
          </FormControl>
          {/* END SORT */}

          {/* START CREATE */}
          <Button
            onClick={handleOpenCreate}
            style={{ marginRight: "15px" }}
            color="primary"
            variant="contained"
            startIcon={<IoPersonAdd />}
          >
            CREATE
          </Button>
          <Modal open={openCreate} onClose={handleCloseCreate}>
            <Box sx={styleModal}>
              <form
                className="form__create"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitCreate}
              >
                <h2
                  style={{
                    textAlign: "center",
                    color: "#1F285A",
                    margin: "20px 0 40px 0",
                  }}
                >
                  <i>Create New Account</i>
                </h2>
                <TextField
                  style={styleTextField}
                  label="ID"
                  variant="outlined"
                  disabled
                />
                <TextField
                  style={styleTextField}
                  label="Họ Tên"
                  variant="outlined"
                  required
                  onChange={(e) => setTen(e.target.value)}
                />
                <TextField
                  style={styleTextField}
                  label="Ngày Sinh"
                  variant="outlined"
                  required
                  onChange={(e) => setNgaySinh(e.target.value)}
                />
                <TextField
                  select
                  label="Giới Tính"
                  value={GioiTinh}
                  onChange={handleChangeGioiTinh}
                  variant="outlined"
                  required
                  style={styleTextField}
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
                />
                <TextField
                  select
                  style={styleTextField}
                  label="Chức Vụ"
                  value={Role}
                  onChange={handleChangeRole}
                  variant="outlined"
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
                    Create
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleCloseCreate}
                  >
                    Cancel
                  </Button>
                </Box>
              </form>
            </Box>
          </Modal>
          {/* END CREATE */}
        </Box>

        {/* START TABLE LIST USER */}
        <TableContainer
          component={Paper}
          style={{ height: "543px", overflowY: "scroll" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <b>ID</b>
                </TableCell>
                <TableCell align="left">
                  <b>Họ Tên</b>
                </TableCell>
                <TableCell align="left">
                  <b>Ngày sinh</b>
                </TableCell>
                <TableCell align="left">
                  <b>Giới Tính</b>
                </TableCell>
                <TableCell align="left">
                  <b>Ngày Tạo</b>
                </TableCell>
                <TableCell align="left">
                  <b>Chức Vụ</b>
                </TableCell>
                <TableCell align="center" />
                <TableCell align="center" />
              </TableRow>
            </TableHead>
            <TableBody>
              {lists?.map((item, index) => (
                <TableRow key={item.ID}>
                  <TableCell align="left">{item.ID}</TableCell>
                  <TableCell align="left">{item.Ten}</TableCell>
                  <TableCell align="left">{item.NgaySinh}</TableCell>
                  <TableCell align="left">
                    {item.GioiTinh === 0 ? "Nam" : "Nữ"}
                  </TableCell>
                  <TableCell align="left">{item.NgayTao}</TableCell>
                  <TableCell align="left">{item.Role}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      size="medium"
                      color="primary"
                      style={{ outline: "none" }}
                      onClick={() => getUserSelected(item)}
                    >
                      <FiEdit3 fontSize="inherit" />
                    </IconButton>
                    <ModalUpdateUser
                      openUpdate={openUpdate}
                      data={userSelected}
                      handleCloseUpdate={handleCloseUpdate}
                      styleModal={styleModal}
                      handleSubmitUpdate={handleSubmitUpdate}
                      styleTextField={styleTextField}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      size="medium"
                      color="secondary"
                      style={{ outline: "none" }}
                      onClick={() => handleDeleteUser(item)}
                    >
                      <AiOutlineDelete fontSize="inherit" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* END TABLE LIST USER */}
      </Box>
    </Box>
  );
}
