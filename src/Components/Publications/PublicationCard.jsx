import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function PublicationCard(props) {
 
  if(props.creator == null) {
    return <div>Loading</div>
  }

  return (
    <div className="w-[1170px]">
    {/* <div className="ml-[290px]"> */}
      <div className="pubCard mt-7 w-full h-[250px] bg-white rounded-md shadow-md">
        <p className="pl-5 pt-3">{props.desc}</p>
        <div className="w-11/12 ml-5 mt-5">
          <h1 style={{ fontFamily: "Platypi" }} className="text-2xl">
            {props.title}
          </h1>
        </div>
        <p style={{ fontFamily: "Poppins"}} className="pl-5 pt-3">{props.creator}</p>
        <div className="mt-5 flex justify-start">
            <p className="pl-5 text-gray-400 font-bold italic">{props.namePub}, </p>
            <p><pre>  {props.datePub}</pre> </p>
        </div>
        <div className="flex justify-end mr-6">
            <a href={props.lien} target="_blank">
                <p className="underline hover:text-yellow-300 text-blue-600 cursor-pointer">Voir La publication</p>
            </a>
        </div>
      </div>
    </div>
  );
}
