<template>
    <base-layout page-title="PokéAPI By Ari💛">
        <search-bar @search-pokemon="searchPokemon"></search-bar>
        <poke-preview-card
            v-if="showCard"
            :name="this.$store.state.pokemon.name"
            :types="this.$store.state.pokemon.types"
            :height="this.$store.state.pokemon.height"
            :weight="this.$store.state.pokemon.weight"
            :sprite="this.$store.state.pokemon.sprites.front_default"
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
