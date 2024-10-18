<template>
    <NavMenu class="hidden" :class="{displayed : isOpen===true}" @emitClose="receiveClose" />
    <div class="navBar">
      <div class="button" @click="ouverture">
        <!-- Contenu du bouton -->
      </div>
      <div class="logo">
        <!-- Contenu du logo -->
      </div>
      <div class="search">
        <!-- Contenu de la barre de recherche -->
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
const receiveClose = () => {
  isOpen.value = false;
}
</script>

<style scoped>
.navBar {
    height : 10vh;
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
    width : 5vh;
    height : 5vh;
    background-color: #6C9E41;
    position: relative;
}

.logo {
    width : 15vh;
    height : 07vh;
    background-color: #6C9E41 ;
    position: relative;
} 

.search {
    width : 7vh;
    height : 5vh;
    background-color: #6C9E41  ;
    position: relative;
}
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh; /* Pour éviter de chevaucher la navbar */
  width: 105%;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
}

.image {
  width: 110%;
  height: 100%;
  object-fit: cover; /* Pour s'assurer que l'image prend toute la place disponible sans être déformée */
  border-bottom: 2px solid #6c9e41; /* Bordure entre l'image et le texte */
}


.text-overlay {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  background-color: #DE7B14; /* Couleur semi-transparente */
  padding: 03px;
  border-radius: 10px;
  text-align: center;
}

.text-box h2 {
  color: #DE7B14;
  margin: 0;
  font-family: 'Arial', sans-serif;
  font-size: 240px;
}

.text-box p {
  color: #faf6f9;
  margin: 5px 0 0 0;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
}

/* Barre de couleur avec texte */
.colored-bar {

  width: 100%;
  background-color: #FDF4D1; /* Couleur de la barre */
  text-align: center;
  color: #6C9E41;
  padding: 20px -0px;
  object-fit: cover; 
  margin: 0px 0 100px 0;
}

image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh; /* Pour éviter de chevaucher la navbar */
  width: 105%;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
}

.hidden{
  display: none;
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 50;
}
.displayed{
  display: flex;
}
</style>