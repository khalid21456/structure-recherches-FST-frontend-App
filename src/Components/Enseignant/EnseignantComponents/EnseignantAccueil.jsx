import "./../../../style/EnseignantDashboard.css";
import axios from "axios";
import { useEffect, useState } from "react";
export default function EnseignantAccueil() {
  const [publicationsCounter, setPublicationsCounter] = useState();
  const [recherchesCounter, setRecherchesCounter] = useState();
  useEffect(() => {
    const fetchDataCountPublications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/FSTBM/Enseignant/countPublication/${1}`
        );
        setPublicationsCounter(response.data);
      } catch (error) {
        console.log(error.response.data.message);
        setPublicationsCounter([]);
      }
    };

    fetchDataCountPublications();
  }, []);
  return (
    <div className="px-8" style={{ height: "1800px" }}>
      <div className="mt-8 grid lg:grid-cols-3 gap-16 sm:grid-cols-2">
        <div className="cardStatistcs rounded overflow-hidden shadow-md relative hover:shadow-lg w-72 h-52 grid grid-cols-1 place-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-14 h-14"
              //    style={{marginLeft: '145px'}}
            >
              <path
                d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                fill="#F5EFE6"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <span className=" text-2xl font-bold text-gray-300 mb-3">
              {publicationsCounter}
            </span>
            <span className=" text-2xl font-bold text-white">Publications</span>
          </div>
        </div>

        <div className="cardStatistcs rounded overflow-hidden shadow-md relative hover:shadow-lg w-72 h-52 grid grid-cols-1 place-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-14 h-14"
              //    style={{marginLeft: '145px'}}
            >
              <path
                d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                fill="#F5EFE6"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <span className=" text-2xl font-bold text-gray-300 mb-3">10</span>
            <span className=" text-2xl font-bold text-white">Publications</span>
          </div>
        </div>

        <div className="cardStatistcs rounded overflow-hidden shadow-md relative hover:shadow-lg w-72 h-52 grid grid-cols-1 place-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-14 h-14"
              //    style={{marginLeft: '145px'}}
            >
              <path
                d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                fill="#F5EFE6"
              />
            </svg>
          </div>
          <div className="grid grid-cols-1 place-items-center">
            <span className=" text-2xl font-bold text-gray-300 mb-3">10</span>
            <span className=" text-2xl font-bold text-white">Publications</span>
          </div>
        </div>
      </div>
    </div>
  );
}
