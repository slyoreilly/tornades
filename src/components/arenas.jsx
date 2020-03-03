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
  
    const theme = createMuiTheme({
      palette: {
        primary: { main: '#FF0000' }, // Purple and green play nicely together.
        secondary: { main: '#66FF00' }, // This is just green.A700 as hex.
      },
    });
    const divPrincipale= {
      marginTop: 50
    }
  
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
  
    const {loading,data} = useFetch("http://68.66.193.234:1337/arenas");

    return (
      <div>
        {loading ? <div>Loading...</div> :
                <Paper style={divPrincipale}>
                  <h1>Arenas</h1>-
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
              </div>
            );
      
          }
      


export default Arenas;
