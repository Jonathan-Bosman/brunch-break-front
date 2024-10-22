<template>
    <form @submit.prevent="submit">
        <h2>Ajouter une promotion</h2>
        <label for="titre">
            <p>Titre :</p>
            <input v-model="titre" type="text" name="titre" id="titre">
        </label>
        <label for="description">
            <p>Description :</p>
            <input v-model="description" type="text" name="description" id="description">
        </label>
        <label for="image">
            <p>Image :</p>
            <input type="file" @change="handleFileUpload" name="image" id="image">
        </label>
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const selectedFile = ref();
const titre = ref('');
const description = ref('');
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
const submit = async () => {
    const formData = new FormData();
    formData.append('titre', titre.value || '');
    formData.append('description', description.value || '');
    formData.append('image', selectedFile.value);
    await store.dispatch('createPromotion', { promotion: formData, token: token.value });
    emit('emitChange');
    titre.value="";
    description.value="";
    selectedFile.value=null;
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