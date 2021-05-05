<template>
    <ion-searchbar show-cancel-button="focus" placeholder="Find a Pok&eacute;mon!" @ionBlur="search" v-model="searchText" ></ion-searchbar>
</template>

<script>
import { IonSearchbar } from '@ionic/vue';
import api from '../api';
export default {
    emits: ['search-pokemon'],
    components: {
        IonSearchbar
    },
    data() {
        return {
            searchText: null
        };
    },
    methods: {
        async search() {
            if(this.searchText) {
                let pokemonData = await api.getPokemonByName(this.searchText);
                
                this.$emit('search-pokemon', pokemonData);
            }
        }
    }
}
</script>