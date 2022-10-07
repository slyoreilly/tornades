import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from '../shared/tornades.png';
import '../App.css';
import { Container } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const NavTabsWidth = 100;

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

    async function fetchData() {
      const response = await fetch("/api/equipes");
      const json = await response.json();
      setData(json);
      setLoading(false);  
    }

  useEffect(() => {
    fetchData()
  }, []);

  return {loading,data};
};

function Matchs() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  //
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
      marginTop:80
    }
    const {loading,data} = useFetch();
    //const {equipes} = useFetchEquipes("/equipes");
    const selectRef = useRef(0);
    const [selEquipe, setSelEquipe] = useState(0);
    return (
<Container>
        
        {loading||loading? <div>Loading...</div> :
          <Paper style={divPrincipale}>
         
          <Typography variant="h2">Matchs</Typography>

          <Table  size="small">
            <TableHead>
              <TableRow>
                <TableCell >No</TableCell>
                <TableCell align="right">Équipes</TableCell>

              </TableRow>

            </TableHead>
            <TableBody>
           
             {  data.map(equipe => 
              (

                <TableRow key={equipe.id} >
                  <TableCell component="th" scope="row">
                    {equipe.id}
                  </TableCell>
                  <TableCell   onChange={()=>{fetch(equipe.PageMatchHM)}} align="right"><a href={equipe.PageMatchHM} target="_blank">{equipe.Nom}</a></TableCell>
                </TableRow>
            
                  ))}
            </TableBody>
          </Table>
          </Paper>
          }
        

      </Container>
      );

    }



export default Matchs;
