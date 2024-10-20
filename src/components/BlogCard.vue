<template>
    <div class='card'>
        <router-link class="link" :to="'/blog/'+id">
            <div class='imageWrapper'>
                <img :src="imageSrc" @error="imageLoadError" alt="Image du post" />
            </div>
            <div class='description'>
                <p>{{ date.slice(0, 10) }}</p>
                <p>{{ titre }}</p>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import noImage from '../assets/Image_introuvable.png';

const props = defineProps({
    id: Number,
    titre: String,
    date: String,
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
    max-width: 85%;
    min-width: 50%;
    border-radius: 20px;
    overflow: hidden;
    background-color: #FDF4D1;
}

h2{
    color: #6C9E41;
    text-align: center;
    margin: 1.5rem auto;
}

.description{
    display: flex;
    align-items: center;
    overflow: hidden;
    gap: 0.75rem;
    padding-bottom: 1rem;
    background-color: white;
}

.description>p{
    width: 80%;
    text-align: center;
}

.description>p:first-of-type, .description>p:first-of-type:visited{
    color: #6C9E41;
}

.description>p:last-of-type, .description>p:last-of-type:visited{
    color: #000;
}
.link {
    text-decoration: none;
}

.imageWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 12rem;
    overflow: hidden;
}

img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: block;
}

@media screen and (min-width: 600px) {
    .imageWrapper {
        max-height: 27rem;
    }
}
</style>