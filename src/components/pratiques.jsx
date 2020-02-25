import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from '../_shared/tornades.png';
import '../App.css';
import Helmet from "react-helmet";
import Button from '@material-ui/core/Button';
import NavTabs from '../_shared/NavTabs';
import Container from '@material-ui/core/Container';
import { Route, Switch} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {data} from '../model/data';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const NavTabsWidth = 100;

function Pratiques() {



  
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
 

    return (
<div>
          <Paper style={divPrincipale}>
            <h1>Pratiques</h1>-
            <Table  size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={()=>{data.pratiques.sort((a,b)=>{return ((data.pratiques.id+"").localeCompare(data.pratiques.id))});}}>No</TableCell>
                  <TableCell align="right">Niveau</TableCell>
                  <TableCell align="right" >Jour</TableCell>
                  <TableCell align="right">Heure</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
      
                {data.pratiques.map(pratiques => 
                (

                  <TableRow key={pratiques.id} >
                    <TableCell component="th" scope="row">
                      {pratiques.id}
                    </TableCell>
                    <TableCell align="right">{pratiques.jour}</TableCell>
                    <TableCell align="right">{pratiques.niveau}</TableCell>
                    <TableCell align="right">{pratiques.heure}</TableCell>
                  </TableRow>
              
                    ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      );

    }



export default Pratiques;
