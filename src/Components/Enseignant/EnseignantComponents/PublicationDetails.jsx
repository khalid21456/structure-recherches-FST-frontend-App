import { colors } from "@mui/material";
import React from "react";

export default function PublicationDetails({ publication }) {
  const formatDate = (dateString, delimiter = "/") => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}${delimiter}${month}${delimiter}${year}`;
  };
  const imagePath = `http://localhost:8080/FSTBM/readImages/Publication/${publication.imagePath}`;
  return (
    <div>
      <div className="grid grid-cols-2 mx-14 mt-6 mb-4">
        <div className="mr-4">
          <img
            // src={require("./../../../pictures/cloud.jpg")}
            src={imagePath}
            className="rounded-md"
          />
        </div>
        <div>
          <h1 className="text-2xl mb-2" style={{ color: "#574476" }}>
            {publication.titre}
          </h1>
          <span className="text-gray-500 font-bold">
            Publier le {formatDate(publication.datePub, "/")}
          </span>
        </div>
      </div>
      <div className="mx-14">
        <p style={{ fontSize: "20px", lineHeight: "40px" }}>
          {publication.contenu}
        </p>
      </div>
    </div>
  );
}
