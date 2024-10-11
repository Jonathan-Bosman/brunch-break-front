<template>
  <div v-if="menu">
    <h2>{{ menu[0].nom }}</h2>
    <p>{{ menu[0].description }}</p>
    <p>Prix : {{ menu[0].prix }} €</p>
    <img :src="'http://localhost:3000/uploads/'+menu[0].filename" alt="Image du plat" />
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';

const menu = ref();

onMounted(async () => {
    try{
        const res = await fetch(`http://localhost:3000/api/menu`);
        const allMenues = await res.json();
        menu.value = allMenues;
        console.log(menu.value);
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