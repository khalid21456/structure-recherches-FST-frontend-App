import React from "react";
import LocalPhone from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="flex justify-evenly mr-10 pt-5">
        <div className="title-footer text-yellow-400  font-bold">
          Faculté des Sciences et Techniques
        </div>
        <div className="contact">
          <label className="text-yellow-400  font-bold">Contactez-nous</label>
          <div className="flex mt-2">
            <div className="text-white">
              <LocalPhone />
            </div>
            <p className="text-white tele pt-1 pl-2">
              + 212 (0) 523 48 51 12/22/82
            </p>
          </div>
          <div className="flex">
            <div className="text-white">
              <TelegramIcon />
            </div>
            <p className="text-white tele pt-2 pl-2">fstbm@usms.ma</p>
          </div>
          <div className="flex">
            <div className="text-white">
              <EmailIcon />
            </div>
            <p className="text-white tele pt-2 pl-2">
              Campus Mghilla, BP 523 , 23000 Béni Mellal
            </p>
          </div>
          <div className="flex text-white mt-4 ml-4">
            <div className=" hover:text-yellow-400 hover:transition-colors cursor-pointer">
              <a href="https://www.facebook.com/profile.php?id=100063586145181">
                <FacebookIcon fontSize="large" />
              </a>
            </div>
            <div className="ml-2 hover:text-yellow-400 hover:transition-colors cursor-pointer">
              <TwitterIcon fontSize="large" />
            </div>
          </div>
        </div>
        <div className="contact">
          <label className="text-yellow-400 font-bold">Accès rapide</label>
          <p className="text-white tele mt-2 pl-2 cursor-pointer hover:underline hover:text-yellow-400">
            Accueil
          </p>
          <p className="text-white tele mt-2 pl-2 cursor-pointer hover:underline hover:text-yellow-400">
            Se connecter
          </p>
          <p className="text-white tele mt-2 pl-2 cursor-pointer hover:underline hover:text-yellow-400">
            Propos
          </p>
        </div>
      </div>
    </div>
  );
}
