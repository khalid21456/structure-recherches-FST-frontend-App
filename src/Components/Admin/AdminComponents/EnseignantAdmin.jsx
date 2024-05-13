import React, { useEffect, useState, useStyles } from "react";
import ReactDom from "react-dom";
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
import "../../../style/AdminDashboard.css";
import { Button } from "@mui/material";
import { Backdrop } from "@mui/material";
import ImageUploaderEnseignant, {
  imageEnseignantName,
} from "../../ImageUploaders/ImageUploaderEnseignant";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AdminProfileEnseignant from "./AdminProfileEnseignant";
import PersonIcon from "@mui/icons-material/Person";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";

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
  const [EnseignantAjouter, showEnseignant] = useState("");
  function AnnulerValues() {
    setAddedEnseignant({
      nom: "",
      prenom: "",
      email: "",
      labo: "",
      address: "",
      dateNaissance: "",
      profile: "",
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
      enseignantAdded.profile = imageEnseignantName();
      axios
        .post(
          "http://localhost:8080/FSTBM/Admin/Enseignant/AjouterEnseignant",
          enseignantAdded
        )
        .then((response) => {
          setEnseignants(response.data);
          showEnseignant(enseignantAdded.nom + " " + enseignantAdded.prenom);
        })
        .catch((error) => {
          console.log("Error: " + error);
        });
      
      document.getElementById("nom-error").style.visibility = "hidden";
      document.getElementById("prenom-error").style.visibility = "hidden";
      document.getElementById("email-error").style.visibility = "hidden";
      document.getElementById("labo-error").style.visibility = "hidden";
      console.log(document.getElementById("alert"));
      document.getElementById("alert").style.display = "";
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // document.getElementsByClassName("row").item(document.getElementsByClassName("row").length-1).style.backgroundColor = "green"
      // let ba = document.getElementsByClassName("row");
      // console.log(ba)
    }
  }

  function renderProfile(event) {
    ReactDom.render(
      <AdminProfileEnseignant nom={event.target.textContent} />,
      document.getElementById("dashboardContent")
    );
  }

  function closeAlert() {
    document.getElementById("alert").style.display="none"
  }

  return (
    <div>
      <div style={{ display: "none" }} id="alert">
        <Alert variant="filled" severity="success">
          <div className="flex justify-between">
            <div>
              <label>Vous Avez Ajouter l'Enseignant {EnseignantAjouter}</label>
            </div>
            <div className="pl-[970px]">
              <div onClick={closeAlert} className="cursor-pointer">
                <CloseIcon />
              </div>
            </div>
          </div>
        </Alert>
      </div>
      <div className="flex justify-center pt-10">
        <div
          style={{ height: "600px" }}
          className="w-11/12  overflow-auto bg-white border-2"
        >
          <div className="flex justify-between bg-slate-200">
            <div
              style={{ fontFamily: "Poppins" }}
              className="h-20 pt-5 pl-10 border-b text-3xl   "
            >
              Les Enseignants
            </div>
            <div>
              <img
                className="w-16 mr-10 mt-2"
                src={require("../../../icons/enseignant-statis.png")}
              />
            </div>
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
                        className="row"
                      >
                        <TableCell component="th" className="" scope="row">
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
                              <Tooltip title="Profile" arrow>
                                <PersonIcon
                                  onClick={renderProfile}
                                  id={enseignant.id}
                                  style={{ fontSize: "30px" }}
                                  className="cursor-pointer mr-5"
                                />
                              </Tooltip>
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
          <div className="flex justify-between bg-slate-200">
            <div
              style={{ fontFamily: "Poppins" }}
              className="h-20 pt-5 pl-10 border-b text-3xl   "
            >
              Ajouter Un Enseignant
            </div>
            <div className="mr-10 mt-4">
              <AddCircleIcon style={{ color: "#2d0560", fontSize: "50px" }} />
            </div>
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
                <div className="mt-3">
                  <ImageUploaderEnseignant />
                </div>
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
      <div className="h-44"></div>
    </div>
  );
}
