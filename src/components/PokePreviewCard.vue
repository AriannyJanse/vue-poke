<template>
    <ion-card>
        <ion-img :src="sprite" alt="pokemon-sprite"></ion-img>
        <ion-card-header>
            <ion-card-title>{{ capitalizeFirstLetter(name) }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            <ion-grid>
                <ion-row>
                    <ion-col>Type</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col
                        v-for="type in types"
                        :key="type.slot"
                    > {{ capitalizeFirstLetter(type.type.name) }} </ion-col>
                </ion-row>
            </ion-grid>
            <hr>
            <ion-grid>
                <ion-row>
                    <ion-col>Height</ion-col>
                    <ion-col>Weight</ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>{{ height * 10 }} cm</ion-col>
                    <ion-col>{{ weight / 10 }} kg</ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
        <ion-button fill="outline" expand="block" > See More </ion-button>
    </ion-card>
</template>

<script>
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonButton,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/vue';

export default {
    props: ['name', 'types', 'height', 'weight', 'sprite'],
    components: {
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonImg,
        IonButton,
        IonGrid,
        IonRow,
        IonCol
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
    }
}
</script>

<style scoped>
    ion-col {
        text-align: center;
    }
    hr { 
        display: block;
        border-width: 0.5px;
        background-color: gray;
    } 
</style>