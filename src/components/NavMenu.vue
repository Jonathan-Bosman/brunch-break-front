<template>
    <div>
        <p @click="close">⨉</p>
        <router-link to="/" @click="close">Accueil</router-link>
        <router-link to="/menu" @click="close">Menu</router-link>
        <router-link to="/" @click="close">Contact</router-link>
        <router-link to="/" @click="close">Blog</router-link>
        <router-link to="/" @click="close">Réservation</router-link>
    </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['emitClose']);
const closed = false;
const close = () => {
    emit('emitClose', closed);
}
</script>

<style scoped lang="scss">
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    max-width: 50%;
    width: 18rem;
    background-color: white;
    border-radius: 12px;
    color: #DE7B14;
    padding-bottom: 2.5rem;
}
p{
    align-self: end;
    margin: 0.5rem;
    cursor: pointer;
}
</style>