
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            pokemon: null
        };
    },
    mutations: {
        setPokemon(state, pokemon) {
            state.pokemon = pokemon;
        },
    },
    actions: {
        setCurrentPokemon(context, pokemonData) {
            context.commit('setPokemon', pokemonData);
        }
    },
    getters: {}
});

export default store;