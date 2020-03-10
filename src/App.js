import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import logo from './_shared/tornades.png';
import './App.css';
import Helmet from "react-helmet";
import Button from '@material-ui/core/Button';
import NavTabs from './_shared/NavTabs';
import Container from '@material-ui/core/Container';
//import { Route, Switch} from 'react-router-dom';
import SwitchRoutes from './components/SwitchRoutes';
import { createMuiTheme, responsiveFontSizes ,ThemeProvider} from '@material-ui/core/styles';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

//import red from '@material-ui/core/colors/red';
//import yellow from '@material-ui/core/colors/yellow';


const theme = createMuiTheme({
  palette: {
    primary: { main:  '#e00024'}, 
    secondary: { main: '#f5c71a' }, 
    tertiary: { main: '#000000' }, 
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});


theme.typography.h1 = {
  fontFamily:'Roboto',
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
  alignCenter:true,
  noWrap:true


};



  //theme = responsiveFontSizes(theme);


function App() {


  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [navHeight, setNavHeight] = useState(0);
  const [navWidth, setNavWidth] = useState(0);

  let navRef = useRef(null);

  let isMobile =size.height > size.width;


  const handleWindowSizeChange = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
    isMobile = parseInt(size.height) > parseInt(size.width) ?true:false;
  };


  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  useLayoutEffect(() => {

    setNavHeight(navRef? navRef.getBoundingClientRect().height :0);
    setNavWidth(navRef? navRef.getBoundingClientRect().width :0);
    //mainStyle.marginLeft= isMobile ? 0 : size-navWidth/2;


  }, [navRef]);



  const mainStyle = {
    marginLeft: isMobile ? 0 : (size.width-navWidth)/2,
    backgroundColor:"#ffffff"
  }

  const bgStyle = {
  
    backgroundColor:"#e00024"
  }


  
  const navStyle = {
    position: isMobile ?'fixed':'relative',
    left: 0,
    marginTop: isMobile?'':0,
    bottom: isMobile ? 0 : '',
    height: isMobile ? "" : 0,
    width: isMobile ? '100%' :'',
    marginLeft: 0,
    backgroundColor:"#ffffff",
    opacity:1,

    zIndex: 1, /* Stay on top */
  }


  
const styleTitre= {
position:isMobile?'absolute':'absolute',
marginLeft:isMobile?10:30,
height:'100%',
}


    return (
      <div  className='App' style={bgStyle} >
      
        <Helmet title="Tornades AHMV" />
        <ThemeProvider  theme={theme}>
      <div className={!isMobile?'App-header':'App-header-mobile'}>
      <img className={!isMobile?'logo-tornades':'logo-tornades-mobile'} src={logo}/>
       <div className={!isMobile?'App-header-rouge':'App-header-rouge-mobile'}> 
       <Typography variant="h1" style={styleTitre}>Association du Hockey Mineur de Villeray</Typography>
      </div>
       <div className={!isMobile?'App-header-sub':'App-header-sub-mobile'}> </div>
       <div className={!isMobile?'App-header-noir':'App-header-noir-mobile'}> </div>
       </div>
       <div style={navStyle} ref={divElement => { navRef = divElement }}>
          <NavTabs  isMobile={isMobile} theme = {theme} />
</div>

          <Container style={mainStyle}  className="conteneur">

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