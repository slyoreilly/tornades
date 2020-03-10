import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
import { makeStyles, useStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fontFamily } from '@material-ui/system';
import Accueil from '../components/Accueil'
import Informations from '../components/Informations'
import { useTheme } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';

const classes={
   
    mobileTab: {
        backgroundColor:'#000000',
        color:'#fff',
 
    },
    tab: {
    
    }};

    const styleTabs={
        backgroundColor:'#666',

    }



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
        <Tabs
           // className={isMobile ? classes.tabs: ""}
            orientation={isMobile ? "horizontal" : "horizontal"}
            value={value}
            onChange={(e) => setValue(e)}
            // variant="scrollable"
            style={styleTabs}
            centered
            scrollButtons="on"
            indicatorColor="secondary"//{theme.palette.secondary.main}
            textColor="secondary"//{theme.palette.primary.main}
            
        >
            <Tab  label={isMobile+""} component={Link} to={ "/"} style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab  label="Nouvelles" component={Link} to={ "/nouvelles/"} style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Pratiques" component={Link} to={"/pratiques/"} style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Matchs" component={Link} to="/matchs/" style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Tournoi" component={Link} to="/tournoi/" style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Arénas" component={Link} to="/arenas/" style={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Informations" component={Link} to="/informations/" style={isMobile ? classes.mobileTab : classes.tab}/>
            <Tab label="Contact" component={Link} to="/contact/" style={isMobile ? classes.mobileTab : classes.tab} />
        </Tabs>
        </div>
    );
}

export default  withTheme(withRouter(NavTabs))