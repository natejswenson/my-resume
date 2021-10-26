import React, { Component } from 'react';
import json from './../resume.json'
import { Grid, Image, Progress,GridColumn} from 'semantic-ui-react'
import WorkHistory from './work.js'
export default  class Resume extends Component {
  constructor(){
    super();
    this.state={json}
    }
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">{
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                            {item.specialization}
                            <span>&bull;</span> 
                            <em className="date">
                              {item.MonthOfPassing} 
                              {item.YearOfPassing}
                            </em></p>
                          <p>
                            {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
         <Grid columns={4}>
           <Grid.Row>
             <GridColumn width={3}>
             </GridColumn>
            <GridColumn width={3}>
              <h1><span>Work</span></h1>
            </GridColumn>
            <GridColumn  width={9}>
              <span><WorkHistory /></span>
            </GridColumn>
          </Grid.Row>
        </Grid>
        <Grid columns={4}>
           <Grid.Row>
             <GridColumn width={3}>
             </GridColumn>
            <GridColumn width={3}>
              <h1><span>Skills</span></h1>
            </GridColumn>
            <GridColumn  width={9}>
              <div className="nine columns main-col">
                <div className="bars">
                <ul className="skills">
                  {
                    this.state.json.skills.map((item) => {
                      return(
                        <Grid >
                          <Grid.Row columns={2}>
                            <Grid.Column verticalAlign='middle'>
                            <Progress percent={item.number} size='large' color={'grey'}>
                              {item.skillname}
                            </Progress>
                            </Grid.Column>
                            <Grid.Column verticalAlign='top'>
                              <Image src={item.image} size='tiny'/>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      )
                    })
                  }
                </ul>
                </div>
              </div>
            </GridColumn>
          </Grid.Row>
        </Grid>
    </section>
    );
  }
}