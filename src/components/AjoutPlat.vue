<template>
    <form @submit.prevent="submit">
        <label for="nom">nom :</label>
        <input v-model="nom" type="text" name="nom" id="nom">
        <label for="description">description :</label>
        <input v-model="description" type="text" name="description" id="description">
        <label for="prix">prix :</label>
        <input v-model="prix" type="number" name="prix" id="prix">
        <label for="image">image :</label>
        <input type="file" @change="handleFileUpload" name="image" id="image">
        <button type="submit">submit</button>
    </form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const selectedFile = ref();
const nom = ref()
const description = ref()
const prix = ref()
const menu = ref({
    nom: '',
    description: '',
    prix: 0
});
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
// TODO: mettre l'appel à l'api dans le store
const submit = async () => {
    const formData = new FormData();
    formData.append('nom', nom.value ? nom.value : '');
    formData.append('description', description.value ? description.value : '');
    formData.append('prix', prix.value ? prix.value : 0);
    formData.append('image', selectedFile.value);
    try {
        const response = await fetch(`http://localhost:3000/api/menu/create`, {
            method: 'POST',
            body: formData,
        });
    if (response.ok) {
        console.log('Image téléchargée avec succès');
    } else {
        console.error('Erreur lors du téléchargement de l\'image');
    }
    } catch (error) {
        console.error('Erreur lors de la requête :', error);
    }
}
</script>

<style scoped lan="scss">
/** TODO: CSS du formulaire */
*{
    background-color: chartreuse;
}
</style>