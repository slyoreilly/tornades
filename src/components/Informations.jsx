import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';


const NavTabsWidth = 100;

function Informations() {


    const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  
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
      marginTop: 80
    }

    return (
       
	 <Paper style={divPrincipale}>
<ul><li>Documents Importants</li></ul>

</Paper>
      );

    }



export default Informations;
