import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../style/Accueuil.css';
import logo from '../shared/tornades.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import 'typeface-dosis';
import 'typeface-lalezar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const NavTabsWidth = 100;

function Accueil() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [navHeight, setNavHeight] = useState(0);
  
    let navRef = useRef(null);
    const isMobile= size.height > size.width;
  
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
    const carteMedia = {
      height:'15rem'
    }
    const carte = {
      opacity:'0.8'
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
        <Container maxWidth={false} className={isMobile?"conteneur-accueil-mobile":"conteneur-accueil"}> 
         <Grid container spacing={5} >
          <Grid item xs={12} md={3} ><Typography color="secondary" variant="h1">Allez Tornades!</Typography>
          </Grid>
          <Grid item xs={12} md={9} >
          </Grid>
          
          </Grid>

         

          <Grid container spacing={5}>
          <Grid item xs={12} md={3} >
          <Card style={carte} >
                      <CardActionArea >
                        <CardMedia style={carteMedia}
                         image={logo}  height='10px'
                        />
                        <CardContent
                        >
                          <Typography gutterBottom variant="h5" component="h2">
                          AHMV
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          Pour tous renseignements supplémentaires, vous pouvez nous joindre par courriel à ahmvtornade@hotmail.com ou par téléphone au (514) 742-8922.
Merci et bonne saison !
La direction d’AHMV
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Contactez-nous!
                        </Button>
                      </CardActions>
                    </Card>
 </Grid>
 <Grid item xs={12} md={9} >
          </Grid>

 </Grid>
 <Grid container spacing={5}>
          <Grid item xs={12} >
          <Paper className="paperFull">
          Nous avons bien hâte de revoir tous nos joueurs, bénévoles et parents.
            </Paper>
          </Grid>
          </Grid>
        </Container>
      );

    }



export default Accueil;
