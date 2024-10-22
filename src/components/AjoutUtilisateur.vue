<template>
    <form @submit.prevent="submit">
        <h2>Ajouter un utilisateur</h2>
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
        <button type="submit">Ajouter</button>
    </form>
</template>

<script setup lang="ts">
import { computed, ref, defineEmits } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const emit = defineEmits(['emitChange']);

const token = computed(() => store.getters.token);
const nom = ref('');
const prenom = ref('');
const telephone = ref('');
const email = ref('');
const newsletter = ref(false);
const submit = async () => {
    const utilisateur = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    telephone: telephone.value,
    newsletter: newsletter.value
  }
    await store.dispatch('createUtilisateur', { utilisateur: utilisateur });
    emit('emitChange');
    nom.value="";
    prenom.value="";
    telephone.value="";
    email.value="";
    newsletter.value=false;
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