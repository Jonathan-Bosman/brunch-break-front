<template>
    <form @submit.prevent="submit">
        <h2>Modifier une horaire</h2>
        <label for="ouverture_matin">
            <p>Ouverture matin :</p>
            <input v-model="ouverture_matin" type="number" max="2400" name="ouverture_matin" id="ouverture_matin">
        </label>
        <label for="fermeture_matin">
            <p>Fermeture matin :</p>
            <input v-model="fermeture_matin" type="number" max="2400" name="fermeture_matin" id="fermeture_matin">
        </label>
        <label for="ouverture_soir">
            <p>Ouverture soir :</p>
            <input v-model="ouverture_soir" type="number" max="2400" name="ouverture_soir" id="ouverture_soir">
        </label>
        <label for="fermeture_soir">
            <p>Fermeture soir :</p>
            <input v-model="fermeture_soir" type="number" max="2400" name="fermeture_soir" id="fermeture_soir">
        </label>
        <button type="submit">Modifier</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineProps, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
    id: Number,
    ouverture_matin: Number,
    fermeture_matin: Number,
    ouverture_soir: Number,
    fermeture_soir: Number
});
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const id = ref(props.id);
const ouverture_matin = ref(props.ouverture_matin);
const fermeture_matin = ref(props.fermeture_matin);
const ouverture_soir = ref(props.ouverture_soir);
const fermeture_soir = ref(props.fermeture_soir);
const submit = async () => {
    const horaires = {ouverture_matin: ouverture_matin.value, fermeture_matin: fermeture_matin.value, ouverture_soir: ouverture_soir.value, fermeture_soir: fermeture_soir.value}
    await store.dispatch('updateHoraires', { horaires: horaires, id: id.value, token: token.value });
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
input, button, textarea {
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