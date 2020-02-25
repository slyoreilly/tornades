import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from '../_shared/tornades.png';
import '../App.css';
import Helmet from "react-helmet";
import Button from '@material-ui/core/Button';
import NavTabs from '../_shared/NavTabs';
import Container from '@material-ui/core/Container';
import { Route, Switch} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



const NavTabsWidth = 100;

function Contact() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [navHeight, setNavHeight] = useState(0);
  
    let navRef = useRef(null);
  
    const isMobile = true;// size.height > size.width;
  
    const mainStyle = {
      marginLeft: isMobile ? 0 : NavTabsWidth,
      width: isMobile ? '100%' : window.innerWidth - NavTabsWidth,
    }
    const navStyle = {
      position: 'fixed',
      left: 0,
      bottom: isMobile ? 0 : '',
      height: isMobile ? "" : "100%",
      width: isMobile ? '100%' : NavTabsWidth,
      zIndex: 1, /* Stay on top */
    }
  
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#FF0000' }, // Purple and green play nicely together.
        secondary: { main: '#66FF00' }, // This is just green.A700 as hex.
      },
    });
  
    useEffect(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);
  /*
    useLayoutEffect(() => {
      setNavHeight(navRef? navRef.getBoundingClientRect().height : 0)
    }, [navRef]);
  */
    const handleWindowSizeChange = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    const divPrincipale= {
      marginTop: 50
    }
  

    return (
        <div style={divPrincipale}>
	
  Président : M. P. Malkassoff
president@ahmvtornade.com


Pour toute information ou pour prendre un rendez-vous, écrire un courriel avec la personne désirée et un choix de jours et d’heures pour céduler une rencontre.

Merci.


A.H.M.V. - Tornade de Villeray

Aréna Howie-Morenz
8650 rue Querbes
Montréal, QC H3N 2X4
Informations : 514-381-0748 (Après 17h svp)

        </div>
      );

    }



export default Contact;
