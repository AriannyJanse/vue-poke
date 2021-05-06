<template>
    <base-layout :page-title="loadedPokemon ? capitalizeFirstLetter(this.$store.state.pokemon.name) : 'Loading...'" page-default-back-link="/search">
        <h2 v-if="!loadedPokemon">Could not find a pok&eacute;mon for the given name.</h2>
    </base-layout>
</template>

<script>


export default {
    name: 'PokemonDetailPage',
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
    computed: {
        loadedPokemon() {
            return this.$store.state.pokemon ? this.$store.state.pokemon : null;
        }
    }
}
</script>