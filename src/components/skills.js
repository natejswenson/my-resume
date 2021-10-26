import React, {Component} from 'react';
import {Grid,Progress,Divider, Icon} from 'semantic-ui-react';
import json from '../resume.json';


class Scrum extends (Component){
  constructor(props){
    super();
    this.state={json}
    }
  render(){
    return(
      <div>{
        this.state.json.skills.map((item) => 
            <div>
               <Grid.Row>
                    <Grid.Column verticalAlign='middle' width={9}>
                        <Progress percent={item.number} size='large' color={item.color}>
                            {item.skillname}
                        </Progress>
                    </Grid.Column>
                </Grid.Row> 
                 <Divider hidden></Divider>
             </div>
            )}
        
    </div>  
    )
 }
}

export default Scrum;
