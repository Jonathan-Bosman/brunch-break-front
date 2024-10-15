<template>
    <form @submit.prevent="submit">
        <label for="nom">
            <p>Nom :</p>
            <input v-model="nom" type="text" name="nom" id="nom">
        </label>
        <label for="description">
            <p>Description :</p>
            <input v-model="description" type="text" name="description" id="description">
        </label>
        <label for="prix">
            <p>Prix :</p>
            <input v-model="prix" type="number" step="0.01" name="prix" id="prix">
            <p class="euroSign">€</p>
        </label>
        <label for="image">
            <p>Image :</p>
            <input type="file" @change="handleFileUpload" name="image" id="image">
        </label>
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const token = computed(() => store.getters.token);
const selectedFile = ref();
const nom = ref('');
const description = ref('');
const prix = ref(0);
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
const submit = async () => {
    const formData = new FormData();
    formData.append('nom', nom.value || '');
    formData.append('description', description.value || '');
    formData.append('prix', (prix.value * 100).toString());
    formData.append('image', selectedFile.value);
    await store.dispatch('createMenu', { menu: formData, token: token });
}
</script>

<style scoped lang="scss">
label {
    display: flex;
    width: 50%;
    color: white;
}
p {
    width: 30%;
}
.euroSign {
    width: auto;
}
input, #image, button {
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