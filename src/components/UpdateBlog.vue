<template>
    <form @submit.prevent="submit">
        <h2>Modifier un post</h2>
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
    titre: String,
    corps: String
});
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const selectedFile = ref();
const id = ref(props.id);
const titre = ref(props.titre);
const corps = ref(props.corps);
const handleFileUpload = (event) => {
    selectedFile.value = event.target.files[0];
}
const submit = async () => {
    const formData = new FormData();
    formData.append('titre', titre.value || '');
    formData.append('corps', corps.value || '');
    formData.append('image', selectedFile.value);
    await store.dispatch('updateBlog', { blog: formData, id: id.value, token: token.value });
    emit('emitChange');
    titre.value="";
    corps.value="";
    selectedFile.value=null;
}
const effacer = async () => {
    const confirmer = confirm(`Voulez vous effacer ${titre.value} ?`);
    if(confirmer!==true)return;
    else await store.dispatch('deleteBlog', { id: id.value, token: token.value});
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