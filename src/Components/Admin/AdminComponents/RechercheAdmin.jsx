import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AjouterTheme from "./ModifierTheme";

export default function RechercheAdmin(props) {


  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const fetchDataThemes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Theme/retournerTousLesThemes"
        );
        setThemes(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setThemes([]);
      }
    };
    fetchDataThemes();
  }, []);

  function renderAjouterTheme() {
    ReactDOM.render(
      <AjouterTheme />,
      document.getElementById("dashboardContent")
    );
  }
  return (
    <>
      <h1
        style={{ fontFamily: "Noto Sans", color: "#2d0560" }}
        className="text-3xl pt-4 pl-3"
      >
        Les thèmes de recherche
      </h1>
      <div className="themes w-full flex justify-center mt-6 overflow-auto">
        <div className="w-11/12 relative z-20">
          {themes.map((theme) => {
            return (
              <Accordion key={theme.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  style={{
                    backgroundColor: "#00A9FF",
                    fontSize: "18px",
                    color: "#1E0342",
                    fontFamily: "Anek Devanagari",
                  }}
                >
                  {theme.nomtheme}
                </AccordionSummary>
                <AccordionDetails>
                  {theme.recherches.map((recherche) => {
                    return (
                      <ul key={recherche.id}>
                        <li className="mt-3" key={recherche.id}>
                          {recherche.titre}
                        </li>
                      </ul>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end mt-3 mr-14">
        <a
          className="cursor-pointer underline hover:text-orange-500"
          onClick={renderAjouterTheme}
        >
          Modifier
        </a>
      </div>
    </>
  );
}
