import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { fontFamily } from '@material-ui/system';
import Accueil from '../components/Accueil'
import Informations from '../components/Informations'

const useStyles = makeStyles(theme => ({
    tabs: {
        backgroundColor:'#000000'
    },
    mobileTab: {
        backgroundColor:'#000000',
        color:'#fff',
        
    },
    tab: {
        backgroundColor:'#000000',
        color:'#fff',
     
    }
}));


const NavTabs = ({ history, ...props }) => {
    const { isMobile } = props;
    const classes = useStyles(props.theme);
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        SetTabsValue();
    }, []);

    useEffect(() => history.listen(() => {
        SetTabsValue();
    }), [history.location]);



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
        <Tabs
            className={isMobile ? classes.tabs: ""}
            orientation={isMobile ? "horizontal" : "horizontal"}
            value={value}
            onChange={(e) => setValue(e)}
            // variant="scrollable"
            centered
            scrollButtons="on"
            
        >
            <Tab label={isMobile+""} component={Link} to={ "/"} className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Nouvelles" component={Link} to={ "/nouvelles/"} className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Pratiques" component={Link} to={"/pratiques/"} className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Matchs" component={Link} to="/matchs/" className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Tournoi" component={Link} to="/tournoi/" className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Arénas" component={Link} to="/arenas/" className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Informations" component={Link} to="/informations/" className={isMobile ? classes.mobileTab : classes.tab} />
            <Tab label="Contact" component={Link} to="/contact/" className={isMobile ? classes.mobileTab : classes.tab} />
        </Tabs>
    );
}

export default withRouter(NavTabs)