import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

export default function ModalUpdateUser({
  openUpdate,
  handleCloseUpdate,
  styleModal,
  handleSubmitUpdate,
  styleTextField,
  data,
}) {
  const [Ten, setTen] = useState("");
  const [NgaySinh, setNgaySinh] = useState("");
  const [NgayTao, setNgayTao] = useState("");

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

  return (
    <Modal
      id="modal__update__user"
      open={openUpdate}
      onClose={handleCloseUpdate}
    >
      <Box sx={styleModal}>
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
            <i>Update Info User</i>
          </h2>
          <TextField
            style={styleTextField}
            label="ID"
            variant="outlined"
            disabled
            defaultValue={data.ID}
          />
          <TextField
            style={styleTextField}
            label="Họ Tên"
            variant="outlined"
            required
            onChange={(e) => setTen(e.target.value)}
            defaultValue={data.Ten}
          />
          <TextField
            style={styleTextField}
            label="Ngày Sinh"
            variant="outlined"
            required
            onChange={(e) => setNgaySinh(e.target.value)}
            defaultValue={data.NgaySinh}
          />
          <TextField
            select
            label="Giới Tính"
            // value={GioiTinh}
            onChange={handleChangeGioiTinh}
            variant="outlined"
            required
            style={styleTextField}
            defaultValue={data.GioiTinh}
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
            defaultValue={data.NgayTao}
          />
          <TextField
            select
            style={styleTextField}
            label="Chức Vụ"
            // value={Role}
            onChange={handleChangeRole}
            variant="outlined"
            defaultValue={data.Role}
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
              onClick={handleCloseUpdate}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}
