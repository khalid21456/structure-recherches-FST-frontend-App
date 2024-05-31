import React, { useRef } from "react";
import ReactDOM from "react-dom"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProfileRech from "./ProfileRech";

export default function EquipeMembre(props) {


  function renderProfile(event) {
    ReactDOM.render(
      <ProfileRech nomMembre={event.target.parentElement.children[0].textContent} ident={event.target.parentElement.id} />,document.getElementById("main")
    )
  }

  function mouseEnteredHandle(event) {
    event.target.parentElement.style.backgroundColor = "#DDE6ED";
  }

  function mouseLeavedHandle(event) {
    event.target.parentElement.style.backgroundColor = "";
  }


  const refM = useRef();

  let heightMembres = props.membres.length * 100;

  if (refM.current) {
    refM.current.style.marginBottom = heightMembres + "px";
  }

  

  return (
    <div className="w-2/3" ref={refM} style={{ marginLeft: "290px" }}>
      <div className="mt-10" >
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
                  onClick={renderProfile}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={memb.id}
                  className={memb.id}
                  id={memb.id}
                  onMouseEnter={mouseEnteredHandle}
                  onMouseLeave={mouseLeavedHandle}
                  style={{cursor:"pointer"}}
                >
                  <div className="hidden">{memb.nom},{memb.prenom.charAt(0)}</div>
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
