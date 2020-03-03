import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from '../_shared/tornades.png';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import Helmet from "react-helmet";
import NavTabs from '../_shared/NavTabs';
import Container from '@material-ui/core/Container';
import { Route, Switch} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {data} from '../model/data';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const NavTabsWidth = 100;


const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false)  }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

const useStyles = makeStyles({
  root: {
    maxWidth: 640,
  },
  media: {
    height: 320,
  },
});

export default function Nouvelles() {



  
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
  
const divPrincipale= {
  marginTop: 50
}
  

  /*
    useLayoutEffect(() => {
      setNavHeight(navRef? navRef.getBoundingClientRect().height : 0)
    }, [navRef]);
  */
 const {loading,data} = useFetch("http://68.66.193.234:1337/nouvelles");
 const classes = useStyles();

    return (
<div>
{loading ? <div>Loading...</div> :
          <Paper style={divPrincipale}>
            <h1>Nouvelles</h1>-

      
                {data.map(nouvelle => 
                (

   

                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={"http://68.66.193.234:1337"+nouvelle.Visuel.url}
                          title={nouvelle.Titre}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                          {nouvelle.Titre}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                          {nouvelle.Description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Share
                        </Button>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </CardActions>
                    </Card>
                  
              
                    ))}

          </Paper>
}
        </div>
      );

    }



