<template>
    <h2>Blog</h2>
    <div class="wrapper">
      <BlogCard
        v-if="!isLoading && blogs"
        v-for="blog in blogs"
        :id="blog.id"
        :titre="blog.titre"
        :date="blog.date"
        :url="'http://localhost:3000/uploads/'+blog.filename"
        />
        <p v-else>Chargement...</p>
    </div>
</template>
  
<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';
import BlogCard from '@/components/BlogCard.vue';

const store = useStore();
const blogs = computed(() => store.getters.allBlog);
const isLoading = ref(true);

onMounted(async () => {
await store.dispatch('fetchAllBlog');
isLoading.value = false;
});
</script>

<style scoped lang="scss">
.wrapper{
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
margin-top: 12vh;
}
h2 {
margin: auto 2rem;
padding-top: 14vh;
font-family: Roboto, sans-serif;
color: #DE7B14;
font-size: 25px;
text-align: center;
}
</style>