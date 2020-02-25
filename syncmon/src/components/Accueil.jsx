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

function Accueil() {


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
    const divPrincipale= {
      marginTop: 50
    }
  
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
  

    return (
        <div style={divPrincipale}> 


  La saison 2019-2020 de l'Association de hockey mineur de Villeray est en marche !

 

Nous souhaitons une excellente saison à tous nos joueurs, bénévoles et parents.

 

Notre tournoi Peewee / Bantam 2019 est présentement en cours.

Consulter l'onglet "Tournoi" pour voir l'horaire et les résultats des matchs.

 

Pour tous renseignements supplémentaires, vous pouvez nous joindre par courriel à ahmvtornade@hotmail.com ou par téléphone au (514) 886-1423 (en soirée seulement).

 

Merci et bonne saison !

La direction d’AHMV
        </div>
      );

    }



export default Accueil;
