import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from './_shared/tornades.png';
import './App.css';
import Helmet from "react-helmet";
import Button from '@material-ui/core/Button';
import NavTabs from './_shared/NavTabs';
import Container from '@material-ui/core/Container';
import { Route, Switch} from 'react-router-dom';
import SwitchRoutes from './components/SwitchRoutes';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';



const NavTabsWidth =30;

function App() {


  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [navHeight, setNavHeight] = useState(0);

  let navRef = useRef(null);
  let isMobile =size.height > size.width;


  const mainStyle = {
    marginLeft: isMobile ? 0 : NavTabsWidth,
    width:'100%'-NavTabsWidth
  }
  const navStyle = {
    position: isMobile ?'fixed':'relative',
    left: 0,
    marginTop: isMobile?'':0,
    bottom: isMobile ? 0 : '',
    height: isMobile ? "" : 0,
    width: isMobile ? '100%' :'100%',

    zIndex: 1, /* Stay on top */
  }
  
  const theme = createMuiTheme({
    palette: {
      primary: { main:  '#ff0000'}, 
      secondary: { main: '#66ff00' }, 
    },
  });
  
const styleTitre= {
position:isMobile?'absolute':'absolute',
marginLeft:isMobile?10:210,
height:'100%',
fontSize:isMobile?'50%':''

}

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useLayoutEffect(() => {

    setNavHeight(navRef? navRef.getBoundingClientRect().height :0)
  }, [navRef]);

  const handleWindowSizeChange = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    isMobile = parseInt(size.height) > parseInt(size.width) ?true:false;
  };



    return (
      <div className="App">
      
        <Helmet title="Tornades AHMV" />
        <ThemeProvider theme={theme}>
      <div className={!isMobile?'App-header':'App-header-mobile'}>
      <img className={!isMobile?'logo-tornades':'logo-tornades-mobile'} src={logo}/>
       <div className={!isMobile?'App-header-rouge':'App-header-rouge-mobile'}> 
       <h1 style={styleTitre}>Association du Hockey Mineur de Villeray</h1>
      </div>
       <div className={!isMobile?'App-header-sub':'App-header-sub-mobile'}> </div>
       <div className={!isMobile?'App-header-noir':'App-header-noir-mobile'}> </div>
       </div>
          <Container style={mainStyle} theme={theme}>
          <div style={navStyle} ref={divElement => { navRef = divElement }}>
          <NavTabs  isMobile={isMobile}  />
</div>
          <SwitchRoutes 
            isMobile={isMobile}
            navHeight={navHeight}
          >

         

          </SwitchRoutes>
        </Container>
        </ThemeProvider>
      </div>
    );
  }


export default App;
