import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Autocomplete, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import ImageUploaderDoctorant, {
  imageDoctorantName,
} from "../../ImageUploaders/ImageUploaderDoctorant";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import "../../../style/AdminDashboard.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Tooltip from "@mui/material/Tooltip";
import PersonIcon from "@mui/icons-material/Person";
import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';


export default function DoctorantAdmin(props) {
  const [doctorants, setDoctorants] = useState([]);
  const [doctorantAdded, setDoctorant] = useState({
    nom: "",
    prenom: "",
    email: "",
    address: "",
    profile: "",
  });
  const [encadrants, setEncadrants] = useState([]);
  const image = useRef();

  const [theses, setTheses] = useState([]);
  const [encadrantAdded, setEncadrant] = useState({ label: "", value: 0 });
  const [TheseAdded, setThese] = useState({ label: "", value: 0 });
  const [files, setFiles] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imagefileName, setImagefileName] = useState("userUnknown.png");

  useEffect(() => {
    const fetchDataThese = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Recherche/getTitles"
        );
        setTheses(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setTheses([]);
      }
    };

    fetchDataThese();
  }, []);

  useEffect(() => {
    const fetchDataEncadrants = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Enseignant/getNames"
        );
        setEncadrants(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setEncadrants([]);
      }
    };

    fetchDataEncadrants();
  }, []);

  useEffect(() => {
    const fetchDataDoctorant = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Doctorant/getAll"
        );
        setDoctorants(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setDoctorants([]);
      }
    };

    fetchDataDoctorant();
  }, []);

  function deleteDoctorant(event) {
    let id = event.target.parentElement.id;
    console.log(id);
    axios
      .delete(`http://localhost:8080/FSTBM/Admin/Doctorant/deleteDoc/${id}`)
      .then((response) => {
        setDoctorants(response.data);
      })
      .catch((error) => {
        console.error("Error : " + error);
      });
  }

  function AjouterDoctorant() {
    axios
      .post(
        `http://localhost:8080/FSTBM/Admin/Doctorant/AjouterDoctorant/${encadrantAdded.value}`,
        doctorantAdded
      )
      .then((response) => {
        setDoctorants(response.data);
      })
      .catch((error) => {
        console.error("Error: " + error);
      });

    // console.log(encadrantAdded);
    // console.log(TheseAdded);
    // console.log(doctorantAdded);
  }

  // const [open, setOpen] = React.useState(false);


  return (
    <div>
      <div className="flex justify-center pt-10">
        <div
          style={{ height: "500px" }}
          className="w-11/12  overflow-auto bg-white border-2"
        >
          <div className="flex justify-between bg-slate-200">
            <div
              style={{ fontFamily: "Poppins" }}
              className="h-20 pt-5 pl-10 border-b text-3xl   "
            >
              Les Doctorants
            </div>
            <div>
              <img
                className="w-16 mr-10 mt-2"
                src={require("../../../icons/doctorant-statis.png")}
              />
            </div>
          </div>
          <div className="table-enseignants flex justify-center mt-10 ">
            <div style={{ width: "1200px", height: "580px" }} className="">
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
                      >
                        Date d'inscription
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
                        Encadrant
                      </TableCell>
                      <TableCell
                        style={{ backgroundColor: "#2d0560", color: "white" }}
                        align="left"
                      ></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {doctorants.map((doctorant) => (
                      <TableRow
                        key={doctorant.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {doctorant.nom} {doctorant.prenom}
                        </TableCell>
                        <TableCell align="left">
                          {doctorant.date_inscri.substring(0, 10)}
                        </TableCell>
                        <TableCell align="left">{doctorant.email}</TableCell>

                        <TableCell align="left" style={{ width: "200px" }}>
                          {doctorant.encadrant.nom} {doctorant.encadrant.prenom}
                        </TableCell>
                        <TableCell align="left">
                          <div className="flex">
                            <div style={{ color: "green" }} id={doctorant.id}>
                              <Tooltip title="Profile" arrow>
                                <PersonIcon
                                  // onClick={renderProfile}
                                  // id={enseignant.id}
                                  style={{ fontSize: "30px" }}
                                  className="cursor-pointer mr-5"
                                />
                              </Tooltip>
                            </div>
                            <div style={{ color: "red" }} id={doctorant.id}>
                              <DeleteIcon
                                style={{ fontSize: "30px" }}
                                className="cursor-pointer"
                                id={doctorant.id}
                                onClick={deleteDoctorant}
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
        <div style={{ height: "610px" }} className="w-11/12  bg-white border-2">
          <div className="flex justify-between bg-slate-200">
            <div
              style={{ fontFamily: "Poppins" }}
              className="h-20 pt-5 pl-10 border-b text-3xl   "
            >
              Ajouter Un Doctorant
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
                  value={doctorantAdded.nom}
                  onChange={(e) => {
                    setDoctorant({
                      ...doctorantAdded,
                      nom: e.target.value,
                    });
                  }}
                  id="outlined-basic"
                  className="w-72"
                />
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
                  value={doctorantAdded.prenom}
                  onChange={(e) => {
                    setDoctorant({
                      ...doctorantAdded,
                      prenom: e.target.value,
                    });
                  }}
                  id="outlined-basic"
                  className="w-72"
                />
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
                  value={doctorantAdded.email}
                  onChange={(e) => {
                    setDoctorant({
                      ...doctorantAdded,
                      email: e.target.value,
                    });
                  }}
                  id="outlined-basic"
                  className="w-72"
                />
              </div>
            </div>
          </div>
          <div className="inputs flex justify-center">
            <div className="w-11/12 mt-11 flex justify-around">
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
                  value={doctorantAdded.address}
                  onChange={(e) => {
                    setDoctorant({
                      ...doctorantAdded,
                      address: e.target.value,
                    });
                  }}
                  id="outlined-basic"
                  className="w-72"
                />
              </div>

              <div>
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Encadrant
                </label>
                <br />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={encadrantAdded}
                  onChange={(event, newValue) => {
                    setEncadrant(newValue);
                  }}
                  options={encadrants}
                  sx={{ width: 680 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </div>
          <div className="inputs flex justify-center">
            <div className="w-full mt-5 flex justify-around">
              <div className="mt-6 w-fit">
                <label
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  Thèse
                </label>
                <br />
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  value={TheseAdded}
                  onChange={(event, newValue) => {
                    setThese(newValue);
                  }}
                  options={theses}
                  sx={{ width: 1075 }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </div>
            </div>
          </div>
          <div className="btnAjouterDoctorant">
            <div className="flex justify-center w-11/12 mt-10">
              <div>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#2d0560",
                    padding: "15px 80px",
                    marginRight: "20px",
                  }}
                  onClick={AjouterDoctorant}
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
                  // onClick={AnnulerValues}
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
