import React, {useState, useEffect} from 'react';
import AppareilDisplay from './AppareilDisplay';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const VIEWMODE_LIST = 0;
const VIEWMODE_DETAIL = 1;

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

const AppareilList =()=> {
const [activeAppareil, setActiveAppareil] = useState('');
const [appareils, setAppareils] = useState([]);
const [viewMode, setViewMode] = useState(VIEWMODE_LIST);
const [camIdSearch, setCamIdSearch] = useState('');
const  classes=useStyles();
useEffect(() => {
  console.log("Cristre");
//  this.props.matchs.params.camId;
  const fetchData =  () => { fetch('/liste/appareils',{method:'GET'})
    .then(res=>res.json())
    .then(resAppareils=>{setAppareils(resAppareils)});
    };
  fetchData();
}, []);

  function  handleEvent(appareil) {
      console.log("onClick eh oh :"+JSON.stringify(appareil));
      let { history } = appareil;
      history.push({
       pathname: '/appareil/'+appareil.telId
      });
      };

  //  componentDidMount(){

   
   //   }

   function changeViewMode(mViewMode,appareil){
      setViewMode(mViewMode);
      setActiveAppareil(appareil);
    }
    const  renderDetails = ()=>{
      return(
      <div>
      <Button variant="contained"  onClick={()=>changeViewMode(VIEWMODE_LIST,'')}>
        Voir Liste
      </Button>
      <h1>Appareil</h1>

        <AppareilDisplay  
         _id={activeAppareil.telId} 
        battery={activeAppareil.batterie} 
        lastUpdate={activeAppareil.dernierMaJ}
        telId={activeAppareil.telId} 
        camId={activeAppareil.camId}
        temperature={activeAppareil.temperature}
        statusCode={activeAppareil.codeEtat}
        version={activeAppareil.version}
        viewMode={VIEWMODE_DETAIL}
    
        />
    </div>);
    }
const displayCond = (id2check,camId2check)=>{
//  console.log(id2check +"     "+camId2check.camIdSearch + (camId2check.camIdSearch==='')||(camId2check.camIdSearch==id2check));
  if  ((camId2check.camIdSearch==='')||((id2check+"").includes(camId2check.camIdSearch+""))) {
    return true;
  }
  return false;
}

    const  renderListElements = ()=> {
      return(
    <div className={classes.root}>
          <Paper className={classes.paper}>
            <h1>Appareils</h1>-
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  <TableCell onClick={()=>{appareils.sort((a,b)=>{return ((a.camId+"").localeCompare(b.camId))}); setAppareils(appareils);}}>Cam Id</TableCell>
                  <TableCell align="right">Telephone Id</TableCell>
                  <TableCell align="right" onClick={()=>{appareils.sort((a,b)=>{return (a.dernierMaJ.localeCompare(b.dernierMaJ))}); setAppareils(appareils);}}>Dernière mise à jour</TableCell>
                  <TableCell align="right" onClick={()=>{appareils.sort((a,b)=>{return (a.batterie > b.batterie)}); setAppareils(appareils);}}>Niveau de batterie</TableCell>
                </TableRow>

              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><input type="text" value={camIdSearch} onChange={(e)=>setCamIdSearch(e.target.value)} /></TableCell>
                  <TableCell align="right"><input type="text"/></TableCell>
                  <TableCell align="right"><input type="text"/></TableCell>
                  <TableCell align="right"><input type="text"/></TableCell>
                </TableRow>
                {appareils.map(appareil => 
                (
                  displayCond(appareil.camId, {camIdSearch})?
                  <TableRow key={appareil.telId} onClick={()=>/*handleEvent(appareil)*/changeViewMode(VIEWMODE_DETAIL, appareil)}>
                    <TableCell component="th" scope="row">
                      {appareil.camId}
                    </TableCell>
                    <TableCell align="right">{appareil.telId}</TableCell>
                    <TableCell align="right">{appareil.dernierMaJ}</TableCell>
                    <TableCell align="right">{appareil.batterie}</TableCell>
                  </TableRow>
                    : null
                    ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
    
      );
    }

    return (<div>
      {viewMode===VIEWMODE_DETAIL 
      ?
      renderDetails()
      :
      renderListElements()
      }




    </div>);
   
    
    
/*
    <div>
    <h1>Appareils</h1>-
    <List component="nav" aria-label="secondary mailbox folders">
              {appareils.map((appareil,i)=>
               <ListItem  button key={i}  onClick={()=>changeViewMode(VIEWMODE_DETAIL, appareil)}>
                 <ListItemText primary={appareil.camId} />
                <Appareil                 
                _id={appareil.telId} 
                battery={appareil.batterie} 
                lastUpdate={appareil.dernierMaJ}
                telId={appareil.telId} 
                camId={appareil.camId} 
                viewMode={VIEWMODE_LIST}
                />
              </ListItem>
              )
              }
    </List>       
    </div>
  */          




}
export default  AppareilList

