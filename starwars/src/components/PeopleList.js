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
    {cards.map((card, index) => {

return (

<PeopleCards 
key = {index}
name = {card.name}
height = {card.height}
mass = {card.mass}
hairColor = {card.hair_color}
skinColor = {card.skin_color}
eyeColor = {card.eye_color}
born = {card.birth_year}
gender = {card.gender}
home = {card.homeworld}
films = {card.films}
species = {card.species}
vehicles = {card.vehicles}
starships = {card.starships}
url = {card.url}
created = {card.created}
edited = {card.edited}
/>


);
    })}
    </div>
);
 
    
}
