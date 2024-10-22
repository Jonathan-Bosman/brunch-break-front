<template>
    <form @submit.prevent="submit">
        <h2>Modifier la capacité</h2>
        <label for="nombre_personnes">
            <p>Capacité :</p>
            <input v-model="nombre_personnes" type="number" name="nombre_personnes" id="nombre_personnes">
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
    nombre_personnes: Number
});
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const id = ref(props.id);
const nombre_personnes = ref(props.nombre_personnes);
const submit = async () => {
    const capacite = {nombre_personnes: nombre_personnes.value}
    await store.dispatch('updateCapacite', { capacite: capacite, id: id.value, token: token.value });
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