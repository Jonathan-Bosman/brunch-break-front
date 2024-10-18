<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="isLoading">Chargement...</p>
    <PromoCarousel
      v-for="promotion in promotions"
      :titre="promotion.titre"
      :description="promotion.description"
      :images="promotion.images"
      />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';
import PromoCarousel from '@/components/PromoCarousel.vue';

const store = useStore();
const menus = computed(() => store.getters.allMenus);
const promotions = computed(() => store.getters.allPromotions);
const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch('fetchAllMenus');
  await store.dispatch('fetchAllPromotions');
  promotions.value.forEach(promotion => {
    promotion.images = [];
    const promo = JSON.parse(promotion.id_menu);
    promo.forEach(prom => {
      promotion.images.push(`http://localhost:3000/${menus.value[prom].filepath}`);
    });
  });
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
</style>