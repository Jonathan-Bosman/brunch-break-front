<template>
    <div>
    <h2>{{ nom }}</h2>
    <p>{{ description }}</p>
    <p>Prix : {{ prix }} €</p>
    <img :src="url" alt="Image du plat" />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
    nom: String,
    description: String,
    prix: Number,
    url: String
})
</script>

<style scoped lang="scss">
*{
    background-color: chartreuse;
}
</style>