import React, {Component} from 'react';
import {Grid, Header, Icon} from 'semantic-ui-react';
import json from '../resume.json';

class Scrum extends (Component){
  constructor(props){
    super();
    this.state={json}
    }

  render(){
    return(
      <div>{
        this.state.json.education.map((item,i) => 
        <div>
          <Grid.Row>
            <Header size='large'>{item.UniversityName}</Header>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              {item.specialization} <Icon name='graduation cap'color={'teal'}/>{item.MonthOfPassing} {item.YearOfPassing}
            </Grid.Column>
        </Grid.Row>
      </div>
        )}
    </div>  
    )
  }
}
export default Scrum;