import React, { useRef,useState,useEffect } from "react";
import axios from "axios";
import ReactDOM from "react-dom"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProfileRech from "./ProfileRech";

export default function DoctorantEquipe(props) {


  const [doctorants,setDoctorants] = useState([]);

  useEffect(() => {
    const fetchDataDoctorant = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Admin/Doctorant/getByEquipe/${props.identEquipe}`
        );
        setDoctorants(response.data);
      } catch (error) {
        console.error("Error : "+error);
        setDoctorants([])
      } 
    };

    fetchDataDoctorant();
  }, []);


//   const refD = useRef();

//   let heightMembres = doctorants.length * 100;

//   if (refD.current) {
//     refD.current.style.marginBottom = heightMembres + "px";
//   }


  return (
    <div className="w-2/3" style={{ marginLeft: "290px" }}>
      <div className="mt-10" >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><lable style={{fontSize:"20px"}} className="font-bold" >Nom et prénom</lable></TableCell>
                <TableCell align="left"><lable style={{fontSize:"20px"}} className="font-bold" >Adresse e-mail</lable></TableCell>
                <TableCell align="left"><lable style={{fontSize:"20px"}} className="font-bold" >Encadrant</lable></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctorants.map((doc) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={doc.id}
                  id={doc.id}
                  style={{cursor:"pointer"}}
                >
                  <TableCell component="th" scope="row">
                    {doc.prenom} {doc.nom} 
                  </TableCell>
                  <TableCell align="left">{doc.email}</TableCell>
                  <TableCell align="left">{doc.encadrant.nom} {doc.encadrant.prenom}</TableCell>
                </TableRow>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
