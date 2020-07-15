import React, { useState } from "react";
import Axios from "axios";


const PokeApi = () => {

    const [pokemon, setPokemon] = useState([]);

    const buttonHandler = (e) => {
        Axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => setPokemon(response.data.results))
            .catch(err => console.log(err));
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
