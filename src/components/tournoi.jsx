import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../style/tournoi.css';
import { Container } from '@material-ui/core';
import  Paper  from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


function Tournoi() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [navHeight, setNavHeight] = useState(0);
  
    //let navRef = useRef(null);
  
    const isMobile =  size.height > size.width;
 

    const stylePaper={
      opacity:0.8,
      marginTop:'5rem'
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
      <Container className="conteneur-tournoi" maxWidth={false}>
        	 <Paper style={stylePaper}>
           <Typography variant="h2">Tournoi Peewee / Bantam 2019 d'AHMV</Typography>
<p>L'édition 2019 de notre tournoi Peewee / Bantam,
est présentement en cours du 2 au 15 décembre 2019.</p>

<p>Pour consulter l'horaire et les résultats utiliser le lien "Horaire / Résultats 2019".</p>

<h4>Nous avons une nouveauté cette année, tous les matchs sont filmés !</h4>

<p>Pour voir les faits saillants de vos cliquer sur le lien ci-dessous.</p>

<p>Pour plus d'informations, veuillez entrer en communication avec nous.</p>

<p>Merci,
La direction d'AHM Villeray. </p>  
</Paper>

        </Container>
      );

    }



export default Tournoi;
