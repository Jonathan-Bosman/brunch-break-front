<template>
  <div class="image">
    <img src="../assets/img-reservation.jpg" alt="">
  </div>
  <h2>Réservation</h2>
  <form @submit.prevent="onSubmit">
    <div class="button" @click="openPersonnes">
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
      <span>Nombre de personnes</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
    </div>
    <div class="select visible" :class="{hidden : isOpenPersonnes===false}" v-if="!isLoading && capacite && capacite.length && capacite[0].nombre_personnes">
      <p class="options" :class="{selectedOpt : nombrePersonnes===i+1}" v-for="(cap, i) in capacite[0].nombre_personnes" @click="nombrePersonnes=i+1">{{ i+1 }}</p>
    </div>
    <p v-else>Chargement...</p>
    <div class="button" @click="openDate">
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
      <span>Sélectionner la date</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
    </div>
    <div class="visible" :class="{hidden : isOpenDate===false}" v-if="!isLoading && capacite && capacite.length && capacite[0].nombre_personnes">
      <VDatePicker :color="'orange'" @click="dateChange" v-model="date" />
    </div>
    <p v-else>Chargement...</p>
    <div class="button" @click="openHeure">
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6C9E41"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
      <span>Sélectionner l'heure</span>
      <span><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M431.33-120v-230H498v82h342v66.67H498V-120h-66.67ZM120-201.33V-268h244.67v66.67H120Zm178-164v-81.34H120v-66.66h178V-596h66.67v230.67H298Zm133.33-81.34v-66.66H840v66.66H431.33Zm164-163.33v-230H662v81.33h178V-692H662v82h-66.67ZM120-692v-66.67h408.67V-692H120Z"/></svg></span>
    </div>
    <div class="select visible" :class="{hidden : isOpenHeure===false}" v-if="!isLoading && capacite && capacite.length && capacite[0].nombre_personnes">
      <p class="options" v-if="horairesJour.length>0" :class="{selectedOpt : heureChoisie===heure}" v-for="heure in horairesJour" @click="heureChoisie=heure">{{ Math.floor((heure)/100).toString().length<2?'0'+Math.floor((heure)/100).toString():Math.floor((heure)/100).toString() }}h{{ (heure-Math.floor((heure)/100)*100).toString().length<2?(heure-Math.floor((heure)/100)*100).toString()+'0':(heure-Math.floor((heure)/100)*100).toString() }}</p>
      <p class="options" v-else>Aucune horaire pour cette date.</p>
    </div>
    <p v-else>Chargement...</p>
    <div class="form">
      <label for="nom">
        <p>Nom :</p>
        <input v-model="nom" type="text" name="nom" id="nom">
      </label>
      <label for="prenom">
        <p>Prénom :</p>
        <input v-model="prenom" type="text" name="prenom" id="prenom">
      </label>
      <label for="email">
        <p>E-mail :</p>
        <input v-model="email" type="tel" name="email" id="email">
      </label>
      <label for="telephone">
        <p>Téléphone :</p>
        <input v-model="telephone" type="tel" name="telephone" id="telephone">
      </label>
      <label for="newsletter">
        <p class="checkBox">J'accepte d'être tenu informé des nouveautés :</p>
        <input v-model="newsletter" type="checkbox" name="newsletter" id="newsletter">
      </label>
      <label for="consent">
        <p class="checkBox">J'ai lu et consent à la <RouterLink to="/confidentialite">Politique de confidentialité</RouterLink> et aux <RouterLink to="/conditions">CGU</RouterLink>RouterLink> :</p>
        <input v-model="consent" type="checkbox" name="consent" id="consent">
      </label>
      <button :disabled="!consent" type="submit">RÉSERVER</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

const store = useStore();
const reservations = computed(() => store.getters.allReservations);
const capacite = computed(() => store.getters.allCapacite);
const horaires = computed(() => store.getters.allHoraires);
const isLoading = ref(true);
const isOpenPersonnes = ref(false);
const isOpenDate = ref(false);
const isOpenHeure = ref(false);
const nom = ref('');
const prenom = ref('');
const email = ref('');
const telephone = ref('');
const newsletter = ref(false);
const consent = ref(false);
const nombrePersonnes = ref(1);
const heureChoisie = ref(1200);
const date = ref(new Date());
const dateString = ref(`${date.value.getFullYear()}-${date.value.getMonth()}-${date.value.getDate()}`);
const day = ref(date.value.getDay());
const horairesJour = ref([]);

