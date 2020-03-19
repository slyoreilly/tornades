import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import '../style/NavTabs.css';
import { Link } from "react-router-dom";
import { makeStyles, useStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fontFamily } from '@material-ui/system';
import Accueil from '../components/Accueil'
import Informations from '../components/Informations'
import { useTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import 'typeface-indie-flower';
//import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');
import Typography from '@material-ui/core/Typography';


    //const styleTabs={
     //   backgroundColor:'#000000',
      //  color:theme.palette.primary.main,

    //}//

const tabProps={textColor:"primary"}

const NavTabs = ({ history, ...props }) => {
    const { isMobile } = props;
    //const classes = useStyles(props.theme);
    const [value, setValue] = React.useState(0);

    const theme = useTheme(props.theme);
    useEffect(() => {
        SetTabsValue();
    }, []);

    useEffect(() => history.listen(() => {
        SetTabsValue();
    }), [history.location]);

    const useStyles = makeStyles({
        root: {
            backgroundColor:'#000000',
            color:theme.palette.primary.main,
        },
        media: {
     
        },

      });

    function SetTabsValue() {
        const path = history.location.pathname.substring(1, history.location.pathname.indexOf('/', 1));
        switch (path) {
            case 'accueil':
                setValue(0);
                break;
                case 'nouvelles':
                    setValue(1);
                    break;
                    case 'pratiques':
                        setValue(2);
                        break;
                        case 'matchs':
                            setValue(3);
                            break;
            case 'tournoi':
                setValue(4);
                break;
            case 'arenas':
                setValue(5);
                break;
            case 'informations':
                setValue(6);
                break;
                case 'contact':
                    setValue(7);
                    break;
            default:
        }
    }

    return (
        /*<ThemeProvider theme={theme}>*/
        <div>
             <Typography variant="button" >
        <Tabs
            className={isMobile ? "": ""}
            orientation={isMobile ? "horizontal" : "horizontal"}
            value={value}
            onChange={(e) => setValue(e)}
            // variant="scrollable"
            //style={useStyles.styleTabs}
          
            centered={isMobile ? false : true}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons="auto"
            indicatorColor="secondary"//{theme.palette.secondary.main}
            textColor="secondary"//{theme.palette.primary.main}
            
        >
            <Tab  label={"Accueuil"} component={Link} to={ "/"} style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
            <Tab  label="Nouvelles" component={Link} to={ "/nouvelles/"}  style={{ fontSize: '1.3rem' }}  className={isMobile ? "mobileTab" : "tab"} />
            <Tab label="Pratiques" component={Link} to={"/pratiques/"}  style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
            <Tab label="Matchs" component={Link} to="/matchs/"  style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
            <Tab label="Tournoi" component={Link} to="/tournoi/"  style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
            <Tab label="Arénas" component={Link} to="/arenas/"  style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
            <Tab label="Informations" component={Link} to="/informations/" style={{ fontSize: '1.3rem' }}  className={isMobile ? "mobileTab" : "tab"}/>
            <Tab label="Contact" component={Link} to="/contact/"  style={{ fontSize: '1.3rem' }} className={isMobile ? "mobileTab" : "tab"} />
        </Tabs>
        </Typography>
        </div>
    );
}

export default  withTheme(withRouter(NavTabs))