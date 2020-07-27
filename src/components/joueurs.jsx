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
  const [loadingP, setLoadingP] = useState(true);
  const [loadingE, setLoadingE] = useState(true);
  const [equipes, setEquipes] = useState(null);
  async function fetchData() {
    const response = await fetch("/joueurs");
    const json = await response.json();
    setData(json);
    setLoadingP(false);  
  }
    async function fetchDataEquipes() {
      const response = await fetch("/equipes");
      const json = await response.json();
      setEquipes(json);
      setLoadingE(false);  
    }

  useEffect(() => {
    fetchData()
    fetchDataEquipes()
  }, []);

  return {loadingP,loadingE,data,equipes};
};
const useStyles = makeStyles({

});


function Joueurs() {
    
    const divPrincipale= {
      paddingTop:'1rem'
      
      }

 const {loadingP,loadingE,data,equipes} = useFetch();
 //const {equipes} = useFetchEquipes("/equipes");
 const selectRef = useRef(0);
 const [selEquipe, setSelEquipe] = useState(0);

 const options = {
  timeZone:"America/Toronto",
  hour12 : false,
  hour:  "2-digit",
  minute: "2-digit"
}

new Date().toLocaleTimeString("en-US",options);
    return (
<Container>
        
          {loadingP||loadingE? <div>Loading...</div> :
            <Paper style={divPrincipale}>
           
            <Typography variant="h2">Joueurs</Typography>
            
            <Table  size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={()=>{data.sort((a,b)=>{return ((data.id+"").localeCompare(data.id))});}}>No</TableCell>
                  <TableCell align="right" >Nom</TableCell>
                  <TableCell align="right">Prenom</TableCell>
                  <TableCell align="right">Date de Naissance</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
              {data.map(joueurs => 
                      (
      
                        <TableRow key={joueurs.Id} >
                          <TableCell align="center">{joueurs.Id}</TableCell>
                          <TableCell align="center">{joueurs.Nom}</TableCell>
                          <TableCell align="center">{joueurs.Prenom}</TableCell>
                          <TableCell align="center">{joueurs.Sexe}</TableCell>
                        </TableRow>
                    
                          ))}
              </TableBody>
            </Table>
            </Paper>
            }
          

        </Container>
      );

    }



export default Joueurs;
