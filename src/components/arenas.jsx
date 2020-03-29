import React, { useState, useEffect, useRef } from 'react';
import '../style/arenas.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

function Arenas() {

    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [navHeight, setNavHeight] = useState(0);
  
    let navRef = useRef(null);
  
    const isMobile =  size.height > size.width;

    const {loading,data} = useFetch("/arenas");

    return (
      <Container className="conteneur-arena" maxWidth={false}>
        {loading ? <div>Loading...</div> :
                <Paper className="paper">
                  <Typography variant="h2">Arenas</Typography>
                  <Table  size="small">
                    <TableHead>
                      <TableRow>
                      <TableCell align="right">No</TableCell>
                        <TableCell align="right">Nom</TableCell>
                        <TableCell align="right" >Adresse</TableCell>
                      </TableRow>
      
                    </TableHead>
                    <TableBody>
            
                      {data.map(arenas => 
                      (
      
                        <TableRow key={arenas.id} >
                          <TableCell component="th" scope="row">
                            {arenas.id}
                          </TableCell>
                          <TableCell align="right">{arenas.Nom}</TableCell>
                          <TableCell align="right">{arenas.Adresse}</TableCell>
                        </TableRow>
                    
                          ))}
                    </TableBody>
                  </Table>
                </Paper>
                }
              </Container>
            );
      
          }
      


export default Arenas;
