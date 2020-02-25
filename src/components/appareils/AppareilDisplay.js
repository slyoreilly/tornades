import React, {useState, useEffect} from 'react';
import Sensor from './Sensor';
import SyncAnalysis from './SyncAnalysis';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const VIEWMODE_LIST = 0;
const VIEWMODE_DETAIL = 1;
const navStyle = {
  position: 'fixed',
  left: 0,
  bottom: isMobile ? 0 : '',
  height: isMobile ? "" : "100%",
  width: isMobile ? '100%' : NavTabsWidth,
  zIndex: 1, /* Stay on top */
}
const isMobile=true;
const NavTabsWidth = 160;
//let navRef = useRef(null);

const AppareilDisplay  =(props)=>{

  const [legSensors, setLegSensors] = useState([]);
  const [syncAnalysis, setSyncAnalysis] = useState([]);
  const [sensors, setSensors] = useState({
    memory:{},
    battery:{},
    temperature:{},
    synclog:{},
  });
  const [viewMode, setViewMode] = useState(VIEWMODE_LIST);
  const [battery, setBattery] = useState('');
  const [memory, setMemory] = useState('');
  const [version, setVersion] = useState('');
  const [temperature, setTemperature] = useState('');
  const [nameState, setNameState] = useState(props); 
  const [statusCode, setStatusCode] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [selectedTab, setSelectedTab]= useState(3);

  useEffect(() => {

    if (nameState !== props.name) {
      setNameState(props.name);
    }
    if (viewMode !== props.viewMode) {
  //    setViewMode(props.viewMode);
    }
    setBattery(props.battery);
    setStatusCode(props.statusCode);
    setLastUpdate(props.lastUpdate);
    setVersion(props.version);
    setMemory(props.memory);
    setTemperature(props.temperature);




    ///      if(this.state.viewMode===VIEWMODE_DETAIL){
          //if(this.props.match!==undefined){
            fetch('/voir/appareil/'+telId,{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sensors=>setLegSensors(sensors));
            fetch('/voir/appareil/'+telId+'/sensor/'+1,{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sensor=>{
             // var sensors2 = {...sensors}
             // sensors2.memory = sensor;
            //  setSensors({sensors2})
              setSensors({...sensors, memory:sensor})
            });
            fetch('/voir/appareil/'+telId+'/sensor/'+2,{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sensor=>{
             // var sensors2 = {...sensors}
             // sensors2.battery = sensor;
              setSensors({...sensors, battery:sensor})
            });
            fetch('/voir/appareil/'+telId+'/sensor/'+3,{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sensor=>{
            //  var sensors2 = {...sensors}
           //   sensors2.temperature = sensor;
          //    setSensors({sensors2})
              setSensors({...sensors, temperature:sensor})
            });
            fetch('/voir/appareil/'+telId+'/sensor/'+5,{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sensor=>{
              setSensors({...sensors, synclog:sensor})
            });
            fetch('/voir/appareil/'+telId+'/sync',{method:'GET', headers: {
              "Content-Type": "application/json"}})
            .then(res=>res.json())
            .then(sync=>{
              setSyncAnalysis(sync)
            });
       //   }
        },[props]
  );
  const telId = props.telId;
  const camId = props.camId;

   
       
  const handleOnChange = (event, value) => {
   setSelectedTab(value);
}


  const handleEvent = (appareil) => {
  console.log("onClick :"+JSON.stringify(appareil));
  let { history } = this.props;
  history.push({
   pathname: '/appareil/'+appareil.telId
  });
  };




const update = ()=>{
  console.log("UPDATE!!!!");
  this.setState({viewMode:VIEWMODE_DETAIL});


}
          return       ( 
         
          <div
            /*onClick={this.update}*/>

               <Tabs
                            className="mb-2"
                            orientation={"horizontal"}
                            indicatorColor="secondary"
                            textColor="primary"
                            value={selectedTab}
                            onChange={handleOnChange}
                            variant="scrollable"
                            scrollButtons="on"
                            aria-label="summary tabs"
                > 
                                  <Tab key={3} label="Général" value={3} style={{ fontSize: isMobile ? '80%' : '100%' }} />
                                  <Tab key={0} label="Legacy Sensors" value={0} style={{ fontSize: isMobile ? '80%' : '100%' }} />
                                  <Tab key={1} label="Sensors" value={1} style={{ fontSize: isMobile ? '80%' : '100%' }} />
                                  <Tab key={2} label="Sync Log" value={2} style={{ fontSize: isMobile ? '80%' : '100%' }} />
                </Tabs>

         {selectedTab==3 && <div>
          <div>CamId: {camId}</div>
          <div>TelId: {telId} </div>
          <div>Batterie: {battery}</div>
          <div>Temperature: {temperature}</div>
          <div>Version: {version}</div>
          <div>Code État: {statusCode}</div>
          <div>Dernière mise à jour: {lastUpdate} </div>
          <div>Fichiers de log: <a href={"https://syncstats.com/monitoring/"+telId}> Ici </a> </div>
          <div>Page de contrôles alternatifs: <a href={"https://syncstats.com/zadmin/interfaceAppareil.html?telId="+telId}> Ici </a> </div>
         </div>}



          {selectedTab==0 && <List  component="nav" aria-label="secondary mailbox folders">
                {legSensors.map((sensor,i)=>
                 <ListItem button key={i} >
                    <Sensor sensorType={sensor.sensorTypeId} name={sensor.name} data={sensor.data} chrono={sensor.chrono}/>
                   <ListItemText primary={i} />
                </ListItem>
                )
                }
            </List>}

          {selectedTab==1 && 
              <div>NOUVEAUX SENSORS

                    <Sensor sensorType={sensors.memory.sensorTypeId} name={sensors.memory.name} data={sensors.memory.data} chrono={sensors.memory.chrono}/>

                 <Sensor sensorType={sensors.battery.sensorTypeId} name={sensors.battery.name} data={sensors.battery.data} chrono={sensors.battery.chrono}/>
                 <Sensor sensorType={sensors.temperature.sensorTypeId} name={sensors.temperature.name} data={sensors.temperature.data} chrono={sensors.temperature.chrono}/>
                 </div>
          }

          {selectedTab==2 && 
                <div>Historique des syncs
     <Sensor sensorType={sensors.synclog.sensorTypeId} name={sensors.synclog.name} data={sensors.synclog.data} chrono={sensors.synclog.chrono}/>
     <SyncAnalysis name={syncAnalysis.name} data={syncAnalysis.data} chrono={syncAnalysis.chrono}/>
            
                  </div>
          }

     </div> );

       
    
  
}

export default AppareilDisplay;

