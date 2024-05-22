import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function EquipeMembre(props) {



  return (
    <div className="w-2/3 " style={{ marginLeft: "290px" }}>
      <div className="mt-10">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><lable style={{fontSize:"20px"}} className="font-bold" >Nom et prénom</lable></TableCell>
                <TableCell align="left"><lable style={{fontSize:"20px"}} className="font-bold" >Adresse e-mail</lable></TableCell>
                {/* <TableCell align="left"><lable style={{fontSize:"20px"}} className="font-bold" >Laboratoire</lable></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {props.membres.map((memb) => (
                <TableRow
                 
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {memb.prenom} {memb.nom} 
                  </TableCell>
                  <TableCell align="left">{memb.email}</TableCell>
                  {/* <TableCell align="left">{memb.Laboratoire}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
