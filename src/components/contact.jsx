import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Container } from '@material-ui/core';
const NavTabsWidth = 100;

function Contact() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });


  
    const isMobile = true;// size.height > size.width;
  
  
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
      marginTop: 100,

      textAlign:'left'
    }
  

    return (
      <Container>

        <div style={divPrincipale}>
          <p>
  <b>Président :</b> M. P. Malkassoff </p>
  <p>
president@ahmvtornade.com</p>
  <p>
Pour toute information ou pour prendre un rendez-vous, écrire un courriel avec la personne désirée et un choix de jours et d’heures pour céduler une rencontre.
</p>
  <p>
    Merci.
    </p>

    <Card>
                      <CardActionArea>
                       
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                          A.H.M.V. - Tornade de Villeray
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="ul">
<li>Aréna Howie-Morenz</li>
<li>8650 rue Querbes</li>
<li>Montréal, QC H3N 2X4</li>
<li>Informations : 514-742-8922 (Après 17h svp)</li>
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      
                    </Card>
                  
        </div>
        </Container>

      );

    }



export default Contact;
