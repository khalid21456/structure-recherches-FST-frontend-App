import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
import ModeIcon from "@mui/icons-material/Mode";
import "../../../style/AdminDashboard.css";

export default function DoctorantAdmin(props) {


  const [doctorants,setDoctorants] = useState([])

  useEffect(() => {
    const fetchDataDoctorant = async () => {
      try {
        const response = await axios.get("http://localhost:8080/FSTBM/Admin/Doctorant/getAll");
        console.log("khalid")
        setDoctorants(response.data); 
        
      } catch (error) {
        console.log(error.response.data.message); 
        setDoctorants([]); 
      }
    };

    fetchDataDoctorant(); // Call the fetchData function when the component is mounted

  }, []); 


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
            Les Doctorants
          </div>
          <div className="table-enseignants flex justify-center mt-10 ">
            <div style={{ width: "1200px", height: "600px" }} className="">
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
                        
                        <TableCell align="left">{doctorant.encadrant.nom} {doctorant.encadrant.prenom}</TableCell>
                        <TableCell align="left">{doctorant.these}</TableCell>
                        <TableCell align="left">
                          <div className="flex">
                            <div style={{ color: "green" }}>
                              <ModeIcon
                                style={{ fontSize: "30px" }}
                                className="cursor-pointer mr-5"
                              />
                            </div>
                            <div style={{ color: "red" }}>
                              <DeleteIcon
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
        </div>
      </div>
      <div className="doctorantEspace flex justify-center pt-10">
        <div style={{ height: "600px" }} className="w-11/12  bg-white border-2">
          <div
            style={{ fontFamily: "Poppins" }}
            className="h-20 pt-5 pl-10 border-b text-3xl bg-slate-200"
          >
            Ajouter Un Doctorants
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
                <TextField id="outlined-basic" className="w-72" />
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
                <TextField id="outlined-basic" className="w-72" />
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
                <TextField id="outlined-basic" className="w-72" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
