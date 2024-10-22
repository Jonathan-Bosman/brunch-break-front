<template>
    <form @submit.prevent="submit">
        <h2>Modifier une réservation</h2>
        <label for="telephone">
            <p>Téléphone :</p>
            <input v-model="telephone" type="tel" name="telephone" id="telephone">
        </label>
        <label for="email">
            <p>E-mail :</p>
            <input v-model="email" type="email" name="email" id="email">
        </label>
        <label for="year">
            <p>Année :</p>
            <input v-model="year" type="number" name="year" id="year">
        </label>
        <label for="month">
            <p>Mois :</p>
            <input v-model="month" type="number" name="month" id="month">
        </label>
        <label for="day">
            <p>Jour :</p>
            <input v-model="day" type="number" name="day" id="day">
        </label>
        <label for="id_jour">
            <p>Jour :</p>
            <select v-model="id_jour" name="id_jour" id="id_jour">
                <option :value=1>Lundi</option>
                <option :value=2>Mardi</option>
                <option :value=3>Mercredi</option>
                <option :value=4>Jeudi</option>
                <option :value=5>Vendredi</option>
                <option :value=6>Samedi</option>
                <option :value=7>Dimanche</option>
            </select>
        </label>
        <label for="heure">
            <p>Heure :</p>
            <input v-model="heure" type="number" name="heure" id="heure">
        </label>
        <label for="nombre_personnes">
            <p>Nombre de Personnes :</p>
            <input v-model="nombre_personnes" type="number" name="nombre_personnes" id="nombre_personnes">
        </label>
        <button type="submit">Modifier</button>
        <button @click.prevent="effacer">Effacer</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
    id: Number,
    telephone: String,
    email: String,
    date_reservation: String,
    id_jour: Number,
    heure: Number,
    nombre_personnes: Number
});
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const id = ref(props.id);
const telephone = ref(props.telephone);
const email = ref(props.email);
const year = ref(2024);
const month = ref(1);
const day = ref(1);
const date_reservation = ref(props.date_reservation);
const id_jour = ref(props.id_jour);
const heure = ref(props.heure);
const nombre_personnes = ref(props.nombre_personnes);
const submit = async () => {
    const reservation = {
    telephone: telephone.value,
    email: email.value,
    date_reservation: `${year.value}-${month.value.toString().padStart(2, '0')}-${day.value.toString().padStart(2, '0')}`,
    id_jour: id_jour.value,
    heure: heure.value,
    nombre_personnes: nombre_personnes.value,
  }
    await store.dispatch('updateReservation', { reservation: reservation, id: id.value, token: token.value });
    emit('emitChange');
    telephone.value="";
    email.value="";
    date_reservation.value= "";
    id_jour.value=0;
    heure.value=0;
    nombre_personnes.value=1;
}
const effacer = async () => {
    const confirmer = confirm(`Voulez vous effacer ${date_reservation.value} ?`);
    if(confirmer!==true)return;
    else await store.dispatch('deleteReservation', { id: id.value, token: token.value});
    emit('emitChange');
}
</script>

<style scoped lang="scss">
h2 {
    color: #FFF;
}
label {
    display: flex;
    width: 100%;
    color: white;
}
p {
    width: 30%;
}
.euroSign {
    width: auto;
}
input, button {
    width: 100%;
    border: none;
    border-radius: 12px;
}
button {
    width: auto;
    background-color: white;
    color: #6C9E41;
}
</style>