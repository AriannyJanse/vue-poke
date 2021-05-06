<template>
    <base-layout :page-title="loadedPokemon ? capitalizeFirstLetter(this.$store.state.pokemon.name) : 'Loading...'" page-default-back-link="/search">
        <ion-tabs>
            <h2 v-if="!loadedPokemon">Could not find a pok&eacute;mon for the given name.</h2>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="information"  href="/pokemon/info">
                    <ion-icon :icon="informationCircleOutline" />
                    <ion-label>Information</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="moves" href="/pokemon/moves">
                    <ion-icon :icon="barbellOutline" />
                    <ion-label>Moves</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="more" href="/pokemon/more">
                    <ion-icon :icon="addOutline" />
                    <ion-label>More</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </base-layout>
</template>

<script>
import {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel
} from '@ionic/vue';
import { informationCircleOutline, barbellOutline, addOutline } from 'ionicons/icons';

export default {
    name: 'PokemonDetailPage',
    components: {
        IonTabs,
        IonTabBar,
        IonTabButton,
        IonIcon,
        IonLabel,
    },
    data() {
        return {
            informationCircleOutline,
            barbellOutline,
            addOutline,
        };
    },
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