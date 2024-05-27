import React from "react";

export default function EvenementDetails({ latestEvent }) {
  const imagePath = `http://localhost:8080/FSTBM/readImages/Evenements/${latestEvent.imagePath}`;
  return (
    <div className="mb-4 mt-7">
      <div className="mb-4 ml-16 mr-3">
        <h1 className="text-3xl">{latestEvent.titre}</h1>
        <div className="w-32 h-2  bg-yellow-400 mt-2"></div>
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
