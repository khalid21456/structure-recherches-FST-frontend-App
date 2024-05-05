import React from "react";
import ReactDOM from "react-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DepartementPage from "./Departements-Pages/Departemet-page";
import departementData from "../../data/departements";
import Membres from "../../data/membre";

function renderPage(event) {
  let main = document.getElementById("main");
  window.scroll({
    top: 0,
    left: 500,
    // behavior: "smooth",
  });
  let index = parseInt(event.target.id);
  console.log(index)
  ReactDOM.render(
    <DepartementPage membres={Membres[index-1].membres} chef={Membres[index-1].chef} emailChef={Membres[index-1].emailChef}  title={departementData[index-1].departement} backgroundImage={departementData[index-1].backgroundImage}/>,
    main
  );

  console.log(Membres[index-1])

}

export default function DepartementCard(props) {
  return (
    <div style={{ width: "400px", height: "300px" }} className="">
      <Card
        sx={{ maxWidth: 345 }}
        className="hover:bg-gray-50 hover:transition-colors"
      >
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title="Departement-picture"
          component="img"
        />
        <CardContent>
          <Typography
            style={{
              fontFamily: "Poppins,Roboto",
              fontSize: "20px",
              color: "#191919",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions>
          <Button size="small" id={props.id} onClick={renderPage}>
            Membres
          </Button>
          <Button size="small">Recherches</Button>
        </CardActions>
      </Card>
    </div>
  );
}
