<script setup>

const props = defineProps(['data'])
</script>


<template>
    <v-card class="card">
        <div class="illustration">
            <img src="../assets/img.jpg" alt="">
        </div>
        <div class="content">
            <h5>{{data.name}}</h5>
            <h2>{{data.numbers}}</h2>
        </div>
    </v-card>

</template>

<style scoped>
    .card {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
        width: 100%;
    }
    img {
        width: 50px;
        height: 50px;
    }
</style>