//CHILD component of pplList
//hold all props for people returned
//export to PeopleList
//import react

import React from "react";

const PeopleCards = props => {
    console.log (props);
//pass props for card info
    return(
        <div className = "peopleCard" key ={props.index}>
           <h1> {props.name} </h1>
           <p>{props.height} </p>
           <p> {props.mass} </p>
           <p> {props.hairColor} </p>
           <p>  {props.skinColor} </p>
           <p> {props.eyeColor} </p>
           <p>  {props.born} </p>
           <p> {props.gender} </p>
           <p> {props.home} </p>
           <p> {props.films} </p>
           <p> {props.species}</p>
            <p> {props.vehicles}</p>
            <p>{props.url}</p>
            <p>{props.created}</p>
            <p>{props.edited}</p>
        </div>
    );

}

export default PeopleCards;
