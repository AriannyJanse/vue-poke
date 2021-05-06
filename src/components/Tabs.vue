<template>
    <ion-tabs>
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
}
</script>