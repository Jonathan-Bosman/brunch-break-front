<template>
    <div class="wrapper">
        <div>
            <h2>NEWSLETTER</h2>
            <p>Pour ne rien manquer, inscrivez-vous à la newsletter</p>
            <form @submit.prevent="submit">
                <input v-model="email" type="email" name="email" id="email">
                <svg @click="submit" width="40px" height="40px" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.8859 28.7917H29.8852H7.11633C6.54297 28.7917 6.08769 28.6093 5.71687 28.25H6.16667H7.11633H29.8852C30.2798 28.25 30.6388 28.1182 30.9202 27.8368C31.2019 27.5551 31.3333 27.1954 31.3333 26.8003V10.6128V9.6884L30.5597 10.1944L18.5 18.0814L6.66667 10.3439V9.86271L18.2275 17.3776L18.5 17.5547L18.7725 17.3776L30.631 9.66922L31.5518 9.07067C31.7659 9.38821 31.8744 9.75977 31.875 10.2004V26.8019C31.875 27.3864 31.6843 27.8492 31.3077 28.2259C30.9311 28.6025 30.4689 28.7925 29.8859 28.7917ZM5.66667 27.75V28.1997C5.30842 27.8292 5.1259 27.3738 5.125 26.8V10.1997C5.125 9.75841 5.23331 9.38706 5.44754 9.07025L5.72407 9.25H5.66667V9.69004V10.6144V26.8019V27.75ZM6.6415 8.75H5.71852C6.09048 8.39124 6.54516 8.20924 7.11516 8.20833H29.8852C30.4564 8.20833 30.9108 8.39048 31.2816 8.75H30.3585H6.6415Z" fill="black" stroke="#DE7B14"/></svg>
            </form>
        </div>
        <div>
            <h2>Rejoignez nous !</h2>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="logo"></div>
            <h2>HORAIRES</h2>
            <p>Du Lundi au Vendredi 8h-21h</p>
            <p>Le Samedi et Dimanche 8h-23h</p>
            <div class="barre"></div>
            <div class="location"></div>
            <p>2 Boulevard Duval Paris 75000</p>
            <div class="barre"></div>
            <h2>LIENS</h2>
            <router-link class="link" to="/menu">Menu</router-link>
            <router-link class="link" to="/blog">Blog</router-link>
            <router-link class="link" to="/reservation">Réservation</router-link>
            <router-link class="link" to="/contact">Contact</router-link>
            <div class="barre"></div>
            <router-link class="link" to="/conditions">CGV</router-link>
            <router-link class="link" to="/mentions">Mentions légales</router-link>
            <router-link class="link" to="/confidentialite">Politique de confidentialité</router-link>
            <p>© 2024 Brunch Break</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const email = ref('Votre adresse email');
const submit = async () => {
    const utilisateur = {email: email.value}
    await store.dispatch('createUtilisateurNewsletter', { utilisateur: utilisateur });
    email.value = 'Merci';
}
</script>

<style scoped lang="scss">
.wrapper {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.5rem;
    color: #FFF;
    font-family: Roboto, sans-serif;
}

h2, p, .link, .link:visited {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 50%;
    color: #FFF;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    margin: 0;
    padding: 0;
}

p, .link, .link:visited {
    font-size: 18px;
}

.wrapper>div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    padding: 2rem 0;
}

.wrapper>div:first-of-type {
    background-color: #DE7B14;
}

.wrapper>div:first-of-type form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #FFF;
    border-radius: 12px;
    width: 70%;
    height: 2rem;
}

.wrapper>div:first-of-type form>input {
    color: #DE7B14;
    border: none;
}

.wrapper>div:nth-of-type(2) {
    background-color: #8CCAE0;
}

.wrapper>div:nth-of-type(2)>div {
    display: flex;
    justify-content: space-evenly;
    width: 60%;
}

.wrapper>div:nth-of-type(2)>div>div {
    background-image: url("../assets/tripadvisor.png");
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
}

.wrapper>div:nth-of-type(2)>div>div:first-of-type {
    background-image: url("../assets/instagram.png");
}

.wrapper>div:nth-of-type(2)>div>div:nth-of-type(3) {
    background-image: url("../assets/facebook.png");
}

.wrapper>div:nth-of-type(2)>div>div:last-of-type {
    background-image: url("../assets/tik-tok.png");
}

.wrapper>div:last-of-type {
    background-color: #C38837;
}

.wrapper>div:last-of-type>.logo {
    background-image: url("../assets/logo-blanc.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 7rem;
    height: 4rem;
    margin-top: 2rem;
}

.barre {
  background-color: #FFF;
  height: 2px;
  width: 80%;
}
</style>