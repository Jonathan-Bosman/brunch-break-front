<template>
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
import MenuCard from '@/components/MenuCard.vue';
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';

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
}
.telecharger{
  margin: 1.5rem auto;
  padding: 0.75rem 2rem;
  color: white;
  background-color: #6C9E41;
  border-radius: 15px;
}
</style>