import React, {Component} from 'react';
import { render } from 'react-dom';
import json from '../resume.json'
import {List,Header}from 'semantic-ui-react'
class Scrum extends (Component){
  constructor(){
    super();
    this.state={json}
    }
  render(){
    return(
      <div>{
        this.props.a.Achievements.map((achieve,i)=>
          <List.Item as ='li'>{achieve}</List.Item>
         )
      }
      </div>
    )       
  }
}
export default (Scrum);