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
    const response = await fetch("/pratiques");
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


function Pratiques() {
    
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
           
            <Typography variant="h2">Pratiques</Typography>
            <span>Choisir votre équipe:</span>
                <select ref={selectRef} selected onChange={()=>{setSelEquipe(selectRef.current.value);console.log(selectRef.current.value)}} >
                <option key={0} value={0}>Toutes</option>
                {equipes.map(equipe => 
                (
                <option key={equipe.id} value={equipe.id}>{equipe.Nom}</option>

                ))}
                </select>

            <Table  size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={()=>{data.sort((a,b)=>{return ((data.id+"").localeCompare(data.id))});}}>No</TableCell>
                  <TableCell align="right" >Jour</TableCell>
                  <TableCell align="right">Équipes</TableCell>
                  <TableCell align="right">Heure</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
             
               {  data.filter(
                pratiques =>(Object.keys(pratiques.equipes).filter(
                key=>(pratiques.equipes[key].id==selEquipe||selEquipe==0)).length>0)).map(pratiques => 
                (

                  <TableRow key={pratiques.id} >
                    <TableCell component="th" scope="row">
                      {pratiques.id}
                    </TableCell>
                    <TableCell align="right">{pratiques.Jour}</TableCell>
                    <TableCell align="right">
                            {Object.keys(pratiques.equipes).map(cleEq => 
                        (

                          <span key={pratiques.equipes[cleEq].id} >
                            {pratiques.equipes[cleEq].Nom} <br></br>
                          </span>
                      
                            ))}

                    </TableCell>
                    <TableCell align="right">{pratiques.Debut.split(':')[0]+":"+pratiques.Debut.split(':')[1]}</TableCell>
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
