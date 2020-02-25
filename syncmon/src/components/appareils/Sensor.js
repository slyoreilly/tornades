import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ReactHighCharts from 'react-highcharts';

 
 

const VIEWMODE_LIST = 0;
const VIEWMODE_DETAIL = 1;


const Sensor  = (props)=>{
  const [config,setConfig] = useState({
    chart: {
      type: 'datetime'
    }});
 
    useEffect(()=>{
      console.log(props.data);
      setConfig({
        chart: {
          zoomType: 'x',
          panning: true,
          panKey: 'shift'
        },

        xAxis:{
          type: 'datetime'
          
        },
        series: [{
          name:props.name,
          data: props.data
        }],
        responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }

      })
    },
    [props])

        return(

        <div>  {
        <ReactHighCharts config={config}/>}      </div>
        );
    
}


export default Sensor;