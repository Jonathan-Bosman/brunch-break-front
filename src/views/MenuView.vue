<template>
  <h2>Nos recettes et boissons</h2>
  <div class="wrapper">
    <div class="telecharger" @click="">Télécharger pdf</div>
    <p v-if="isLoading">Chargement...</p>
    <MenuCard
      v-for="menu in menus"
      :id="menu.id"
      :nom="menu.nom"
      :description="menu.description"
      :prix="menu.prix"
      :url="'http://localhost:3000/uploads/'+menu.filename"
      />
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';
import MenuCard from '@/components/MenuCard.vue';

const store = useStore();
const menus = computed(() => store.getters.allMenus);
const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch('fetchAllMenus');
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12vh;
}
h2 {
  margin: 2rem;
  padding-top: 14vh;
  font-family: Roboto, sans-serif;
  color: #DE7B14;
  font-size: 25px;
  text-align: center;
}
.telecharger{
  margin: 1.5rem auto;
  padding: 0.75rem 2rem;
  color: white;
  background-color: #6C9E41;
  border-radius: 15px;
}
</style>