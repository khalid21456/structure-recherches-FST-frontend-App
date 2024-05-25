import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccueilSlider from "./AccueilSlider";
import AccueilMarquee from "./AccueilMarquee";
import AccueilGalerie from "./AccueilGalerie";
import "./../../style/Accueil.css";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import EvenementDetails from "./EvenementDetails";
import Recherche from "../Recherches/Recherches";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Accueil() {
  const [enseignantCounter, setEnseignantCounter] = useState(null);
  const [doctorantCounter, setDoctorantCounter] = useState(null);
  const [eventsCounter, setEventsCounter] = useState(null);
  const [latestEvents, setLatestEvents] = useState(null);
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    const fetchDataCountPublications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Enseignant/AllEnseignant`
        );
        if (response && response.data) {
          setEnseignantCounter(response.data);
        } else {
          console.error("No data received from the response");
          setEnseignantCounter(0);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
        } else {
          console.error("Error fetching data: ", error.message);
        }
        setEnseignantCounter(0);
      }
    };

    fetchDataCountPublications();
  }, []);

  useEffect(() => {
    const fetchDataCountEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Enseignant/countEvents`
        );
        if (response && response.data) {
          setEventsCounter(response.data);
        } else {
          console.error("No data received from the response");
          setEventsCounter(0);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
        } else {
          console.error("Error fetching data: ", error.message);
        }
        setEventsCounter(0);
      }
    };

    fetchDataCountEvents();
  }, []);

  useEffect(() => {
    const fetchDataCountPublications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Doctorant/AllDoctorant`
        );
        if (response && response.data) {
          setDoctorantCounter(response.data);
        } else {
          console.error("No data received from the response");
          setDoctorantCounter(0);
        }
      } catch (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          console.log(error.response.data.message);
        } else {
          console.error("Error fetching data: ", error.message);
        }
        setDoctorantCounter(0);
      }
    };

    fetchDataCountPublications();
  }, []);
  useEffect(() => {
    const fetchDataLatestEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Enseignant/LatestEvent`
        );
        setLatestEvents(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setLatestEvents([]);
      }
    };
    fetchDataLatestEvents();
  }, []);
  if (enseignantCounter === null) {
    return <div>Loading...</div>;
  }
  if (doctorantCounter === null) {
    return <div>Loading...</div>;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const formatDate = (dateString, delimiter = "/") => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${delimiter}${month}${delimiter}${year}`;
  };
  const renderEvenementDetails = (latestEvent) => {
    ReactDOM.render(
      <EvenementDetails latestEvent={latestEvent} />,
      document.getElementById("main")
    );
  };
  function showRecherche(event) {
    let main = document.getElementById("main");
    ReactDOM.render(<Recherche />, main);
  }
  return (
    <div className="Accueil-Container h-auto mb-[860px]">
      {/* <div className="pb-4 bg-gray-100">
        <AccueilSlider />
        <div className="mx-14 bg-yellow-400 mt-5">
          <AccueilMarquee />
        </div>
      </div> */}
      <div className="bg-white flex justify-around">
        <div className="mt-28 pl-2">
          <h1
            className="text-6xl mb-2 text-blue-600 ml-5"
            style={{ fontFamily: "Reddit Mono, monospace" }}
          >
            Les structures de recherche
          </h1>
          <div className="w-32 h-3 bg-yellow-400 mb-8 ml-5"></div>
          <span className="text-2xl text-gray-500 ml-5">
            Faculté des Sciences et Techniques Beni-Mellal
          </span>
          <div className="mt-6 ml-5">
            <button
              style={{ fontSize: "19px" }}
              onClick={showRecherche}
              className="px-5 py-3 bg-blue-600 hover:bg-blue-800 text-white font-semibold rounded-3xl"
            >
              Structures
            </button>
          </div>
        </div>
        <div className="">
          <img
            src={require("./../../pictures/illustration.jpg")}
            style={{ height: "650px", width: "700px" }}
          />
        </div>
      </div>
      <div className="actualites bg-blue-100 pb-20">
        <div className="pt-20 pl-24 pb-10">
          <h1 className="text-6xl text-black cursor-default hover:text-blue-500 hover:transition-colors w-fit">
            Actualités
          </h1>
          <div className="w-40 h-2 bg-yellow-400 mt-5"></div>
        </div>
        <div className="pl-24">
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                borderWidth: "0px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  className="hover:text-blue-700 hover:bg-yellow-400 text-2x hover:rounded-md"
                  sx={{ fontWeight: "bold" }}
                  label="Evenements"
                  {...a11yProps(0)}
                />
                <Tab
                  className="hover:text-blue-700 hover:bg-yellow-400 text-2x hover:rounded-md"
                  sx={{ fontWeight: "bold" }}
                  label="Publications"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <div className="event">
                <div className="bg-white rounded-md overflow-hidden shadow-md">
                  {latestEvents.map((latestEvent) => {
                    const maxWords = 7;
                    const words = latestEvent.titre.split(" ");
                    const truncatedTitle =
                      words.length > maxWords
                        ? words.slice(0, maxWords).join(" ") + " ..."
                        : latestEvent.titre;
                    const imagePath = `http://localhost:8080/FSTBM/readImages/Evenements/${latestEvent.imagePath}`;
                    return (
                      <ul className="border-b-1 border-gray-200 my-2 shadow-md">
                        <li className="bg-gray-100 h-24">
                          <button
                            className="hover:bg-yellow-400 py-6 w-full h-full flex justify-between relative bg-blue-100"
                            onClick={() => renderEvenementDetails(latestEvent)}
                          >
                            <div>
                              <img
                                className="w-1/6 h-full top-0 left-0 absolute object-cove shadow-lg"
                                src={imagePath}
                                title="Brain"
                              />
                            </div>
                            <div>
                              <span
                                className="text-gray-950 hover:text-blue-700 font-bold h-full top-9 ml-20 left-44 absolute"
                                style={{ fontSize: "20px" }}
                              >
                                {truncatedTitle}
                              </span>
                            </div>
                            <div>
                              <span
                                className="mr-3 text-gray-700 hover:text-blue-600 font-semibold h-full top-10 ml-20 right-0 absolute"
                                style={{ fontSize: "16px" }}
                              >
                                {formatDate(latestEvent.dateDebut, "/")} -{" "}
                                {formatDate(latestEvent.dateFin, "/")}
                              </span>
                            </div>
                          </button>
                        </li>
                      </ul>
                    );
                  })}
                </div>
                <div className="mt-6 left-1.5">
                  <Button
                    className="hover:text-yellow-400 hover:bg-blue-500"
                    variant="contained"
                  >
                    Voire +{" "}
                  </Button>
                </div>
              </div>
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <div className="event">
                <div className="bg-white rounded-md overflow-hidden shadow-md">
                  <ul className="border-b-1 border-gray-400">
                    <li className="bg-gray-100 h-24">
                      <button className="hover:bg-yellow-400 py-6 w-full h-full flex justify-between relative bg-gray-500">
                        <div>
                          <img
                            className="w-1/6 h-full top-0 left-0 absolute object-cove shadow-lg"
                            src={require("../../pictures/cloud.jpg")}
                            title="Brain"
                          />
                        </div>
                        <div>
                          <span className="text-xl text-blue-500 hover:text-blue-700 font-bold h-full top-9 ml-20 left-44 absolute">
                            Cloud Events, Webinars and Conferences - AWS{" "}
                          </span>
                        </div>
                        <div>
                          <span className="mr-3 text-sm text-gray-300 hover:text-blue-600 font-semibold h-full top-10 ml-20 right-0 absolute">
                            Avril 24, 2024
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                  <hr />
                  <ul className="border-b-1 border-gray-400">
                    <li className="bg-gray-100 h-24">
                      <button className="hover:bg-yellow-400 py-6 w-full h-full flex justify-between relative bg-gray-500">
                        <div>
                          <img
                            className="w-1/6 h-full top-0 left-0 absolute object-cove shadow-lg"
                            src={require("../../pictures/cloud.jpg")}
                            title="Brain"
                          />
                        </div>
                        <div>
                          <span className="text-xl text-blue-500 hover:text-blue-700 font-bold h-full top-9 ml-20 left-44 absolute">
                            Cloud Events, Webinars and Conferences - AWS{" "}
                          </span>
                        </div>
                        <div>
                          <span className="mr-3 text-sm text-gray-300 hover:text-blue-600 font-semibold h-full top-10 ml-20 right-0 absolute">
                            Avril 24, 2024
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                  <hr />
                  <ul className="border-b-1 border-gray-400">
                    <li className="bg-gray-100 h-24">
                      <button className="hover:bg-yellow-400 py-6 w-full h-full flex justify-between relative bg-gray-500">
                        <div>
                          <img
                            className="w-1/6 h-full top-0 left-0 absolute object-cove shadow-lg"
                            src={require("../../pictures/cloud.jpg")}
                            title="Brain"
                          />
                        </div>
                        <div>
                          <span className="text-xl text-blue-500 hover:text-blue-700 font-bold h-full top-9 ml-20 left-44 absolute">
                            Cloud Events, Webinars and Conferences - AWS{" "}
                          </span>
                        </div>
                        <div>
                          <span className="mr-3 text-sm text-gray-300 hover:text-blue-600 font-semibold h-full top-10 ml-20 right-0 absolute">
                            Avril 24, 2024
                          </span>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 left-1.5">
                  <Button
                    className="hover:text-yellow-400 hover:bg-blue-500"
                    variant="contained"
                  >
                    Voire +{" "}
                  </Button>
                </div>
              </div>
            </CustomTabPanel>
          </Box>
        </div>
      </div>
      {/* Statistics Section */}
      {/* <!--Start Background Animation Body--> */}
      <div class="area h-2/3">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <div className="pt-20 pl-6">
            <div className="pl-24">
              <h1 className="text-6xl text-white cursor-default hover:text-blue-500 hover:transition-colors w-fit">
                Statistiques
              </h1>
              <div className="w-40 h-2 bg-yellow-500 mt-5"></div>
            </div>
            <section class="text-gray-700 body-font">
              <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-wrap text-center">
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="text-white w-12 h-12 mb-3 inline-block"
                      >
                        <path
                          d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7H162.5c0 0 0 0 .1 0H168 280h5.5c0 0 0 0 .1 0H417.3c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2H224 204.3c-12.4 0-20.1 13.6-13.7 24.2z"
                          fill="white"
                        ></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-white">
                        {enseignantCounter}
                      </h2>
                      <p class="leading-relaxed text-white">Enseignants</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className="text-white w-12 h-12 mb-3 inline-block"
                      >
                        <path
                          d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                          fill="white"
                        ></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-white">
                        {doctorantCounter}
                      </h2>
                      <p class="leading-relaxed text-white">Doctorants</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="text-white w-12 h-12 mb-3 inline-block"
                      >
                        <path
                          d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"
                          fill="white"
                        ></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-white">
                        15
                      </h2>
                      <p class="leading-relaxed text-white">Recherches</p>
                    </div>
                  </div>
                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                    <div class="border-2 border-white px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="text-white w-12 h-12 mb-3 inline-block"
                      >
                        <path
                          d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"
                          fill="white"
                        ></path>
                      </svg>
                      <h2 class="title-font font-medium text-3xl text-white">
                        {eventsCounter}
                      </h2>
                      <p class="leading-relaxed text-white">Evenements</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </ul>
      </div>
      {/* <!--End Background Animation Body--> */}
      <div className="pt-16 mt-[450px]">
        <AccueilGalerie />
      </div>
    </div>
  );
}
