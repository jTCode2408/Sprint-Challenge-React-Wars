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
           <h1> Name: {props.name} </h1>
           <p>Height: {props.height} </p>
           <p> Mass:  {props.mass} </p>
           <p> Hair: {props.hairColor} </p>
           <p> Skin: {props.skinColor} </p>
           <p> Eyes: {props.eyeColor} </p>
           <p> Born:  {props.born} </p>
           <p> Gender: {props.gender} </p>
           <p> HomeWorld: {props.home} </p>
           <p> Films: {props.films}</p>
           <p> Species: {props.species}</p>
           <p>Starships: {props.starships}</p>
            <p> Vehicles {props.vehicles}</p>
            <p> Link: {props.url}</p>
            <p> Created: {props.created}</p>
            <p> Edited: {props.edited}</p>
        </div>
    );

}

export default PeopleCards;
