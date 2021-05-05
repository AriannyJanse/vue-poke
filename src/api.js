
import axios from 'axios';

const pokeApiUrl = 'https://pokeapi.co/api/v2/pokemon';

function getPokemonByName(pokemonName) {
    return axios.get(pokeApiUrl+`/${pokemonName}`)
    .then(response => response.data)
    .catch((error) => { console.log(error); });
}

export default {
    getPokemonByName
};