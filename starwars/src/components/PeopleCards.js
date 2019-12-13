//CHILD component of pplList
//hold all props for people returned
//export to PeopleList
//import react

import React from "react";

const PeopleCards = props => {
    console.log (props);
//pass props for card info
    return(
        <div className = "peopleCard" key ={props.name}>
           <h1> {props.name} </h1>
           <p>{props.height} </p>
           <p> {props.mass} </p>
           <p> {props.hair_color} </p>
           <p>  {props.skin_color} </p>
           <p> {props.eye_color} </p>
           <p>  {props.birth_year} </p>
           <p> {props.gender} </p>
           <p> {props.home} </p>
           <p> {props.films} </p>
           <p> {props.species}</p>
            <p> {props.vehicles}</p>
        </div>
    );

}

export default PeopleCards;
