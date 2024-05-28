import React,{useState,useEffect} from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function ListEquipe(props) {

    const [equipes,setEquipes] = useState([]);

    useEffect(()=>{
        const fetchDataEquipes = async () => {
          try {
            const response = await axios.get("http://localhost:8080/FSTBM/Admin/Equipe/getAll");
            setEquipes(response.data); 
          } catch (error) {
            console.log(error.response.data.message); 
            setEquipes([]);
          }
        
        };
        fetchDataEquipes();
    }, [])

    return (
        <div>
            <TableContainer style={{ width: "1000px" ,marginTop:"50px"}} component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  style={{ backgroundColor: "#FF5722", color: "#000000" }}
                >
                  <TableCell>
                    <lable style={{ fontSize: "20px" ,color: "white"}} className="font-bold">
                      Intitulé
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" ,color: "white"}} className="font-bold">
                      Responsable
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" ,color: "white"}} className="font-bold">
                      Acronyme
                    </lable>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {equipes.map((equipe) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    id={equipe.id}
                    style={{cursor:"pointer"}}
                    key={equipe.id}
                  >
                    <div className="hidden">{equipe.responsable.nom},{equipe.responsable.prenom.charAt(0)}</div>
                    <TableCell component="th" scope="row">
                      {equipe.nomEquipe}
                    </TableCell>
                    <TableCell align="left">
                      {equipe.responsable.prenom} {equipe.responsable.nom}
                    </TableCell>
                    <TableCell align="left">{equipe.acronyme}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
    )

}