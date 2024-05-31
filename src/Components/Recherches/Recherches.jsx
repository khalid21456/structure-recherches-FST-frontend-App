import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom"
import "../../style/Recherche.css";
import ThemeCard from "./ThemeCard";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EquipePage from "./Equipe-page";
import LaboPage from "./Labo-page";



window.addEventListener("scroll", () => {
  let image = document.querySelectorAll(".trans");
  for (var i = 0; i < image.length; i++) {
    var windowHeight = window.innerHeight;
    var cardTop = image[i].getBoundingClientRect().top;
    var cardPoint = 150;
    if (cardTop < windowHeight - cardPoint) {
      image[i].classList.add("active");
    }
  }
});


window.addEventListener("scroll", () => {
  let cards = document.querySelectorAll(".researchCard");
  let headerTheme = document.getElementsByClassName("headerA")[0];
  for (var i = 0; i < cards.length; i++) {
    var windowHeight = window.innerHeight;
    var cardTop = cards[i].getBoundingClientRect().top;
    var cardPoint = 150;
    if (cardTop < windowHeight - cardPoint) {
      cards[i].classList.add("activeResearach");
      headerTheme.classList.add("headerB");
    }
  }
});

export default function Recherche() {
  const myRef = useRef();

  const myRef2 = useRef();
  const myRef3 = useRef();
  const [Themes, setThemes] = useState([]);
  const [Laboratoires, setLaboratoires] = useState([]);
  const [Equipes, setEquipes] = useState([]);

  let minHeight = 2200;
  let minHeightLabo = 150;
  let minHeightEquipe = 150;
  let heightAdded =
    Themes.length * 250 + Laboratoires.length * 40 + Equipes.length * 40;
  let newHeight = minHeight + heightAdded;
  if (myRef.current) {
    myRef.current.style.height = newHeight + "px";
  }

  if (myRef2.current) {
    myRef2.current.style.height =
      minHeightLabo + Laboratoires.length * 40 + "px";
  }

  if (myRef3.current) {
    myRef3.current.style.height = minHeightLabo + Equipes.length * 40 + "px";
  }

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

  useEffect(() => {
    const fetchDataLaboratoires = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/FSTBM/Admin/Laboratoire/getLabos"
        );
        setLaboratoires(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setLaboratoires([]);
      }
    };

    fetchDataLaboratoires();
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

  function renderEquipePage(event) {
    window.scroll({
      top: 0,
      left: 500,
      // behavior: "smooth",
    });
    ReactDOM.render(
      <EquipePage nomRespo={event.target.parentElement.children[0].textContent} ident={event.target.parentElement.id}/>,document.getElementById("main")
    )
    // console.log(event.target.parentElement.children[0].textContent);
  }

  function renderLaboPage(event) {
    window.scroll({
      top: 0,
      left: 500,
      // behavior: "smooth",
    });
    // console.log(event.target.parentElement.id)
    ReactDOM.render(
      <LaboPage ident={event.target.parentElement.id}/>,document.getElementById("main")
    )
  }

  function mouseEnteredHandle(event) {
    event.target.parentElement.style.backgroundColor = "#DDE6ED";
  }

  function mouseLeavedHandle(event) {
    event.target.parentElement.style.backgroundColor = "";
  }

  return (
    <div className="Recherche-container" ref={myRef}>
      <div className="presentRecherche">
        <div className="pt-40 pl-24">
          <h1
            className="Recherche-title text-7xl text-white cursor-default hover:transition-colors w-fit"
            style={{ fontFamily: "Platypi" }}
          >
            Structures de recherches
          </h1>
          <div className="w-40 h-3 bg-yellow-400 mt-5"></div>
          <div className=" text-white pt-4">
            <p
              className="w-1/2 text-justify"
              style={{ fontFamily: "Roboto", fontSize: "17px" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              fuga esse sequi recusandae nulla, ipsa fugiat, eaque quisquam
              repudiandae, labore iusto? Autem eligendi earum nesciunt maxime
              tempora, consectetur quaerat dolore.
            </p>
          </div>
        </div>
      </div>
      <div className="introduction-container bg-slate-100 pb-20">
        <div className="flex pt-20 ml-52 max-xl:ml-32">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className="text-5xl pl-5 cursor-default"
          >
            Introduction
          </h1>
        </div>
        <div>
          <div className="flex mt-12 ml-52 max-xl:ml-32">
            <div className="trans card image">
              <img
                src={require("../../pictures/fst-intord-recher.jpeg")}
                style={{ width: "600px" }}
                className="max-xl:h-full"
              />
            </div>
            <div className="trans cardRetarded Introduction-content mt-1 ml-10 w-6/12 text-justify max-xl:w-5/12">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae laborum aut laboriosam neque voluptates? Non,
                corrupti sunt ipsa ducimus pariatur nam id, repudiandae
                doloremque accusantium deleniti autem fugiat esse quae! Lorem
                ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
                vel inventore illo ab ad ratione reiciendis est voluptatibus
                eligendi laborum voluptatem ipsam voluptates omnis voluptas,
                possimus amet culpa necessitatibus nostrum?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Ex omnis ab deserunt officiis
                fugit maiores sit consequuntur voluptatibus. Itaque, officiis
                dolorum sunt vitae similique amet dolores soluta ducimus
                voluptatem quibusdam. cimus voluptatem quibusdamcimus voluptatem
                quibusdamcimus voluptatem quibusdam cimus voluptatem
                quibusdamcimus voluptatem quibusdamcimus voluptatem quibusdam
                cimus voluptatem quibusdamcimus voluptatem quibusdam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef2} className="h-44" id="Labos">
        <div className="flex mt-20 ml-52 max-xl:ml-32">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className=" text-5xl pl-5 cursor-default"
          >
            Laboratoires
          </h1>
        </div>
        <div id="tableauLabos" className="flex justify-center mt-8">
          <TableContainer style={{ width: "1327px" }} component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  style={{ backgroundColor: "#F6F5F2", color: "white" }}
                >
                  <TableCell>
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Intitulé
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Responsable
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Acronyme
                    </lable>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Laboratoires.map((labo) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={labo.id}
                    onClick={renderLaboPage}
                    style={{cursor:"pointer"}}
                    onMouseEnter={mouseEnteredHandle}
                    onMouseLeave={mouseLeavedHandle}
                    id={labo.id}

                  >
                    <TableCell component="th" scope="row">
                      {labo.nomLaboratoire}
                    </TableCell>
                    <TableCell align="left">
                      {labo.responsable.prenom} {labo.responsable.nom}
                    </TableCell>
                    <TableCell align="left">{labo.acronyme}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <div ref={myRef3} className="h-44" id="Labos">
        <div className="flex mt-48 ml-52 max-xl:ml-32">
          <div
            style={{ borderLeftWidth: "14px" }}
            className="h-15 border-l-yellow-400"
          ></div>
          <h1
            style={{ fontFamily: "Roboto" }}
            className=" text-5xl pl-5 cursor-default"
          >
            Equipes
          </h1>
        </div>
        <div id="tableauLabos" className="flex justify-center mt-8">
          <TableContainer style={{ width: "1327px" }} component={Paper}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  style={{ backgroundColor: "#F6F5F2", color: "white" }}
                >
                  <TableCell>
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Intitulé
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Responsable
                    </lable>
                  </TableCell>
                  <TableCell align="left">
                    <lable style={{ fontSize: "20px" }} className="font-bold">
                      Acronyme
                    </lable>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Equipes.map((equipe) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    id={equipe.id}
                    onClick={renderEquipePage}
                    style={{cursor:"pointer"}}
                    onMouseEnter={mouseEnteredHandle}
                    onMouseLeave={mouseLeavedHandle}
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
      </div>

      <div className="headerA flex ml-52 mt-32 max-xl:ml-32">
        <div
          style={{ borderLeftWidth: "14px" }}
          className="h-15 border-l-yellow-400"
        ></div>
        <h1
          style={{ fontFamily: "Roboto" }}
          className=" text-5xl pl-5 cursor-default"
        >
          Thèmes de recherche
        </h1>
      </div>
      <div className="themes mt-5">
        {Themes.map((Theme, index) => {
          return (
            <ThemeCard
              key={index}
              title={Theme.nomtheme}
              desc={Theme.contentTheme}
              image={Theme.imagePath}
            />
          );
        })}
      </div>
    </div>
  );
}
