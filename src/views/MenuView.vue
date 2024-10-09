<template>
    <img src="http://localhost:8080/7266c593-e598-46b2-ad47-ea16e240eae2">
</template>

<script setup lang="ts">
import { onMounted, ref,  } from 'vue';

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
const imageUrl = ref();

onMounted(async () => {
  const imageId = 4; 
  try {
    const response = await fetch(`http://localhost:3000/api/menu/4`);
    if (response.ok) {
      const blob = await response.blob();
      imageUrl.value = URL.createObjectURL(blob);
      console.log(imageUrl.value);
    } else {
      console.error('Erreur lors de la récupération de l\'image');
    }
  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }
});
</script>

<style scoped lang="scss">
</style>