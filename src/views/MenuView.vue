<template>
  <div v-if="menu">
    <h2>{{ menu.nom }}</h2>
    <p>{{ menu.description }}</p>
    <p>Prix : {{ menu.prix }} €</p>
    <!-- Afficher l'image -->
    <img v-if="imageUrl" :src="imageUrl" alt="Image du plat" />
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';

// onMounted(async () => {
//     try{
//         const res = await fetch(`http://localhost:3000/api/menu`);
//         const allMenues = await res.json();
//         const data = await Promise.(allMenues);
//         const menues = data.map(item => ({
//           id: item.id,
//           nom: item.nom,
//           description: item.description,
//           prix: item.prix
//         }));
//       } catch(err) {
//         console.error(err);
//       }
// });
const menu = ref();
const imageUrl = ref();

onMounted(async () => {
  const imageId = 4; 
  try {
    const res = await fetch(`http://localhost:3000/api/menu/${imageId}`);
    if (res.ok) {
      const oneMenu = await res.json();
      const menuData = oneMenu.results[0];
      
      // Assigner les données du menu à la variable `menu`
      menu.value = menuData;

      // Construire l'URL de l'image
      const imagePath = `http://localhost:3000/uploads/${menuData.filename}`;
      
      // Stocker l'URL pour l'afficher dans le template
      imageUrl.value = imagePath;
    } else {
      console.error('Erreur lors de la récupération du menu');
    }
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
});
</script>

<style scoped lang="scss">
</style>