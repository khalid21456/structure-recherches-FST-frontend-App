import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import ModeIcon from "@mui/icons-material/Mode";
import Modal from "@mui/material/Modal";
import "../../../style/AdminDashboard.css";
import { Button } from "@mui/material";
import {  Backdrop } from '@mui/material';

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

export default function EnseignantAdmin(props) {
  const [enseignants, setEnseignants] = useState([]);
  const [enseignantAdded, setAddedEnseignant] = useState({
    nom: "",
    prenom: "",
    email: "",
    labo: "",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  axios
    .get("http://localhost:8080/FSTBM/Admin/Enseignant/getAll")
    .then((response) => {
      setEnseignants(response.data);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });

  function deleteEnseignant(event) {
    let id = event.target.parentElement.id;
    console.log(id);
    let fullName;
    axios
      .get(`http://localhost:8080/FSTBM/Admin/Enseignant/getNameById/${id}`)
      .then((response) => {
        fullName = response.data.fullName;
        console.log(fullName);
      })
      .catch((error) => {
        console.log("Error : " + error);
      });
    console.log(fullName);
    if (
      window.confirm(
        "voulez-vous vraiment supprimer les données de " + fullName
      )
    ) {
      axios
        .delete(`http://localhost:8080/FSTBM/Admin/Enseignant/deleteEns/${id}`)
        .then((response) => {})
        .catch((error) => {
          console.error("Error : ", error);
        });
    }
  }

  function tester() {
    axios
      .post(
        "http://localhost:8080/FSTBM/Admin/Enseignant/AjouterEnseignant",
        enseignantAdded
      )
      .then((response) => {})
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  return (
    <div>
      <div className="flex justify-center pt-10">
        <div
          style={{ height: "600px" }}
          className="w-11/12  overflow-auto bg-white border-2"
        >
          <div
            style={{ fontFamily: "Poppins" }}
            className="h-20 pt-5 pl-10 border-b text-3xl  bg-slate-200 "
          >
            Les Enseignants
          </div>
          <div className="table-enseignants flex justify-center mt-10 ">
            <div style={{ width: "1200px", height: "600px" }} className="">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                      >
                        Nom et prénom
                      </TableCell>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                        align="left"
                      >
                        Email
                      </TableCell>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                        align="left"
                      >
                        Date d'embauche
                      </TableCell>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                        align="left"
                      >
                        Laboratoire
                      </TableCell>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                        align="left"
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {enseignants.map((enseignant) => (
                      <TableRow
                        key={enseignant.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {enseignant.nom} {enseignant.prenom}
                        </TableCell>
                        <TableCell align="left">{enseignant.email}</TableCell>
                        <TableCell align="left">
                          {enseignant.dateEmbauche.substring(0, 10)}
                        </TableCell>
                        <TableCell align="left">{enseignant.labo}</TableCell>
                        <TableCell align="left">
                          <div className="flex">
                            <div style={{ color: "green" }} id={enseignant.id}>
                              <ModeIcon
                                id={enseignant.id}
                                style={{ fontSize: "30px" }}
                                className="cursor-pointer mr-5"
                                onClick={handleOpen}
                              />
                              <Modal
                                open={open}
                                onClose={handleClose}
                                BackdropComponent={Backdrop}
                                // aria-labelledby="modal-modal-title"
                                // aria-describedby="modal-modal-description"
                                BackdropProps={{
                                  style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' }, // Customize backdrop color and opacity
                                }}
                              >
                                <Box sx={style}>
                                  <Typography
                                    id="modal-modal-title"
                                    variant="h2"
                                    component="h2"
                                  >
                                    Text in a modal
                                  </Typography>
                                  <Typography
                                    id="modal-modal-description"
                                    sx={{ mt: 2 }}
                                  >
                                    Duis mollis, est non commodo luctus, nisi
                                    erat porttitor ligula.
                                  </Typography>
                                </Box>
                              </Modal>
                            </div>
                            <div
                              style={{ color: "red" }}
                              id={enseignant.id}
                              onClick={deleteEnseignant}
                            >
                              <DeleteIcon
                                id={enseignant.id}
                                style={{ fontSize: "30px" }}
                                className="cursor-pointer"
                              />
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
      <div className="doctorantEspace flex justify-center pt-10">
        <div style={{ height: "550px" }} className="w-11/12  bg-white border-2">
          <div
            style={{ fontFamily: "Poppins" }}
            className="h-20 pt-5 pl-10 border-b text-3xl bg-slate-200"
          >
            Ajouter Un Enseignant
          </div>
          <div className="inputs flex justify-center">
            <div className="w-11/12 mt-5 flex justify-around">
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Nom
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      nom: e.target.value,
                    });
                  }}
                  className="w-72"
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Prénom
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      prenom: e.target.value,
                    });
                  }}
                  className="w-72"
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Email
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      email: e.target.value,
                    });
                  }}
                  className="w-72"
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
            </div>
          </div>
          <div className="inputs flex justify-center">
            <div className="w-11/12 mt-3 flex justify-around">
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Laboratoire
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  style={{ width: "570px" }}
                  className=""
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      labo: e.target.value,
                    });
                  }}
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Adresse
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  style={{ width: "400px" }}
                  className=""
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
            </div>
          </div>
          <div className="inputs flex justify-center">
            <div className="w-11/12 mt-3 flex justify-around">
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Date De naissance
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  style={{ width: "400px" }}
                  className=""
                />
                <br />
                <label style={{ color: "red", visibility: "hidden" }}>
                  *Ce champ est obligatoitre !
                </label>
              </div>
              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Image de profile
                </label>
                <br />
                <TextField
                  id="outlined-basic"
                  style={{ width: "400px" }}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="btnAjouterEnseignant">
            <div className="flex justify-end w-11/12 mt-4">
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#2d0560",
                    padding: "15px 80px",
                    marginRight: "20px",
                  }}
                  onClick={tester}
                >
                  Ajouter
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    borderColor: "#2d0560",
                    color: "#2d0560",
                    padding: "15px 40px",
                  }}
                >
                  Annuler
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
