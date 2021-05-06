<template>
    <base-layout page-title="PokéAPI By Ari💛">
        <search-bar @search-pokemon="searchPokemon"></search-bar>
        <poke-preview-card
            v-if="showCard"
            :pokemon="this.$store.state.pokemon"
        ></poke-preview-card>
    </base-layout>
</template>

<script>
import SearchBar from '../components/SearchBar.vue';
import PokePreviewCard from '../components/PokePreviewCard.vue';

export default {
    components: {
        SearchBar,
        PokePreviewCard
    },
   
    methods: {
        searchPokemon(pokemonData) {
            this.$store.dispatch('setCurrentPokemon', pokemonData);
        }
    },
    computed: {
        showCard() {
            return this.$store.state.pokemon ?  true : false;
        }
    }
}
</script>
