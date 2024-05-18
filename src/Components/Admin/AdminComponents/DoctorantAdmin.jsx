import React, { useEffect, useState,useRef } from "react";
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

    setImageUpload(null);

      const formData = new FormData();
      formData.append("file", imageUpload);
      try {
        const response = axios.post(
          "http://localhost:8080/FSTBM/images/uploads/Profile",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Image uploaded successfully:", response.data);
        setImagefileName(response.data)
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      doctorantAdded.profile = imagefileName;

      axios
      .post(
        `http://localhost:8080/FSTBM/Admin/Doctorant/AjouterDoctorant/${encadrantAdded.label}/${TheseAdded.label}`,
        doctorantAdded
      )
      .then((response)=>{
        setDoctorants(response.data)
      }).catch((error)=>{
        console.error("Error: "+error);
      });

    // console.log(encadrantAdded);
    // console.log(TheseAdded);
    // console.log(doctorantAdded);
  }

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
                      >
                        Thèse
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

                        <TableCell align="left" style={{width:"200px"}}>
                          {doctorant.encadrant.nom} {doctorant.encadrant.prenom}
                        </TableCell>
                        <TableCell align="left">
                          {doctorant.these.titre}
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
            <div className="w-11/12 mt-5 flex justify-around">
              <div className="mt-6">
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
                  sx={{ width: 580 }}
                  renderInput={(params) => <TextField {...params} />}
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
                  Image
                </label>
                <br />
                <div
                style={{
                  height: "100px",
                  width: "400px",
                  borderColor: "#1475cf",
                }}
                className="cursor-pointer border-2 border-dashed  rounded-lg"

                onClick={() => document.querySelector("#image").click()}
              >
                <input
                  type="file"
                  id="image"
                  className="px-4 py-1"
                  ref={image}
                  onChange={(event) => {
                    // handlChange(event);
                    // const files = event.target.files;
                    setFiles(event.target.files);
                    if (files && files.length > 0) {
                     setImagefileName(files[0].name);
                      // setImageUpload(URL.createObjectURL(files[0]));
                      setImageUpload(event.target.files[0]);
                    }
                  }}
                  hidden
                />
                {imageUpload ? (
                  <img
                    src={URL.createObjectURL(files[0])}
                    alt={imagefileName}
                    style={{
                      width: "400px",
                      height: "100px",
                      objectFit: "none",
                    }}
                    className="rounded-lg"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    style={{ height: "100px", width: "100px", marginLeft:"140px"}}
                  >
                    <path
                      d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                      fill="#1475cf"
                    />
                  </svg>
                )}
                </div>
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
