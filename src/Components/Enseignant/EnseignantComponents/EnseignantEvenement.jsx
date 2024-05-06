import { Button } from "@mui/material";
export default function EnseignantEvenement() {
    return (
            <div className="mx-10 my-7 rounded-sm" style={{backgroundColor:'#9CAFAA'}}>
            <h2 className="text-white font-bold pl-8 py-4 text-xl" style={{backgroundColor:'#124076'}}>Demande d'organiser un evenement</h2>
            <form>
              <div className="grid grid-cols-3 gap-4 px-12 py-6">
                  <div>
                       <label className="block text-white mb-1 font-semibold text-xl">Titre</label>
                       <input type="text" className="px-4 py-1 w-64"/>
                  </div>
                  <div>
                      <label className="block text-white mb-1 font-semibold text-xl">Date de publication</label>
                      <input type="date" className="px-4 py-1 w-64"/>
                  </div>
                  <div>
                      <label className="block text-white mb-1 font-semibold text-xl">Image</label>
                      <input type="file" className="px-4 py-1"/>
                  </div>
                  {/* <div className="col-span-3">
                      <label className="block text-white mb-1 font-semibold text-xl">Contenu</label>
                      <textarea cols="105" rows="10" className="px-4 py-1"></textarea>
                  </div> */}
                  </div>
                  <div className="flex justify-end mr-10 mt-4 mb-4">
                    <Button
                    variant="contained"
                  style={{
                    backgroundColor: "#124076",
                    padding: "12px 45px",
                    marginRight: "20px",
                    fontSize: "17px",
                  }}
                    >
                        Envoyer
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
    )
}