<template>
  <form @submit.prevent="onSubmit">
    <div class="button"><span class="button">⫯⫰⫯</span><span>Nombre de personnes</span><span>⫯⫰⫯</span></div>
    <div class="select hidden" v-if="capacite && capacite.length && capacite[0].nombre_personnes">
      <p v-if="isLoading">Chargement...</p>
      <p class="options" :class="{selectedOpt : nombrePresonnes===i+1}" v-for="(cap, i) in capacite[0].nombre_personnes" @click="nombrePresonnes=i+1">{{ i+1 }}</p>
    </div>
    <label for="nom">
      <p>Nom :</p>
      <input type="text" name="nom" id="nom">
    </label>
    <label for="prenom">
      <p>Prénom :</p>
      <input type="text" name="prenom" id="prenom">
    </label>
    <label for="telephone">
      <p>Téléphone :</p>
      <input type="tel" name="telephone" id="telephone">
    </label>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const reservations = computed(() => store.getters.allReservations);
const capacite = computed(() => store.getters.allCapacite);
const horaires = computed(() => store.getters.allHoraires);
const isLoading = ref(true);
const nombrePresonnes = ref(1);

const onSubmit = () => {

}

onMounted(async () => {
  try {
    await store.dispatch('fetchAllReservations');
    await store.dispatch('fetchAllCapacite');
    await store.dispatch('fetchAllHoraires');
    console.log(reservations.value, capacite.value, horaires.value);
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 1rem;
    padding: 1rem;
}
.select {
  display: flex;
  flex-direction: column;
  height: 6rem;
  overflow-y: scroll;
  width: 100%;
  max-width: 80%;
  min-width: 50%;
}
// .hidden {
//   display: none;
// }
// .visible {
//   display: flex;
// }
.options {
  color: #DE7B14;
  background-color: white;
  text-align: center;
  cursor: pointer;
}
.options:hover {
  color: white;
  background-color: #6C9E41;
  ;
}
.selectedOpt {
  color: white;
  background-color: #DE7B14;
}

@media screen and (min-width: 600px) {
  form {
    margin: 3.5rem;
  }
  .select {
    height: 12rem;
  }
}
</style>