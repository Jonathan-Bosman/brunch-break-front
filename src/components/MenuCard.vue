<template>
    <div class='card'>
        <h2>{{ nom }}</h2>
        <div class='description'>
            <div class='imageWrapper'>
                <img :src="imageSrc" @error="imageLoadError" alt="Image du plat" />
            </div>
            <p>Ingrédients :</p>
            <p>{{ description }}</p>
            <p class='prix'>Prix : {{ prix }} €</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import noImage from '../assets/Image_introuvable.png';

const props = defineProps({
    nom: String,
    description: String,
    prix: Number,
    url: String
});

const imageSrc = ref(props.url);

const imageLoadError = () => {
    if (imageSrc.value !== noImage) {
        imageSrc.value = noImage;
    }
}
</script>

<style scoped lang="scss">
.card{
    max-width: 90%;
    min-width: 50%;
}

h2{
    color: #6C9E41;
    text-align: center;
    margin: 1.5rem auto;
}

.description{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 10px 10px 20px 20px;
    gap: 1rem;
    padding-bottom: 1rem;
    background-color: white;
}

.description>p{
    width: 80%;
    text-align: center;
}

.prix{
    color: #DE7B14;
}

.imageWrapper{
    position: relative;
    height: 16rem;
    overflow: hidden;
    width: 100%;
}

img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

@media screen and (min-width: 600px) {
    .imageWrapper {
        height: 27rem;
    }
}
</style>