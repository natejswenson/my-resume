import React, { Component } from 'react';
import json from './../resume.json'
import { Grid, Image, Progress,GridColumn} from 'semantic-ui-react'
import WorkHistory from './work.js'
import Education from './Education.js'
import Skills from './skills.js'
export default  class Resume extends Component {
  constructor(){
    super();
    this.state={json}
    }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <Grid columns={3}>
            <Grid.Row>
              <GridColumn width={1}>
              </GridColumn>
              <GridColumn width={3}>
                <h1><span>Education</span></h1>
              </GridColumn>
              <GridColumn  width={12}>
                <span><Education /></span>
              </GridColumn>
            </Grid.Row>
            
            <Grid.Row>
              <GridColumn width={1}>
              </GridColumn>
              <GridColumn width={3}>
                <h1><span>Experience</span></h1>
              </GridColumn>
              <GridColumn  width={12}>
                <span><WorkHistory /></span>
              </GridColumn>
            </Grid.Row>
            
            <Grid.Row>
              <GridColumn width={1}>
              </GridColumn>
              <GridColumn width={3}>
                <h1><span>Skills</span></h1>
              </GridColumn>
              <GridColumn  width={12}>
                <span><Skills /></span>
              </GridColumn>
            </Grid.Row>
          </Grid>
    </section>
    );
  }
}