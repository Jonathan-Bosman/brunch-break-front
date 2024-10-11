<template>
  <p v-if="isLoading">Chargement...</p>
  <MenuCard
    v-for="menu in menus"
    :id="menu.id"
    :nom="menu.nom"
    :description="menu.description"
    :prix="menu.prix"
    :url="'http://localhost:3000/uploads/'+menu.filename"
    />
</template>



<script setup lang="ts">
import MenuCard from '@/components/MenuCard.vue';
import { computed, onMounted, ref,  } from 'vue';

const menus = ref();
const isLoading = ref(true);

onMounted(async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/menu`);
        const allMenues = await res.json();
        menus.value = allMenues;
        isLoading.value = false;
        // const data = await Promise.(allMenues.results);
        // const menues = data.map(item => ({
        //   id: item.id,
        //   nom: item.nom,
        //   description: item.description,
        //   prix: item.prix
        // }));
      } catch(err) {
        console.error(err);
      }
});
</script>

<style scoped lang="scss">
</style>