import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import { FiEdit3 } from "react-icons/fi";

export default function InfoUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };


  return (
    <Box className="infoUser__content" p={2}>
      <Box fontSize={18} mb={2}>
        User Profile
      </Box>
      <Box className="container" display="flex" style={{marginTop:"30px"}}>
        <Box style={{ width: "320px" , marginTop:"50px" }}>
          <img
            src="https://picsum.photos/200/300"
            width="250px"
            height="250px"
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 20px #594757",
            }}
          />
        </Box>
        <Box flex={1}>
          <TableContainer>
            <Table>
              <TableRow>
                <TableCell align="left">
                  <b>ID</b>
                </TableCell>
                <TableCell align="left">1651</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <b>Họ Tên</b>
                </TableCell>
                <TableCell align="left">Trần Văn Hùng</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <b>Ngày sinh</b>
                </TableCell>
                <TableCell align="left">12/05/1997</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <b>Giới Tính</b>
                </TableCell>
                <TableCell align="left">Nam</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <b>Ngày Tạo</b>
                </TableCell>
                <TableCell align="left">28/10/2021</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">
                  <b>Chức Vụ</b>
                </TableCell>
                <TableCell align="left">Admin</TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box sx={{marginTop:"70px", marginLeft:"500px"}}>
        <Button onClick={handleOpen} variant="outlined" color="secondary" style={{fontSize:"18px"}} startIcon={<FiEdit3/>}>
          EDIT PROFILE
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <p>show form và cho phép chỉnh sửa thông tin</p>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
