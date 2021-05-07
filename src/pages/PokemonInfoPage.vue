<template>
    <div v-if="this.$route.path == '/pokemon/info'">
        <ion-card>
            <ion-item>
                <ion-thumbnail slot="start">
                    <ion-img :src="currentPokemon.sprites.front_default" :alt="currentPokemon.name" />
                </ion-thumbnail>
                <ion-label>{{ capitalizeFirstLetter(currentPokemon.name) }}</ion-label>
                <ion-label class="ion-float-end"> #{{ currentPokemon.id }} </ion-label>
            </ion-item>

            <ion-card-content>
                <ion-grid>
                    <ion-row>
                        <ion-col
                        class="ion-text-center bordered-col"
                        v-for="type in currentPokemon.types"
                        :key="type.slot"
                        >
                            {{ capitalizeFirstLetter(type.type.name) }}
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>

        <!-- <ion-card>
            <ion-row>
                <ion-col>
                    Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-label>
                    Pok&eacute;dex description
                </ion-label>
            </ion-row>
            <ion-row>
                <ion-col>
                    {{ currentPokemon.height * 10 }} cm
                </ion-col>
                <ion-col>
                    {{ currentPokemon.weight / 10 }} kg
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-label>Height</ion-label>
                </ion-col>
                <ion-col>
                    <ion-label>Weight</ion-label>
                </ion-col>
            </ion-row>
        </ion-card> -->
    </div>
    
</template>

<script>
import {
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonGrid,
    IonRow,
    IonCol

} from '@ionic/vue';
export default {
    components: {
        IonCard,
        IonCardContent,
        IonItem,
        IonLabel,
        IonThumbnail,
        IonImg,
        IonGrid,
        IonRow,
        IonCol
    },
    data () {
        return {
            currentPokemon: this.$store.state.pokemon
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
}
</script>