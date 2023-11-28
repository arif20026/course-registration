import { useEffect, useState } from "react";

const Cards = () => {

    const [cards,setCards]=useState([])

    useEffect( () => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },  [])

    return (
        <div className="md:w-3/4">

            <h1>Cards:{cards.length}</h1>
            
        </div>
    );
};

export default Cards;