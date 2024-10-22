<template>
    <form @submit.prevent="submit">
        <h2>Modifier un utilisateur</h2>
        <label for="nom">
            <p>Nom :</p>
            <input v-model="nom" type="text" name="nom" id="nom">
        </label>
        <label for="prenom">
            <p>Prénom :</p>
            <input v-model="prenom" type="text" name="prenom" id="prenom">
        </label>
        <label for="telephone">
            <p>Téléphone :</p>
            <input v-model="telephone" type="tel" name="telephone" id="telephone">
        </label>
        <label for="email">
            <p>E-mail :</p>
            <input v-model="email" type="email" name="email" id="email">
        </label>
        <label for="newsletter">
            <p>Newsletter :</p>
            <input v-model="newsletter" type="checkbox" name="newsletter" id="newsletter">
        </label>
        <label for="banni">
            <p>Banni :</p>
            <input v-model="banni" type="checkbox" name="banni" id="banni">
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
    nom: String,
    prenom: String,
    telephone: String,
    email: String,
    newsletter: Boolean,
    banni: Boolean
});
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const id = ref(props.id);
const nom = ref(props.nom);
const prenom = ref(props.prenom);
const telephone = ref(props.telephone);
const email = ref(props.email);
const newsletter = ref(props.newsletter);
const banni = ref(props.banni);
const submit = async () => {
    const utilisateur = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    telephone: telephone.value,
    newsletter: newsletter.value,
    banni: banni.value
  }
    await store.dispatch('updateUtilisateur', { utilisateur: utilisateur, id: id.value, token: token.value });
    emit('emitChange');
    nom.value="";
    prenom.value="";
    telephone.value="";
    email.value="";
    newsletter.value=false;
    banni.value=false;
}
const effacer = async () => {
    const confirmer = confirm(`Voulez vous effacer ${nom.value} ?`);
    if(confirmer!==true)return;
    else await store.dispatch('deleteUtilisateur', { id: id.value, token: token.value});
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