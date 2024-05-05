import React, { useRef, useEffect } from "react";
import "../../style/Recherche.css";
import ThemeCard from "./ThemeCard";
import themes from "../../data/Themes";

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

  useEffect(() => {
    let minHeight = 1700;
    let heightAdded = themes.length * 250;
    let newHeight = minHeight + heightAdded;
    if (myRef.current) {
      myRef.current.style.height = newHeight + "px";
    }
  }, []);

  return (
    <div className="Recherche-container" ref={myRef}>
      <div className="presentRecherche">
        <div className="pt-40 pl-24">
          <h1
            className="Recherche-title text-8xl text-white cursor-default hover:transition-colors w-fit"
            style={{ fontFamily: "Platypi" }}
          >
            Recherches
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
            <div
              className="trans cardRetarded Introduction-content mt-1 ml-10 w-6/12 text-justify max-xl:w-5/12"
            >
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
      <div className="headerA flex mt-20 ml-52 max-xl:ml-32">
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
      <div className="themes mt-10">
        {themes.map((theme, index) => {
          return (
            <ThemeCard
              key={index}
              image={theme.image}
              title={theme.title}
              desc={theme.desc}
            />
          );
        })}
      </div>
    </div>
  );
}
