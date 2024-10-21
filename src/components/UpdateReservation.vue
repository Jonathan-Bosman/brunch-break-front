<template>
    <form @submit.prevent="submit">
        <h2>Ajouter une réservation</h2>
        <label for="telephone">
            <p>Téléphone :</p>
            <input v-model="telephone" type="tel" name="telephone" id="telephone">
        </label>
        <label for="date_reservation">
            <p>Date :</p>
            <input v-model="date_reservation" type="date" name="date_reservation" id="date_reservation">
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
            <input v-model="heure" type="number" step="15" name="heure" id="heure">
        </label>
        <label for="nombre_personnes">
            <p>Nombre de Personnes :</p>
            <input v-model="nombre_personnes" type="number" name="nombre_personnes" id="nombre_personnes">
        </label>
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    id: Number,
    telephone: String,
    date_reservation: String,
    id_jour: Number,
    heure: Number,
    nombre_personnes: Number
});

const store = useStore();
const token = computed(() => store.getters.token);
const id = ref(props.id);
const telephone = ref(props.telephone);
const date_reservation = ref(props.date_reservation);
const id_jour = ref(props.id_jour);
const heure = ref(props.heure);
const nombre_personnes = ref(props.nombre_personnes);
const submit = async () => {
    const formData = new FormData();
    formData.append('telephone', telephone.value || '');
    formData.append('date_reservation', date_reservation.value || '');
    formData.append('id_jour', id_jour.value.toString() || '1');
    formData.append('heure', heure.value.toString() || '0');
    formData.append('nombre_personnes', nombre_personnes.value.toString() || '');
    await store.dispatch('updateReservation', { reservation: formData, id: id.value, token: token.value });
    telephone.value="";
    date_reservation.value="";
    id_jour.value=0;
    heure.value=0;
    nombre_personnes.value=1;
}
const effacer = async () => {
    const confirmer = confirm(`Voulez vous effacer ${date_reservation.value} ?`);
    if(confirmer!==true)return;
    else await store.dispatch('deleteReservation', { id: id, token: token.value});
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