const openPersonnes = () => {
  isOpenPersonnes.value!==true?isOpenPersonnes.value=true:isOpenPersonnes.value=false;
}
const openDate = () => {
  isOpenDate.value!==true?isOpenDate.value=true:isOpenDate.value=false;
}
const openHeure = () => {
  isOpenHeure.value!==true?isOpenHeure.value=true:isOpenHeure.value=false;
}

const dateChange  = () => {
  if(date.value===null)date.value = new Date();
  dateString.value = `${date.value.getFullYear()}-${date.value.getMonth()}-${date.value.getDate()}`;
  day.value = date.value.getDay()===0?7:date.value.getDay();
  horairesJour.value = [];
  for (let index = horaires.value[day.value-1].ouverture_matin; index <= horaires.value[day.value-1].fermeture_matin; index+=100) {
    horairesJour.value.push(index);
    if((index+15-Math.floor((index)/100)*100)<60 && index+15<horaires.value[day.value-1].fermeture_matin) {
      horairesJour.value.push(index+15);
    }
    if((index+30-Math.floor((index)/100)*100)<60 && index+30<horaires.value[day.value-1].fermeture_matin) {
      horairesJour.value.push(index+30);
    }
    if((index+45-Math.floor((index)/100)*100)<60 && index+45<horaires.value[day.value-1].fermeture_matin) {
      horairesJour.value.push(index+45);
    }
  }
  for (let index = horaires.value[day.value-1].ouverture_soir; index <= horaires.value[day.value-1].fermeture_soir; index+=100) {
    horairesJour.value.push(index);
    if((index+15-Math.floor((index)/100)*100)<60 && index+15<horaires.value[day.value-1].fermeture_soir) {
      horairesJour.value.push(index+15);
    }
    if((index+30-Math.floor((index)/100)*100)<60 && index+30<horaires.value[day.value-1].fermeture_soir) {
      horairesJour.value.push(index+30);
    }
    if((index+45-Math.floor((index)/100)*100)<60 && index+45<horaires.value[day.value-1].fermeture_soir) {
      horairesJour.value.push(index+45);
    }
  }
}

const onSubmit = async () => {
  const utilisateur = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    telephone: telephone.value,
    newsletter: newsletter.value,
  }
  const reservation = {
    telephone: telephone.value,
    email: email.value,
    date_reservation: dateString.value,
    id_jour: day.value,
    heure: heureChoisie.value,
    nombre_personnes: nombrePersonnes.value,
  }
  await store.dispatch('createUtilisateur', { utilisateur: utilisateur });
  await store.dispatch('createReservation', { reservation: reservation });
  router.push('/');
}

onMounted(async () => {
  try {
    await store.dispatch('fetchAllReservations');
    await store.dispatch('fetchAllCapacite');
    await store.dispatch('fetchAllHoraires');
  } catch (error) {
    console.error('Erreur lors du chargement des données:', error);
  }
  isLoading.value = false;
});
</script>

<style lang="scss">
h2 {
  margin: 2rem;
  font-family: Roboto, sans-serif;
  color: #DE7B14;
  font-size: 25px;
  text-align: center;
}
.image{
  width: 100vw;
}
img {
  margin-top: 5vh;
  width: 100%;
}
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

.button>span:last-of-type {
  color: #fff;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 12px;
    background-color: #6C9E41;
    width: 100%;
    max-width: 85%;
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
    font-size: 16px;
}

.form p.checkBox {
    width: 100%;
}

.form input[type="checkbox"] {
    width: auto;
    border: none;
    border-radius: 12px;
}

.form input, .form button {
    width: 100%;
    border: none;
    border-radius: 12px;
}

.form button {
  width: 9rem;
  height: 3rem;
  font-size: 20px;
  background-color: white;
  color: #6C9E41;
}

.form button[disabled] {
  background-color: #E3CBCB;
}

.form button:not([disabled]), .form input[type="checkbox"], .button {
  cursor: pointer;
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

.hidden {
  display: none;
}

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
  img {
    margin-top: -25vh;
  }
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

