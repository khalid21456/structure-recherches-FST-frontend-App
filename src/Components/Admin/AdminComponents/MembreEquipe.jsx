import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GroupIcon from "@mui/icons-material/Group";

export default function MembreEquipe(props) {
  const [equipe, setEquipe] = useState({
    id: "",
    nomEquipe: "",
    responsable: "",
    membres: [],
    acronyme: "",
  });

  useEffect(() => {
    const fetchDataEquipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Equipe/getById/${props.ident}`
        );
        setEquipe(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setEquipe();
      }
    };

    fetchDataEquipe();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div
          style={{ height: "600px" }}
          className="w-11/12  overflow-auto bg-white border-2"
        >
          <div className="flex justify-between bg-slate-200">
            <div
              style={{ fontFamily: "Poppins" }}
              className="h-20 pt-5 pl-10 border-b text-3xl   "
            >
              Les Membres
            </div>
            <div>
              <GroupIcon
                style={{
                  fontSize: "64px",
                  color: "#2d0560",
                  marginRight: "40px",
                  marginTop: "8px",
                }}
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
                    {/* {enseignants.map((enseignant) => (
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
                    ))} */}
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
    </div>
  );
}
