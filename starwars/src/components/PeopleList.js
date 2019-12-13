//parent for people
//import PeopleCard
//export
//import react(USESTATE HERE!)
//useeffect here?
//set state here
//state here

import React, {useState, useEffect} from "react";
import axios from "axios";
import PeopleCards from "./PeopleCards";



export default function PeopleList (){
const [cards, setCards] = useState([]);

// useEffect (() => {

//     axios
//     .get (`https://swapi.co/api/people/`)
//     .then (response => {
//         // console.log (response.data.results);
//         setCards(response.data.results);

// })
// .catch(error => {
//     console.log ("no data", error);
// });
// }, []);


//map to set info for each card

return ( 
<div className = "card">
    {cards.map(card => {

return (

<PeopleCards 
key = {card.object}
name = {card.name}
height = {card.height}
mass = {card.mass}
hairColor = {card.hairColor}
skinColor = {card.skinColor}
eyeColor = {card.eyeColor}
born = {card.born}
gender ={card.gender}
home = {card.home}
// films = {card.films}
/>


);
    })}
    </div>
);
 
    
}
