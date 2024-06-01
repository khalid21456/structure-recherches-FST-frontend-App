import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";

export default function EvenementDetails({ latestEvent }) {
  const imagePath = `http://localhost:8080/FSTBM/readImages/Evenements/${latestEvent.imagePath}`;
  const formatDate = (dateString, delimiter = "/") => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}${delimiter}${month}${delimiter}${year}`;
  };
  return (
    <div className="mb-4 mt-7">
      <div className="mb-4 ml-16 mr-3">
        <h1 className="text-3xl">{latestEvent.titre}</h1>
        <div className="w-32 h-2  bg-yellow-400 mt-2"></div>
      </div>
      <div className="ml-16 mb-4 mt-6">
        <div className="mt-4">
          <CalendarMonthIcon
            className="text-yellow-600 mr-2 mb-2"
            style={{ fontSize: "30px" }}
          ></CalendarMonthIcon>
          <span className="ml-1 text-gray-600 text-2xl">
            {formatDate(latestEvent.dateDebut, "/")} -{" "}
            {formatDate(latestEvent.dateFin, "/")}
          </span>
        </div>
        <div className="mt-4">
          <PlaceIcon
            className="text-yellow-600 mr-2 mb-2"
            style={{ fontSize: "30px" }}
          ></PlaceIcon>
          <span className="ml-1 text-gray-600 text-2xl">
            {latestEvent.lieu}
          </span>
        </div>
        <div className="mt-4">
          <LanguageIcon
            className="text-yellow-600 mr-2 mb-1"
            style={{ fontSize: "30px" }}
          ></LanguageIcon>
          <a href={latestEvent.siteweb} target="_blank">
            <span className="ml-1 text-2xl text-gray-600 border-b border-gray-500 cursor-pointer hover:text-blue-500 hover:border-blue-500">
              {latestEvent.siteweb}
            </span>
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mx-20">
        <img
          src={imagePath}
          className="border-2 border-gray-300 px-5 py-12 w-full"
        />
      </div>
    </div>
  );
}
