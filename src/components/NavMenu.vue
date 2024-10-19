<template>
    <div> 
        <router-link class="link" to="/" @click="close">Accueil</router-link>
        <router-link class="link" to="/menu" @click="close">Menu</router-link>
        <router-link class="link" to="/contact" @click="close">Contact</router-link>
        <router-link class="link" to="/" @click="close">Blog</router-link>
        <router-link class="link" to="/reservation" @click="close">Réservation</router-link>
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
    font-size: 36px;
    gap: 3rem;
    width: 100%;
    background-color: #FDF4D1;
    padding-top: 2.5rem;
    padding-bottom: 5rem;
}
.link{
    width: 100%;
    text-align: center;
    color: #6C9E41;
}
.link:hover{
    background-color: #EDE3BF;
}
p{
    align-self: start;
    margin: 0.5rem;
    cursor: pointer;
}
@media screen and (min-width: 600px) {
    div{
        width: 60%;
    }
}
</style>