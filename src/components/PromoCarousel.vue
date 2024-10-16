<template>
    <div class="card">
        <h2>{{ titre }}</h2>
        <p class="description">{{ description }}</p>
        
        <Carousel :autoplay="5000" :wrap-around="true" :items-to-show="1">
            <Slide v-for="(image, index) in images" :key="index">
                <img 
                  :src="image"
                  @error="setDefaultImage(index)"
                  alt="Carousel image"
                  class="carousel__image"
                />
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import noImage from '../assets/Image_introuvable.png';

const props = defineProps({
    titre: String,
    description: String,
    images: Array
});

// Gestionnaire d'erreur pour remplacer l'image par une image par défaut
const setDefaultImage = (index: number) => {
    props.images[index] = noImage;
};
</script>

<style scoped lang="scss">
h2{
    text-align: center;
    margin: 5rem auto 1.5rem auto;
}

.description{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 10px 10px 20px 20px;
    gap: 1rem;
    padding-bottom: 1rem;
}

.description>p{
    width: 80%;
    text-align: center;
}

.carousel__image {
    max-width: 50%;
    width: 25rem;
    height: auto;
    object-fit: cover;
}
</style>