//CHILD component of pplList
//hold all props for people returned
//export to PeopleList
//import react

import React from "react";
import { Container, Row, Col, Button, Alert} from "reactstrap";

const PeopleCards = props => {
    console.log (props);
//pass props for card info
    return(
        <Container>
        <div className = "peopleCard" key ={props.index}>
          <h1> Name: {props.name} </h1> 
              <Row>
            <Button color ="primary">Height: {props.height} </Button>
            <Button color ="success"> Mass:  {props.mass} </Button>
            <Button color ="info"> Hair: {props.hairColor} </Button>
            <Button color ="danger"> Skin: {props.skinColor} </Button>
            <Button color ="secondary"> Eyes: {props.eyeColor} </Button>
            <Button color ="warning"> Born:  {props.born} </Button>
            <Button color ="primary"> Gender: {props.gender} </Button>    
            </Row>    
        

        <Alert color="secondary">
            <Col xs ="auto"> HomeWorld: {props.home} </Col>
            </Alert>
            <Alert color="secondary">
           <Col xs="auto"> Films: {props.films} </Col>
           </Alert>
           <Alert color="secondary">
           <Col xs="auto"> Species: {props.species} </Col>
           </Alert>
           <Alert color="success">
           <Col xs="auto"> Starships: {props.starships} </Col>
           </Alert>
           <Alert color="success">
           <Col xs="auto"> Vehicles: {props.vehicles} </Col>  
           </Alert>
<Alert color = "warning">
    <div className = "alert-heading">
             <Row> 
                 <Col xs="auto">Link: {props.url}</Col>
                 <Col xs="auto">  Created: {props.created}</Col>
                 <Col xs="auto"> Edited: {props.edited}</Col>
             </Row>
             
             </div>
             </Alert>
        </div>
     
        
        </Container>
    );

}

export default PeopleCards;
