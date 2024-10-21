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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const token = computed(() => store.getters.token);
const telephone = ref('');
const date_reservation = ref('');
const id_jour = ref(1);
const heure = ref(0);
const nombre_personnes = ref(1);
const submit = async () => {
    const formData = new FormData();
    formData.append('telephone', telephone.value || '');
    formData.append('date_reservation', date_reservation.value || '');
    formData.append('id_jour', id_jour.value.toString() || '1');
    formData.append('heure', heure.value.toString() || '0');
    formData.append('nombre_personnes', nombre_personnes.value.toString() || '');
    await store.dispatch('createReservation', { reservation: formData, token: token.value });
    telephone.value="";
    date_reservation.value="";
    id_jour.value=0;
    heure.value=0;
    nombre_personnes.value=1;
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
    width: 50%;
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