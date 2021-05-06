<template>
    <div v-if="isOnMoves">
        <h1>Moves</h1>
        <ion-card></ion-card>
    </div>
    
</template>

<script>
export default {
    methods: {
        
    },
    computed: {
        isOnMoves() {
            return this.$route.path == '/pokemon/moves' ? true : false;
        }
    }
}
</script>