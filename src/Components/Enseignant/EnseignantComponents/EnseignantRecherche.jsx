import { Button } from "@mui/material";
export default function EnseignantRecherche() {
  return (
    <div className="w-full h-auto">
      <div className="mx-10 my-7 rounded-lg bg-white">
        <h2
          className="text-white font-bold pl-8 py-4 text-xl"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #061b9a, #0a1eaf, #1021c5, #1724db, #2026f1)",
          }}
        >
          Publier un recherche
        </h2>
        <form className="pb-7">
          <div className="px-12 py-6">
            <div className="mb-4">
              <label
                className="block mb-1 font-semibold"
                style={{ fontSize: "21px", color: "#25476A" }}
              >
                Titre
              </label>
              <input
                type="text"
                id="titre"
                className="px-4 py-2 w-64 rounded-sm bg-transparent border-2 border-gray-500 w-full hover:border-2 hover:border-sky-400"
              />
            </div>
          </div>
          <div className="flex justify-end mr-10 mt-4 mb-4">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#574476",
                padding: "12px 45px",
                marginRight: "20px",
                fontSize: "17px",
              }}
            >
              Publier
            </Button>
            <Button
              variant="outlined"
              style={{
                borderColor: "#574476",
                color: "#2d0560",
                padding: "12px 45px",
                fontSize: "17px",
              }}
            >
              Annuler
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
