import React, { useState } from "react";


const PokeApi = () => {

    const [pokemon, setPokemon] = useState([]);

    const buttonHandler = (e) => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => response.json())
            .then(response => {
                setPokemon(response.results)
            })
            .catch(err => { console.log(err) });
    }
    return (
        <div>
            <button onClick={buttonHandler}>Fetch Pokemon!</button>
            {
                pokemon.map((val, idx) =>
                    <div key={idx}>{val.name}</div>
                )
            }
        </div>
    );
}

export default PokeApi;