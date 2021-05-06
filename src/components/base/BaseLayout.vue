<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <tabs v-if="this.$route.path.match(/\/pokemon\/.*/g)" />
            <slot />
        </ion-content>
    </ion-page>
</template>
<script>
import { 
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons
} from '@ionic/vue';
import Tabs from '../Tabs.vue';
export default {
    props: ['pageTitle', 'pageDefaultBackLink'],
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonBackButton,
        IonButtons,
        Tabs
    }
}
</script>