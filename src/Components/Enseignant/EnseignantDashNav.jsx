import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import './../../style/EnseignantDashboard.css';
import EnseignantAccueil from "./EnseignantComponents/EnseignantAccueil";
import EnseignantPublication from "./EnseignantComponents/EnseignantPublication";
import EnseignantEvenement from "./EnseignantComponents/EnseignantEvenement";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));
  const settings = ['Profile', 'Paramètres', 'Aide', 'Déconnecter'];
 
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
export default function DashboardNav() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
        const [expanded, setExpanded] = React.useState('panel1');
      
        const handleChange =
          (panel) => (event, newExpanded) => {
            setExpanded(newExpanded ? panel : false);
          };
          const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
          };
          const handleCloseUserMenu = () => {
            setAnchorElUser(null);
          };
  return (
     <div>
        <div className="flex justify-between h-full navDash bg-slate-400 border rounded-lg shadow-md mt-3 mr-16 ml-2">
          <div>
            <h1
              style={{ fontFamily: "Noto Sans" }}
              className="text-2xl font-bold mt-6 ml-10"
            >
              Dashboard
            </h1>
          </div>
            <div className="flex items-center">
              <div className="flex">
                <div className="ml-3">
                <Badge
                  color="secondary"
                  style={{ fontSize: "20" ,cursor:"pointer"}}
                  badgeContent={2}
                >
                  <MailIcon style={{ fontSize: 25, color: "#2d0560" }} />
                </Badge>
                </div>
                <div className="ml-4">
                <Badge
                  color="secondary"
                  style={{ fontSize: "20" ,cursor:"pointer"}}
                  badgeContent={2}
                >
                  <NotificationsRoundedIcon
                    style={{ fontSize: 27, color: "#2d0560" }}
                  />
                </Badge>
                </div>
                <div className="ml-4">
                <HelpRoundedIcon style={{ fontSize: 27, color: "#2d0560" ,cursor:"pointer"}} />
                </div>
              </div>
              <div className="ml-8 mr-5">
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Youssef" src={require("./../../profiles/Mr-ElMourabit.png")} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '57px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                className:'ml-44 mt-5'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className="ml-44"
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}
                 sx={{ my: 0 }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
              </div>
            </div>
        </div>
        <div id="EnseignantContent" className="flex justify-between bg-slate-100 border rounded-lg shadow-md mt-3 mr-16 ml-2 mb-3" style={{width:'1060px'}}>
            <EnseignantAccueil/>
        </div>
        </div>
  );
}
