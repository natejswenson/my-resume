import React, {Component} from 'react';
import {Grid, Header, GridColumn, GridRow} from 'semantic-ui-react';
import json from '../resume.json';
import Workcompany from './work.achievements.js';
import {List, Icon}from 'semantic-ui-react'

class Scrum extends (Component){
  constructor(props){
    super();
    this.state={json}
    }

  render(){
    return(
      <div>{
      this.state.json.work.map((item,i) => 
        <Grid.Row>
          <List as='ul'>
            <List.Item>
              <Header size='large'>{item.Company}</Header>
            </List.Item>
            <List.Item>
              <Header size='medium' color='grey'>{item.specialization} <em className="date"> <Icon fitted name ='calendar alternate' /> {item.MonthOfLeaving} {item.YearOfLeaving}</em></Header>
                <List.List bulleted>
                  <List.Item ><List.List>
                  <Workcompany a ={item} />
                </List.List>
              </List.Item>
          </List.List>
          </List.Item>
        </List>
      </Grid.Row>
      )}
      </div>  
    )
  }
}
    
 export default Scrum;