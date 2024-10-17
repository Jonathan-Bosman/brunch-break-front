<template>
  <form @submit.prevent="onSubmit">
    <div class="button"><span>⫯⫰⫯</span><span>Nombre de personnes</span><span>⫯⫰⫯</span></div>
    <div class="select visible hidden" v-if="capacite && capacite.length && capacite[0].nombre_personnes">
      <p v-if="isLoading">Chargement...</p>
      <p class="options" :class="{selectedOpt : nombrePresonnes===i+1}" v-for="(cap, i) in capacite[0].nombre_personnes" @click="nombrePresonnes=i+1">{{ i+1 }}</p>
    </div>
    <div class="button"><span>⫯⫰⫯</span><span>Sélectionner la date</span><span>⫯⫰⫯</span></div>
    <div class="visible hidden" v-if="capacite && capacite.length && capacite[0].nombre_personnes">
      <p v-if="isLoading">Chargement...</p>
      <VDatePicker :color="'orange'" @click="dateChange" v-model="date" />
    </div>
    <div class="button"><span>⫯⫰⫯</span><span>Sélectionner l'heure</span><span>⫯⫰⫯</span></div>
    <div class="form">
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
      <button type="submit">summit dammit</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const reservations = computed(() => store.getters.allReservations);
const capacite = computed(() => store.getters.allCapacite);
const horaires = computed(() => store.getters.allHoraires);
const isLoading = ref(true);
const nombrePresonnes = ref(1);
const date = ref(new Date());
const dateString = ref(`${date.value.getFullYear()}-${date.value.getMonth()}-${date.value.getDate()}`);
const day = ref(date.value.getDay());

const dateChange  = () => {
  dateString.value = `${date.value.getFullYear()}-${date.value.getMonth()}-${date.value.getDate()}`;
  day.value = date.value.getDay()===0?7:date.value.getDay();
}

const onSubmit = () => {
  console.log(nombrePresonnes.value);
  console.log(date.value.toString());
  console.log(dateString.value);
  console.log(day.value);
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

<style lang="scss">
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
}

.button {
  display: flex;
  justify-content: space-between;
  padding: 1px 1rem;
  margin-top: 1rem;
  align-items: center;
  width: 85%;
  color: #6C9E41;
  background-color: #fff;
  border: solid 2px #6C9E41;
  border-radius: 12px;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 12px;
    background-color: #6C9E41;
    width: 100%;
    max-width: 80%;
    min-width: 50%;
    margin: 1rem;
    padding: 1rem;
}

.form label {
    display: flex;
    width: 100%;
    color: white;
}

.form p {
    width: 50%;
}

.form input, .form button {
    width: 100%;
    border: none;
    border-radius: 12px;
}

.form button {
    width: auto;
    background-color: white;
    color: #6C9E41;
}

.select {
  height: 6rem;
  overflow-y: scroll;
  width: 100%;
  max-width: 80%;
  min-width: 50%;
}
  
.visible {
  display: flex;
  flex-direction: column;
}

// .hidden {
//   display: none;
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
}

.selectedOpt {
    color: white;
    background-color: #DE7B14;
}

.vc-day-content:hover {
  background-color: #6C9E41 !important;
  color: #FFF !important;
}

@media screen and (min-width: 600px) {
  form {
    margin: 3.5rem;
  }
  .select {
    height: 12rem;
  }
  .button {
    width: 80%;
  }
}
</style>

