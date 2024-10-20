<template>
    <div class="wrapper" v-if="!isLoading && blog">
        <p>{{ blog[0].date.slice(0,10) }}</p>
        <h2>{{ blog[0].titre }}</h2>
        <div class="image">
            <img :src="'http://localhost:3000/uploads/'+blog[0].filename" alt="Image du post">
        </div>
        <pre>{{ blog[0].corps }}</pre>
    </div>
    <p v-else>Chargement...</p>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blog = computed(() => store.getters.oneBlog);
const id = window.location.href.split('/')[window.location.href.split('/').length-1];
const isLoading = ref(true);

onMounted(async () => {  
    await store.dispatch('fetchOneBlog', { id });
    console.log(blog.value);
    isLoading.value = false;
});
</script>

<style scoped lang="scss">
.wrapper{
    padding-top: 14vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 100%;
    width: 100%;
}
h2, p, pre {
    color: #000000;
    width: 90%;
    overflow-wrap: break-word;
    word-break: break-word;
    text-wrap: balance;
}
p {
    align-self: start;
}
h2 {
    font-family: Roboto, sans-serif;
    font-size: 25px;
    text-align: center;
}
.image {
    max-height: 25rem;
    width: 90%;
    border-radius: 12px;
    overflow: hidden;
}
img {
    border-radius: 12px;
}
</style>