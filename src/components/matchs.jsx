import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from '../_shared/tornades.png';
import '../App.css';
import { Container } from '@material-ui/core';



const NavTabsWidth = 100;

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

    return (
      <Container>
        <div style={divPrincipale}>
          <h2>Match</h2>
            <p>Allez sur le site de hockey Montreal pour voir vos matchs.</p>
        </div>
        </Container>
      );

    }



export default Matchs;
