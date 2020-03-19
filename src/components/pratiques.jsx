import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import 'typeface-dosis';
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

});

function Pratiques() {



  
    let navRef = useRef(null);
  
    const isMobile = true;// size.height > size.width;
    const classes = useStyles();
    const mainStyle = {
      marginLeft: isMobile ? 0 : NavTabsWidth,

      width: isMobile ? '100%' : window.innerWidth - NavTabsWidth,
    }
    const navStyle = {
      position: 'fixed',
      left: 0,
      bottom: isMobile ? 0 : '',
      height: isMobile ? "" : "100%",
      width: isMobile ? '100%' :"",
      zIndex: 1, /* Stay on top */
    }
    const divPrincipale= {
      paddingTop:'1rem'
      
      }

  /*
    useLayoutEffect(() => {
      setNavHeight(navRef? navRef.getBoundingClientRect().height : 0)
    }, [navRef]);
  */
 const {loading,data} = useFetch("/pratiques");


    return (
<Container>

         
          {loading ? <div>Loading...</div> :
            <Paper style={divPrincipale}>
            <Typography variant="h2">Pratiques</Typography>
            <Table  size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={()=>{data.sort((a,b)=>{return ((data.id+"").localeCompare(data.id))});}}>No</TableCell>
                  <TableCell align="right">Équipes</TableCell>
                  <TableCell align="right" >Jour</TableCell>
                  <TableCell align="right">Heure</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
      
                {data.map(pratiques => 
                (

                  <TableRow key={pratiques.id} >
                    <TableCell component="th" scope="row">
                      {pratiques.id}
                    </TableCell>
                    <TableCell align="right">{pratiques.Jour}</TableCell>
                    <TableCell align="right">
                            {pratiques.equipes.map(equipes => 
                        (

                          <span key={equipes.id} >
                            {equipes.Nom}, 
                          </span>
                      
                            ))}

                    </TableCell>
                    <TableCell align="right">{pratiques.Debut}</TableCell>
                  </TableRow>
              
                    ))}
              </TableBody>
            </Table>
            </Paper>
            }
          

        </Container>
      );

    }



export default Pratiques;
