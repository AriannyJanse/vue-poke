<template>
    <base-layout page-title="PokéAPI By Ari💛">
        <search-bar @search-pokemon="searchPokemon"></search-bar>
    </base-layout>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';

export default {
    components: {
        SearchBar
    },
    methods: {
        searchPokemon(pokemonData) {
            this.$store.dispatch('setCurrentPokemon', pokemonData);
            console.log('pokemon: ', this.$store.state.pokemon);
        }
    }
}
</script>