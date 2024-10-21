<template>
    <form @submit.prevent="submit">
        <h2>Ajouter un post</h2>
        <label for="titre">
            <p>Titre :</p>
            <input v-model="titre" type="text" name="titre" id="titre">
        </label>
        <label for="corps">
            <p>Corps :</p>
            <textarea v-model="corps" rows="10" type="text" name="corps" id="corps"></textarea>
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
const titre = ref('');
const corps = ref('');
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
const submit = async () => {
    const formData = new FormData();
    formData.append('titre', titre.value || '');
    formData.append('corps', corps.value || '');
    formData.append('image', selectedFile.value);
    await store.dispatch('createBlog', { blog: formData, token: token.value });
    titre.value="";
    corps.value="";
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