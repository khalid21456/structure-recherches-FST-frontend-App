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
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import MembreEquipe from "./MembreEquipe";
import UndoIcon from "@mui/icons-material/Undo";
import { autocompleteClasses } from "@mui/material/Autocomplete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  // { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

const styleModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 0,
  p: 4,
};

const styleModalAjouterMembre = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 300,
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
  const [equipeAdded, addEquipe] = useState({
    nomEquipe: "",
    responsable: {},
    acronyme: "",
  });
  const [membre, setMembre] = useState("");

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });
  const [candidats, setCandidats] = useState([]);
  const [responsable, setResponsable] = useState({});
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

  const [idEquipeClicked, setIdEquipeClicked] = useState(0);

  function renderMembreEquipe(event) {
    setIdEquipeClicked(event.target.id);
    document.getElementById("addMembreIcon").style.display = "";
    document.getElementById("returnIcon").style.display = "";
    document.getElementById("addEquipeIcon").style.display = "none";
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
    console.log("klzjdzqd");
    // ReactDOM.render(
    //     <AdminAccueil/>,document.getElementById("dashboardContent")
    // )
    ReactDOM.render(
      <EquipeAdmin />,
      document.getElementById("dashboardContent")
    );
  }

  function ajouterEquipe() {
    // console.log(responsable);
    // console.log(equipeAdded);
    console.log(responsable.value);
    axios
      .post(
        `http://localhost:8080/FSTBM/Admin/Equipe/AjouterEquipe/${responsable.value}`,
        equipeAdded
      )
      .then((response) => {
        setEquipes(response.data);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }

  function ajouterMembre() {
    axios
      .post(
        `http://localhost:8080/FSTBM/Admin/Equipe/addSeulMembre/${idEquipeClicked}`,
        membre
      )
      .then((response) => {})
      .catch((error) => {
        console.log("Error : ", error);
      });
  }

  function mouseEnteredHandle(event) {
    event.target.parentElement.style.backgroundColor = "#DDE6ED";
  }

  function mouseLeavedHandle(event) {
    event.target.parentElement.style.backgroundColor = "";
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
                  <div className="flex justify-between">
                    <h1
                      style={{
                        paddingTop: "15px",
                        fontFamily: "Poppins",
                        color: "#FF5722",
                        fontSize: "30px",
                      }}
                    >
                      Créer Une Equipe
                    </h1>
                    <img
                      src={require("../../../pictures/fst.png")}
                      className=" h-[80px]"
                    />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="formulaire w-full flex justify-center mt-8">
                    <div className="w-11/12 h-64">
                      <div className="w-full flex justify-between">
                        <div className="w-full">
                          <label className="text-black font-bold">
                            Nom de l'équipe
                          </label>
                          <br />
                          <TextField
                            onChange={(e) => {
                              addEquipe({
                                ...equipeAdded,
                                nomEquipe: e.target.value,
                              });
                            }}
                            value={equipeAdded.nomEquipe}
                            style={{ width: "100%" }}
                          />
                        </div>
                      </div>
                      <div className="w-full flex justify-between mt-6">
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
                            sx={{ width: 500 }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </div>
                        <div>
                          <label className="text-black font-bold">
                            Acronyme
                          </label>
                          <br />
                          <TextField
                            onChange={(e) => {
                              addEquipe({
                                ...equipeAdded,
                                acronyme: e.target.value,
                              });
                            }}
                            value={equipeAdded.acronyme}
                            style={{ width: "300px" }}
                          />
                        </div>
                        {/* <div>
                          <label className="text-black font-bold">
                            Membres
                          </label>
                          <br />
                          <Root style={{ width: "500px" }}>
                            <div {...getRootProps()}>
                              <Label {...getInputLabelProps()}></Label>
                              <InputWrapper
                                style={{ width: "500px", padding: "10px" }}
                                ref={setAnchorEl}
                                className={focused ? "focused" : ""}
                              >
                                {value.map((option, index) => (
                                  <StyledTag
                                    label={option.title}
                                    {...getTagProps({ index })}
                                  />
                                ))}
                                <input {...getInputProps()} />
                              </InputWrapper>
                            </div>
                            {groupedOptions.length > 0 ? (
                              <Listbox {...getListboxProps()}>
                                {groupedOptions.map((option, index) => (
                                  <li {...getOptionProps({ option, index })}>
                                    <span>{option.title}</span>
                                    <CheckIcon fontSize="small" />
                                  </li>
                                ))}
                              </Listbox>
                            ) : null}
                          </Root>
                        </div> */}
                      </div>
                      <div className="mt-10 flex justify-center">
                        <div>
                          <Button
                            variant="contained"
                            style={{
                              backgroundColor: "#2d0560",
                              padding: "15px 80px",
                              marginRight: "20px",
                            }}
                            onClick={ajouterEquipe}
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
              <Box sx={styleModalAjouterMembre}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="flex justify-between">
                    <h1
                      style={{
                        paddingTop: "15px",
                        fontFamily: "Poppins",
                        color: "#FF5722",
                        fontSize: "30px",
                      }}
                    >
                      Ajouter Un Membre
                    </h1>
                    <img
                      src={require("../../../pictures/fst.png")}
                      className=" h-[80px]"
                    />
                  </div>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <div className="w-full flex justify-between">
                    <div>
                      <label className="text-black font-bold">Membre</label>
                      <br />
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        value={membre}
                        onChange={(event, newValue) => {
                          setMembre(newValue);
                        }}
                        options={candidats}
                        sx={{ width: 600 }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                    <div>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#2d0560",
                          padding: "15px 100px",
                          // marginRight: "20px",
                          marginTop: "25px",
                        }}
                        onClick={ajouterMembre}
                      >
                        Ajouter
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div id="returnIcon" style={{ display: "none" }}>
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
                  onMouseEnter={mouseEnteredHandle}
                  onMouseLeave={mouseLeavedHandle}
                  key={equipe.id}
                  // className="rowEquipe"
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
