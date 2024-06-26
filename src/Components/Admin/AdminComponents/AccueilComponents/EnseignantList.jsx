import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function EnseignantList() {
  const [enseignants, setEnseignants] = useState([]);

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

  return (
    <div>
      <div style={{ width: "1000px", marginTop: "50px" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                style={{ backgroundColor: "#FF5722", color: "#000000" }}
              >
                <TableCell>
                  <lable
                    style={{ fontSize: "20px", color: "white" }}
                    className="font-bold"
                  >
                    Nom et prénom
                  </lable>
                </TableCell>
                <TableCell>
                  <lable
                    style={{ fontSize: "20px", color: "white" }}
                    className="font-bold"
                  >
                    Email
                  </lable>
                </TableCell>
                {/* <TableCell>
                  <lable
                    style={{ fontSize: "20px", color: "white" }}
                    className="font-bold"
                  >
                    Date d'embauche
                  </lable>
                </TableCell> */}
                <TableCell>
                  <lable
                    style={{ fontSize: "20px", color: "white" }}
                    className="font-bold"
                  >
                    Contact
                  </lable>
                </TableCell>

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
                  {/* <TableCell align="left">
                 
                  </TableCell> */}
                  <TableCell align="left">{enseignant.tele}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
