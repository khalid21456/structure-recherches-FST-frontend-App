import React from "react";
import ReactDOM from "react-dom"
import ThemeRecherches from "./ThemeRecherches";
export default function ThemeCard(props) {

    function renderThemeRecherches() {
        let main = document.getElementById("main")
        ReactDOM.render(
            <ThemeRecherches/>,main
        )
        window.scroll({
            top: 0,
            left: 500,
            // behavior: "smooth",
          });
    }

    return(
        <div className="flex justify-center researchCard">
            <div onClick={renderThemeRecherches} className="w-3/5 mt-5 h-52 cursor-pointer hover:scale-105 hover:transition-transform  bg-gray-50 hover:bg-white border rounded-lg shadow-sm">
                <div className="flex">

                    <div className=" bg-yellow-400 border rounded-s-lg">
                        <img className="w-full h-52" src={props.image}/>
                    </div>

                    <div className="ml-10 mt-4">
                        <h1 className="text-3xl" style={{fontFamily: "Poppins,Roboto"}}>{props.title}</h1>
                        <p className="w-4/5 mt-4" style={{fontFamily:"Roboto"}}>
                            {props.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}