import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import App from "../../App";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function DashboardNav() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function Deconnecter() {
    const root = document.getElementById("root");
    ReactDOM.render(<App/>,root);
  }

  return (
    <div className="DashboardNav-container flex justify-center">
      <div className="navDashh bg-slate-200 border rounded-lg shadow-md mt-3 mr-16">
        <div className="flex justify-between h-full">
          <div className="flex justify-start">
            <h1
              style={{ fontFamily: "Noto Sans" }}
              className="text-3xl font-bold mt-5 ml-10"
            >
              <span>Admin</span>{" "}
              <span style={{ color: "#FF5722" }}>Dashboard</span>
            </h1>
          </div>
          <div className="flex justify-end">
            <div className="flex justify-center w-96">
              <div className="flex justify-around w-36 pt-7">
                <Badge
                  color="secondary"
                  style={{ fontSize: "20", cursor: "pointer" }}
                  badgeContent={2}
                >
                  <MailIcon style={{ fontSize: 25, color: "#2d0560" }} />
                </Badge>
                <Badge
                  color="secondary"
                  style={{ fontSize: "20", cursor: "pointer" }}
                  badgeContent={2}
                >
                  <NotificationsRoundedIcon
                    style={{ fontSize: 27, color: "#2d0560" }}
                  />
                </Badge>
                <HelpRoundedIcon
                  style={{ fontSize: 27, color: "#2d0560", cursor: "pointer" }}
                />
              </div>
              <div className="nav-glissante w-60 pt-1">
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    style={{ backgroundColor: "#FF5722" }}
                  >
                    <Typography style={{ backgroundColor: "#FF5722" }}>
                      <div className="flex">
                        <img
                          src={require("../../profiles/Mr-Afraites.jpg")}
                          className="w-12 h-12 rounded-full"
                        />
                        <h2
                          style={{ fontFamily: "Poppins", fontSize: "17px" }}
                          className="text-white mt-2 ml-3"
                        >
                          Lekbir Afraites
                        </h2>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <ul style={{ fontFamily: "Poppins", fontSize: "15px" }}>
                        <li className="cursor-pointer pl-3 pb-3 pt-4 transition-colors hover:bg-indigo-950 hover:text-white">
                          Mon Profile
                        </li>
                        <li className="pt-4 pl-3 pb-3 cursor-pointer transition-colors hover:bg-indigo-950 hover:text-white">
                          Paramètres
                        </li>
                        <li className="pt-4 pl-3 pb-3 cursor-pointer transition-colors hover:bg-indigo-950 hover:text-white">
                          Aide
                        </li>
                        <li className="pt-4 pl-3 pb-3 cursor-pointer transition-colors hover:bg-indigo-950 hover:text-red-400">
                          <label
                            className="cursor-pointer"
                            onClick={Deconnecter}
                          >
                            Déconnecter
                          </label>{" "}
                          <LogoutIcon />
                        </li>
                      </ul>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
