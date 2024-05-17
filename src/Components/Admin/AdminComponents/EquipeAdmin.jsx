import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { Autocomplete, Button } from "@mui/material";
import Table from "@mui/material/Table";
import { TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../../style/AdminDashboard.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MembreEquipe from "./MembreEquipe";
import UndoIcon from "@mui/icons-material/Undo";
import AdminAccueil from "./AdminAccueil";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 0,
  p: 4,
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function EquipeAdmin() {
  const [equipes, setEquipes] = useState([]);
  const [candidats, setCandidats] = useState([]);
  const [responsable, setResponsable] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [openAddEquipe, setOpenAddEquipe] = React.useState(false);
  const handleOpenAddEquipe = () => setOpenAddEquipe(true);
  const handleCloseAddEquipe = () => setOpenAddEquipe(false);

  const [openAddMembre, setOpenAddMembre] = React.useState(false);
  const handleOpenAddMembre = () => setOpenAddMembre(true);
  const handleCloseAddMembre = () => setOpenAddMembre(false);

  const style = {
    backgroundColor: isHovered ? "lightblue" : "white",
    padding: "10px",
    cursor: "pointer",
  };

  useEffect(() => {
    const fetchDataCandidats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Enseignant/getNames"
        );
        setCandidats(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setCandidats([]);
      }
    };

    fetchDataCandidats();
  }, []);

  useEffect(() => {
    const fetchDataEquipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Equipe/getAll"
        );
        setEquipes(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setEquipes([]);
      }
    };

    fetchDataEquipes();
  }, []);

  function renderMembreEquipe(event) {
    document.getElementById("addMembreIcon").style.display = "";
    document.getElementById("returnIcon").style.display = "";
    document.getElementById("addEquipeIcon").style.display = "none";
    console.log(event.target.id);
    ReactDOM.render(
      <MembreEquipe ident={event.target.id} />,
      document.getElementById("Equipes")
    );
    let titleBare = document.getElementById("titleBare");
    equipes.forEach((elem) => {
      if (elem.id == event.target.id) {
        titleBare.textContent = elem.nomEquipe;
      }
    });
  }

  function goBackToEquipe() {
    console.log("klzjdzqd")
    // ReactDOM.render(
    //     <AdminAccueil/>,document.getElementById("dashboardContent")
    // )
    ReactDOM.render(
        <EquipeAdmin/>,document.getElementById("dashboardContent")
    )
  }

  return (
    <div>
      <div
        style={{ width: "1380px", backgroundColor: "#2d0560" }}
        className="flex justify-between h-20 mr-1 bg-slate-200"
      >
        <div className="flex">
          <div
            className="h-full w-7"
            style={{ backgroundColor: "#FF5722" }}
          ></div>
          <p
            className="text-3xl pt-5 pl-10 text-white"
            style={{ fontFamily: "Poppins" }}
            id="titleBare"
          >
            Les Equipes
          </p>
        </div>
        <div className="flex">
          <div id="addEquipeIcon" style={{ display: "visible" }}>
            <AddCircleIcon
              style={{
                color: "white",
                fontSize: "40px",
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={handleOpenAddEquipe}
            />
            <Modal
              open={openAddEquipe}
              onClose={handleCloseAddEquipe}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Créer Une Equipe
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="formulaire w-full flex justify-center mt-12">
                    <div className="w-11/12 h-64">
                      <div className="w-full flex justify-between">
                        <div>
                          <label className="text-black font-bold">
                            Nom de l'équipe
                          </label>
                          <br />
                          <TextField style={{ width: "500px" }} />
                        </div>
                        <div>
                          <label className="text-black font-bold">
                            Résponsable
                          </label>
                          <br />
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={responsable}
                            onChange={(event, newValue) => {
                              setResponsable(newValue);
                            }}
                            options={candidats}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </div>
                      </div>
                      <div className="w-full flex justify-between mt-6">
                        <div>
                          <label className="text-black font-bold">
                            Acronyme
                          </label>
                          <br />
                          <TextField style={{ width: "300px" }} />
                        </div>
                        <div>
                          <label className="text-black font-bold">
                            Résponsable
                          </label>
                          <br />
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            value={responsable}
                            onChange={(event, newValue) => {
                              setResponsable(newValue);
                            }}
                            options={candidats}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>

          <div id="addMembreIcon" style={{ display: "none" }}>
            <AddCircleIcon
              style={{
                color: "white",
                fontSize: "40px",
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={handleOpenAddMembre}
            />
            <Modal
              open={openAddMembre}
              onClose={handleCloseAddMembre}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styleModal}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Ajouter Un Membre
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                ></Typography>
              </Box>
            </Modal>
          </div>
          <div id="returnIcon" style={{display:"none"}}>
            <UndoIcon
              style={{
                color: "white",
                fontSize: "40px",
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={goBackToEquipe} 
            />
          </div>
        </div>
      </div>

      <div id="Equipes" className="mt-10 flex justify-center">
        <TableContainer style={{ width: "1200px" }} component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell
                  style={{ fontSize: "20px", width: "700px", color: "#FF5722" }}
                >
                  Intitulé
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "20px", color: "#FF5722" }}
                  align="left"
                >
                  Responsable
                </StyledTableCell>
                <StyledTableCell
                  style={{ fontSize: "20px", color: "#FF5722" }}
                  align="left"
                >
                  Acronyme
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {equipes.map((equipe) => (
                <StyledTableRow
                  style={style}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={equipe.id}
                  className="rowEquipe"
                  onClick={renderMembreEquipe}
                >
                  <StyledTableCell
                    style={{ fontFamily: "Poppins" }}
                    component="th"
                    scope="row"
                    id={equipe.id}
                  >
                    {equipe.nomEquipe}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontFamily: "Poppins" }}
                    align="left"
                    id={equipe.id}
                  >
                    {equipe.responsable.prenom} {equipe.responsable.nom}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ fontFamily: "Poppins" }}
                    align="left"
                    id={equipe.id}
                  >
                    {equipe.acronyme}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="spacer h-44"></div>
    </div>
  );
}
