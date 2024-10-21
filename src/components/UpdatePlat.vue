<template>
    <form @submit.prevent="submit">
        <h2>Modifier un plat</h2>
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
        <button type="submit">Modifier</button>
        <button @click.prevent="effacer">Effacer</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineProps } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    id: Number,
    nom: String,
    description: String,
    prix: Number
});

const store = useStore();
const token = computed(() => store.getters.token);
const selectedFile = ref();
const id = ref(props.id);
const nom = ref(props.nom);
const description = ref(props.description);
const prix = ref(props.prix/100);
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
const submit = async () => {
    const formData = new FormData();
    formData.append('nom', nom.value || '');
    formData.append('description', description.value || '');
    formData.append('prix', (prix.value * 100).toString());
    formData.append('image', selectedFile.value);
    await store.dispatch('updateMenu', { menu: formData, id: id.value, token: token.value });
    nom.value="";
    description.value="";
    prix.value=0;
    selectedFile.value=null;
}
const effacer = async () => {
    const confirmer = confirm(`Voulez vous effacer ${nom.value} ?`);
    if(confirmer!==true)return;
    else await store.dispatch('deleteMenu', { id: id.value, token: token.value});
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