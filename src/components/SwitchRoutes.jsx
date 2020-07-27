import React, { useState } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

//components
import Accueil from './Accueil'
import Pratiques from './pratiques'
import Nouvelles from './nouvelles'
import Informations from './Informations'
import Inscription from './Inscription'
import Arenas from './arenas'
import Tournoi from './tournoi'
import Matchs from './matchs'
import Contact from './contact'
import Connexion from './connexion'
import Joueurs from './joueurs'
//hooks
//import useGames from '../hooks/useGames';
//import useSummary from '../hooks/useSummary';


const SwitchRoutes = ({ history, ...props }) => {
    const { isMobile, navHeight, leagueID } = props;
    const [scrollPos, setScrollPos] = useState(0);
   // const [loadingNextGames, loadingPreviousGames, hasNext, hasPrevious, loadGames, games] = useGames(leagueID);
   // const [gameID, setGameID, isLoadingHeader, setIsLoadingHeader, gameHeader, setGameHeader, isLoadingEvents, setIsLoadingEvents, events, fetchEvents, hasMore, setHasMore, code, setCode, resetSummary] = useSummary();

    return (
        <Switch>
        <Route
                exact path={"/"}
                render={(props) =>
                    <Accueil {...props}
                        isMobile={isMobile}
                    />}
            />

        <Route
                path={"/inscription/"}
                render={(props) =>
                    <Inscription {...props}
                        isMobile={isMobile}
                    />}
            />
      <Route
                path={"/pratiques/"}
                render={(props) =>
                    <Pratiques {...props}
                        isMobile={isMobile}
                    />}
            />
                <Route
                path={"/nouvelles/"}
                render={(props) =>
                    <Nouvelles {...props}
                        isMobile={isMobile}
                    />}
            />
          <Route
                path={"/arenas/"}
                render={(props) =>
                    <Arenas {...props}
                        isMobile={isMobile}
                    />}
            />
          
          <Route
                path={"/tournoi/"}
                render={(props) =>
                    <Tournoi {...props}
                        isMobile={isMobile}
                    />}
            />
          
          <Route
                path={"/matchs/"}
                render={(props) =>
                    <Matchs {...props}
                        isMobile={isMobile}
                    />}
            />
                    <Route
                path={"/contact/"}
                render={(props) =>
                    <Contact {...props}
                        isMobile={isMobile}
                    />}
            />
                    <Route
                path={"/connexion/"}
                render={(props) =>
                    <Connexion {...props}
                        isMobile={isMobile}
                    />}
            />

<Route
                path={"/joueurs/"}
                render={(props) =>
                    <Joueurs {...props}
                        isMobile={isMobile}
                    />}
            />


        </Switch>
    );
}
export default withRouter(SwitchRoutes)