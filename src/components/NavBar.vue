<template>
    <NavMenu class="hidden" :class="{displayed : isOpen===true}" @emitClose="fermeture" />
    <div class="navBar">
      <div v-if="isOpen===true" class="button" @click="fermeture">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
      </div>
      <div v-if="isOpen===false" class="button" @click="ouverture">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
      </div>
      <div class="logo">
      </div>
      <div class="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/></svg>
      </div>
    </div>
</template>
   
  
<script setup lang="ts">
import { ref } from 'vue';
import NavMenu from './NavMenu.vue';

const isOpen = ref(false);
const ouverture = () => {
  isOpen.value = true;
}
const fermeture = () => {
  isOpen.value = false;
}
</script>

<style scoped>
.navBar {
    height : 13vh;
    background-color: #FDF4D1;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    width : 5vh;
    height : 5vh;
    padding: 0;
    margin: auto 1.25rem;
    border: none;
    background-color: transparent;
}

.logo {
    width : 10vh;
    height : 100%;
    background-color: transparent;
    background-image: url("../assets/logo.png");
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
}

.hidden{
  display: none;
  position: fixed;
  top: 13vh;
  left: 0;
  z-index: 50;
}
.displayed{
  display: flex;
}
</style>