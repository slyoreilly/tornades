import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../style/Accueuil.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import 'typeface-dosis';
import 'typeface-lalezar';

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

    useEffect(() => {
      handleWindowSizeChange();
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, []);

    const handleWindowSizeChange = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    return (
        <Container className={isMobile?"conteneur-accueil-mobile":"conteneur-accueil"}> 
 <Grid container spacing={5}>
 <Grid item xs={12} md={3} ><Typography color="secondary" variant="h1">Allez Tornades!</Typography>
 </Grid>
<Grid item xs={12} md={6} >
 </Grid>
 <Grid item xs={12} md={3} >
<Paper elavation={3} className="paper">
La saison 2019-2020 de l'Association de hockey mineur de Villeray est en marche !
  </Paper>
 </Grid>
 </Grid>

 <Grid container spacing={5}>
 <Grid item xs={12} md={3} >
 </Grid>
<Grid item xs={12} md={3} >
<Paper className="paper">
Nous souhaitons une excellente saison à tous nos joueurs, bénévoles et parents.
  </Paper>
 </Grid>
 <Grid item xs={12} md={3} >
<Paper className="paper">
Notre tournoi Peewee / Bantam 2019 est présentement en cours.
Consulter l'onglet "Tournoi" pour voir l'horaire et les résultats des matchs.
  </Paper>
 </Grid>
 <Grid item xs={12} md={3} >
 </Grid>
 </Grid>


 <Grid container spacing={5}>
 <Grid item xs={12} md={9} >
 </Grid>
<Grid item xs={12} md={3} >
<Paper className="paper">
Pour tous renseignements supplémentaires, vous pouvez nous joindre par courriel à ahmvtornade@hotmail.com ou par téléphone au (514) 886-1423 (en soirée seulement).
Merci et bonne saison !
La direction d’AHMV
  </Paper>
 </Grid>
 </Grid>
        </Container>
      );

    }



export default Accueil;
