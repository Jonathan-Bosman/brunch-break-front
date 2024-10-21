<template>
    <h2>Login</h2>
    <form @submit.prevent="submit">
        <label for="email">
            <p>E-mail :</p>
            <input v-model="email" type="email" name="email" id="email">
        </label>
        <label for="password">
            <p>Mot de passe :</p>
            <input v-model="password" type="password" name="password" id="password">
        </label>
        <button type="submit">Connection</button>
    </form>
</template>

<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const email = ref('');
const password = ref('');
const submit = async () => {
    const user = {email: email.value, password: password.value};
    console.log(user);
    await store.dispatch('login', { email: email.value, password: password.value });
    // router.push("/back-office");
}
</script>

<style scoped lang="scss">
h2 {
    color: #DE7B14;
    padding-top: 12vh;
}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 1rem;
    border-radius: 12px;
    background-color: #6C9E41;
    margin: 1rem auto;
    padding: 1rem;
}
label {
    display: flex;
    width: 50%;
    color: white;
}
p {
    width: 30%;
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