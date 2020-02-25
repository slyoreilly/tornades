import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

const schema = 

  {
   
      type:"object",
     required: [ "Nom", "Appareils" ],
      properties:{
        Nom:{
          type:"string"
        },
        Appareils:{
            type:"array",
            items:{
              type:"object",
              properties:{
                no:{
                  type:"number"
                },
                fonction:{
                  type:"string",
                  enum:["Télécommande","Caméra"]
                }
              }
            }
        }
      }

  }

  const uiSchema = {
    "no": {
      "ui:autofocus": true,
      "ui:emptyValue": ""
    },
    "Nom": {
      "ui:title": "Nom du client",
      "ui:description": "This description will be in a Popover"
    }
  }

  const initialFormData = {
    "firstName": "Chuck",
    "lastName": "Norris",
    "age": 75,
  }



class AppareilFormAdd extends Component{


    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit({formData}) {
        console.log(formData);
        fetch('http://localhost:3000/liste/appareils',{method:'POST', body:JSON.stringify(formData),headers: {
            "Content-Type": "application/json"}}).then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
        });
    }
    



log = (type) => console.log.bind(console, type);

render(){
    return (
  <Form schema={schema}
      uiSchema={uiSchema}
        onSubmit={this.handleSubmit}
        onError={this.log("errors")} />
);

}
}



class AppareilFormUpdate extends Component{


  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      
  }

  handleSubmit({formData}) {
      console.log(formData);
      fetch('http://localhost:3000/liste/appareils/'+this.props.dbid,{method:'PUT', body:JSON.stringify(formData),headers: {
          "Content-Type": "application/json"}}).then(function(res) {
          return res.json();
      }).then(function(json) {
          console.log(json);
      });
  }
  



log = (type) => console.log.bind(console, type);

render(){
  console.log("render form update: "+JSON.stringify(this.props));
  return (
<Form schema={schema}
    uiSchema={uiSchema}
    formData={this.props.formData}
      onSubmit={this.handleSubmit}
      onError={this.log("errors")} />
);

}
}

export {AppareilFormAdd, AppareilFormUpdate};

