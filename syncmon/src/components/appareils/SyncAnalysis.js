import React, {useState, useEffect} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ReactHighCharts from 'react-highcharts';

 
 

const VIEWMODE_LIST = 0;
const VIEWMODE_DETAIL = 1;


const SyncAnalysis  = (props)=>{
  const [config,setConfig] = useState({
    chart: {
      type: 'column'
    }});
 
    useEffect(()=>{
      console.log(props.data);
      setConfig({
        chart: {
          zoomType: 'x',
          panning: true,
          panKey: 'shift',
          type:'column'


        },

        xAxis:{
          type:'datetime'
          
        },
        series: [{
          name:'Delta T1',
          data: props.data.map(function(value,index) {return 'Full'.localeCompare(value[4]) &&  value[1];})
        },
        {
          name:'Delta T2',
          data: props.data.map(function(value,index) { return 'Full'.localeCompare(value[4]) && value[2];})
        },
        {
          name:'Delta T3',
          data: props.data.map(function(value,index) {  return 'Full'.localeCompare(value[4])&&  value[3]; })
        },
        {
          name:'Delta T1 Match',
          data: props.data.map(function(value,index) {  return  'match'.localeCompare(value[4]) &&  value[1];})
        },
        {
          name:'Delta T2 Match',
          data: props.data.map(function(value,index) { return 'match'.localeCompare(value[4]) &&  value[2];})
        },
        {
          name:'Delta T3 Match',
          data: props.data.map(function(value,index) {  return  'match'.localeCompare(value[4]) && value[3];})
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


export default SyncAnalysis;