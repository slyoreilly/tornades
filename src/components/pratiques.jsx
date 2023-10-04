import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../App.css';
//import Checkbox from './Checkbox';
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
import { CheckBox } from '@material-ui/icons';
const NavTabsWidth = 100;
const joursSemaine = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loadingP, setLoadingP] = useState(true);
  const [loadingE, setLoadingE] = useState(true);
  const [loadingA, setLoadingA] = useState(true);
  const [equipes, setEquipes] = useState(null);
  const [arenas, setArenas] = useState(null);

  async function fetchData() {
    const response = await fetch("/api/pratiques?_limit=100&_sort=Jour:ASC");
    const json = await response.json();
    json.sort(function(a,b){if(a.Jour.localeCompare(b.Jour)==0){return ( a.Debut.localeCompare(b.Debut));}else{return (a.Jour.localeCompare(b.Jour));};});
    setData(json);
    setLoadingP(false);  
  }
    async function fetchDataEquipes() {
      const response = await fetch("/api/equipes");
      const json = await response.json();
      setEquipes(json);
      setLoadingE(false);  
    }
    async function fetchDataArenas() {
      const response = await fetch("/api/arenas");
      const json = await response.json();
      setArenas(json);
      setLoadingA(false);  
    }


  useEffect(() => {
    fetchData()
    fetchDataEquipes()
    fetchDataArenas()
  }, []);

  return {loadingP,loadingE,data,equipes,arenas};
};
const useStyles = makeStyles({

});


function Pratiques() {
    
    const divPrincipale= {
      paddingTop:'1rem'
      
      }

 const {loadingP,loadingE,data,equipes,arenas} = useFetch();
 //const {equipes} = useFetchEquipes("/equipes");
 const selectRef = useRef(0);
 const [selEquipe, setSelEquipe] = useState(0);
 const [inclusAncien, setInclusAncien] = useState(false);

 const options = {
  hour12 : false,
  hour:  "2-digit",
  minute: "2-digit"
}

const optionsDate = {
  hour12 : false,
}

var heure = new Date().toLocaleTimeString("en-US",options);
var  maintenant= new Date();
var aujourdhui =maintenant;
aujourdhui.setHours(0);
aujourdhui.setMinutes(0);
aujourdhui.setSeconds(0);
aujourdhui.setMilliseconds(0);

    return (
      <Container>
        
          {loadingP||loadingE? <div>Loading...</div> :
            <Paper style={divPrincipale}>
           <Container>
            <Typography variant="h2">Pratiques</Typography>
            <span>Choisir votre équipe:</span>
                <select ref={selectRef} selected onChange={()=>{setSelEquipe(selectRef.current.value);console.log(selectRef.current.value)}} >
                <option key={0} value={0}>Toutes</option>
                {equipes.map(equipe => 
                (
                <option key={equipe.id} value={equipe.id}>{equipe.Nom}</option>

                ))}
                </select>
                <br/>
                
                <label>

                  <input

                    type="checkbox"

                    defaultChecked={false}

                    onClick={()=>{

                      setInclusAncien(!inclusAncien);
                    console.log("Maintenant: "+maintenant);
                    console.log("Auj:" +aujourdhui);
                    }}

                  /> Afficher les anciennes pratiques

                  </label>
            <Table  size="small">
              <TableHead>
                <TableRow>
                
                  <TableCell align="right" >Jour</TableCell>
                  <TableCell align="right" >Date</TableCell>
                  <TableCell align="right">Équipes</TableCell>
                  <TableCell align="right">Début</TableCell>
                  <TableCell align="right">Fin</TableCell>
                  <TableCell align="right">Aréna</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
             
               {data.filter(
                pratiques =>(Object.keys(pratiques.equipes).filter(
                key=>(pratiques.equipes[key].id==selEquipe||selEquipe==0)).filter(
                  key=>(new Date(pratiques.Jour)>=aujourdhui||inclusAncien)).length>0)).map(pratiques => 
                (

                  <TableRow key={pratiques.id} >
                    
                    <TableCell align="right">{joursSemaine[new Date(pratiques.Jour).getDay()]}</TableCell>
                    <TableCell align="right">{new Date(pratiques.Jour ).toLocaleDateString("fr-CA",optionsDate)}</TableCell>
                    <TableCell align="right">
                            {Object.keys(pratiques.equipes).map(cleEq => 
                        (

                          <span key={pratiques.equipes[cleEq].id} >
                            {pratiques.equipes[cleEq].Nom} <br></br>
                          </span>
                      
                            ))}

                    </TableCell>
                    <TableCell align="right">{pratiques.Debut.split(':')[0]+":"+pratiques.Debut.split(':')[1]}</TableCell>
                    <TableCell align="right">{pratiques.Fin.split(':')[0]+":"+pratiques.Fin.split(':')[1]}</TableCell>
                    <TableCell  align="right">
                      {pratiques.arena==null?"---":pratiques.arena.Nom}
                    </TableCell>
                  </TableRow>
              
                    ))}
              </TableBody>
            </Table>
            </Container>
            </Paper>
            }
          

        </Container>

      );

    }



export default Pratiques;
