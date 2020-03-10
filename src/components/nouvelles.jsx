import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
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
    width: '100%',
    textAlign:'center',
  },
  rootView: {
    maxWidth: '100%',
    textAlign:'center',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    textAlign:'center',
    height: 320,
    maxWidth: 480,
  },
  cardView:{
    textAlign:'left',
    display: 'flex',
    flexDirection: 'column',
    height: 480,
    maxWidth: 320,
  },
  contentList: {
    textAlign:'center',
    maxWidth: 480,
  },
  contentView:{
    textAlign:'left',
    display: 'flex',
    flexDirection: 'column',
    height: 480,
    maxWidth: 640,
  }
});

export default function Nouvelles() {


  const [, forceUpdate] = React.useState(0);
  
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
  marginTop: 50,
  textAlign:'center',
  width:'100%'

}
  

  /*
    useLayoutEffect(() => {
      setNavHeight(navRef? navRef.getBoundingClientRect().height : 0)
    }, [navRef]);
  */
 let {loading,data} = useFetch("/nouvelles");
 const classes = useStyles();

 function handleClick(nouvelle){
 /* nouvelle.viewMode =nouvelle.viewMode?0:1;
   forceUpdate(n => !n)
  */
 }

    return (
<div>
{loading ? <div>Loading...</div> :
          <Paper style={divPrincipale}>
            <Typography variant="h2">Les Nouvelles des Tornades</Typography>

      
                {data.map(nouvelle => 
                (

   

                    <Card key={nouvelle.id}
                    className={nouvelle.viewMode?classes.rootView:classes.root}>
                      <CardActionArea style={divPrincipale}>
                        <CardMedia
                          className={nouvelle.viewMode?classes.cardView:classes.media}
                          image={""+nouvelle.Visuel.url}
                          title={nouvelle.Titre}
                        />
                        <CardContent
                        className={nouvelle.viewMode?classes.contentView:classes.contentList}>
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
                        <Button size="small"  color="primary" onClick={()=>{handleClick(nouvelle)}}>
                           {nouvelle.viewMode ? " --- Moins ---" : "+++ Plus +++"}
                        </Button>
                      </CardActions>
                    </Card>
                  
              
                    ))}

          </Paper>
}
        </div>
      );

    }



