import React, { useEffect, useState, useStyles } from "react";
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
import { Backdrop } from "@mui/material";
import ImageUploaderEnseignant from "../../ImageUploaders/ImageUploaderEnseignant";

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
    dateNaissance: "",
    // address :new Date("")
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function AnnulerValues() {
    setAddedEnseignant({
      nom: "",
      prenom: "",
      email: "",
      labo: "",
      address: "",
      dateNaissance: "",
    });
  }

  useEffect(() => {
    const fetchDataEnseignant = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Enseignant/getAll"
        );
        setEnseignants(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setEnseignants([]);
      }
    };

    fetchDataEnseignant();
  }, []);

  function deleteEnseignant(event) {
    let id = event.target.parentElement.id;
    console.log(id);
    let fullName = null;
    if (
      window.confirm(
        "voulez-vous vraiment supprimer les données de " + fullName
      )
    ) {
      axios
        .delete(`http://localhost:8080/FSTBM/Admin/Enseignant/deleteEns/${id}`)
        .then((response) => {
          setEnseignants(response.data);
        })
        .catch((error) => {
          console.error("Error : ", error);
        });
    }
  }

  function AjouterEnseignant() {
    document.getElementById("nom-error").style.visibility = "hidden";
    document.getElementById("prenom-error").style.visibility = "hidden";
    document.getElementById("email-error").style.visibility = "hidden";
    document.getElementById("labo-error").style.visibility = "hidden";
    if (enseignantAdded.email == "") {
      document.getElementById("email-error").style.visibility = "visible";
    }
    if (enseignantAdded.labo == "") {
      document.getElementById("labo-error").style.visibility = "visible";
    }
    if (enseignantAdded.nom == "") {
      document.getElementById("nom-error").style.visibility = "visible";
    }
    if (enseignantAdded.prenom == "") {
      document.getElementById("prenom-error").style.visibility = "visible";
    }
    if (
      enseignantAdded.prenom != "" &&
      enseignantAdded.nom != "" &&
      enseignantAdded.labo != "" &&
      enseignantAdded.email != ""
    ) {
      axios
        .post(
          "http://localhost:8080/FSTBM/Admin/Enseignant/AjouterEnseignant",
          enseignantAdded
        )
        .then((response) => {
          setEnseignants(response.data);
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
      document.getElementById("nom-error").style.visibility = "hidden";
      document.getElementById("prenom-error").style.visibility = "hidden";
      document.getElementById("email-error").style.visibility = "hidden";
      document.getElementById("labo-error").style.visibility = "hidden";
    }
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
            <div style={{ width: "1200px", height: "300px" }}>
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
                                key={enseignant.id}
                                onClose={handleClose}
                                BackdropComponent={Backdrop}
                                // aria-labelledby="modal-modal-title"
                                // aria-describedby="modal-modal-description"
                                BackdropProps={{
                                  style: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                  }, // Customize backdrop color and opacity
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
          {/* <div className="block">
              <div className="w-full h-24"></div>
          </div> */}
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
                  className="EnseignantField w-72"
                  value={enseignantAdded.nom}
                />
                <br />
                <label
                  style={{ color: "red", visibility: "hidden" }}
                  id="nom-error"
                >
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
                  className="EnseignantField w-72"
                  value={enseignantAdded.prenom}
                />
                <br />
                <label
                  style={{ color: "red", visibility: "hidden" }}
                  id="prenom-error"
                >
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
                  className="EnseignantField w-72"
                  value={enseignantAdded.email}
                />
                <br />
                <label
                  style={{ color: "red", visibility: "hidden" }}
                  id="email-error"
                >
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
                  className="EnseignantField"
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      labo: e.target.value,
                    });
                  }}
                  value={enseignantAdded.labo}
                />
                <br />
                <label
                  style={{ color: "red", visibility: "hidden" }}
                  id="labo-error"
                >
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
                  className="EnseignantField"
                  onChange={(e) => {
                    setAddedEnseignant({
                      ...enseignantAdded,
                      address: e.target.value,
                    });
                  }}
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
                <input
                  // value={enseignantAdded.dateNaissance || ""}
                  // onChange={(e) =>
                  //   setAddedEnseignant({
                  //     ...EnseignantAdmin,
                  //     dateNaissance: e.target.value,
                  //   })
                  // }
                  type="date"
                  style={{
                    width: "590px",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    padding: "15px",
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
                  Image de profile
                </label>
                <br />
                <ImageUploaderEnseignant className="mt-5" />
              </div>
            </div>
          </div>
          <div className="btnAjouterEnseignant">
            <div className="flex justify-center w-11/12 mt-4">
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#2d0560",
                    padding: "15px 80px",
                    marginRight: "20px",
                  }}
                  onClick={AjouterEnseignant}
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
                  onClick={AnnulerValues}
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
