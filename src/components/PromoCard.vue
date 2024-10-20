<template>
    <div class='card'>
        <h2>{{ titre }}</h2>
        <p>{{ description }}</p>
        <div class='imageWrapper'>
            <router-link
                class="link"
                v-if="button!==''"
                :to="'/'+button">
                    {{ button==='menu'?'Découvrir':'Réserver' }}
            </router-link>
            <img :src="imageSrc" @error="imageLoadError" alt="Image du plat" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import noImage from '../assets/Image_introuvable.png';

const props = defineProps({
    titre: String,
    description: String,
    url: String,
    button: String
});

const imageSrc = ref(props.url);

const imageLoadError = (event) => {
    if (imageSrc.value !== noImage) {
        imageSrc.value = noImage;
    }
}
</script>

<style scoped lang="scss">
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 90%;
    min-width: 50%;
    padding-bottom: 1rem;
}

h2{
    color: #6C9E41;
    text-align: center;
    margin: 1.5rem auto;
}

p{
    width: 80%;
    text-align: center;
    color: #6C9E41;
}

.imageWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 15rem;
    overflow: hidden;
}

.link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #6C9E41;
    border-radius: 12px;
    padding: 1rem;
}

.link, .link:visited {
    color: #FFF;
    text-decoration: none;
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
}

@media screen and (min-width: 600px) {
    .imageWrapper {
        width: 90%;
        height: 100vh;
        max-height: 200vh;
    }
    img {
        width: 100%;
        display: block;
    }
}
</style>