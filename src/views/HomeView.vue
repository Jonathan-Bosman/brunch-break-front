<template>
  <HeaderBrunch/>
  <div class="home">
    <PromoCard
      v-if="!isLoading && promotions.length > 0"
      :titre="promotions[0]?.titre"
      :description="promotions[0]?.description"
      :url="'http://localhost:3000/uploads/'+promotions[0]?.filename"
      :button="'reservation'"
      />
      <p v-else>Chargement...</p>
    <PromoCard
      v-if="promotions.length > 1"
      :titre="promotions[1]?.titre"
      :description="promotions[1]?.description"
      :url="'http://localhost:3000/uploads/'+promotions[1]?.filename"
      :button="'menu'"
      />
      <div class="histoire">
        <p>Notre histoire</p>
        <p>Brunch Break vous accueille au cœur de Paris pour partager notre passion du brunch.</p>
        <p>Dirigée par Romain Petit, notre équipe s'efforce de créer des moments mémorables autour de plats délicieux préparés avec des ingrédients frais et de qualité.</p>
        <p>Venez découvrir notre ambiance convivialeet nos créations culinaires!</p>
      </div>
      <PromoCard
      v-if="promotions.length > 2"
      :titre="promotions[2]?.titre"
      :description="promotions[2]?.description"
      :url="'http://localhost:3000/uploads/'+promotions[2]?.filename"
      :button="''"
      />
      <div class="actu">
        <div>
          <h2>Actualités</h2>
          <div class="image">
            <img src="../assets/pexels-enesfilm-8130687.jpg" alt="Ingrédients">
          </div>
        </div>
        <div>
          <p>Découvrez notre dernier article de blog !</p>
          <router-link class="link" to="/blog">Lire</router-link>
        </div>
      </div>
      <div class="barre"></div>
      <div class="brunchCard">
        <div class="logo"></div>
        <div>
          <h2>Brunch Break</h2>
          <p>★★★★★</p>
          <p>Avis Tripadvisor</p>
        </div>
      </div>
      <div class="tripCard">
        <div>
          <p>M</p>
          <div>
            <p>Marina D.</p>
            <p>★★★★★</p>
          </div>
          <div></div>
          <div class="tripImage"></div>
        </div>
        <div>
          <p>Brunch Break, c'est tout simplement LE spot incontournable à Paris!</p>
          <p>Je recommande vivement!</p>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref,  } from 'vue';
import { useStore } from 'vuex';
import PromoCard from '@/components/PromoCard.vue';
import HeaderBrunch from '@/components/HeaderBrunch.vue';

const store = useStore();
const promotions = computed(() => store.getters.allPromotions);
const isLoading = ref(true);

onMounted(async () => {
  await store.dispatch('fetchAllPromotions');
  isLoading.value = false;
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.histoire {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border-radius: 12px;
  overflow: hidden;
}

.histoire>p {
  text-align: center;
  color: #000;
  background-color: #FFF;
  width: 100%;
  height: auto;
  padding-bottom: 1rem;
}

.histoire>p:first-of-type {
  font-family: Fredoka, sans-serif;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #FFF;
  background-color: #8CCAE0;
  padding-top: 2rem;
}

.actu {
  display: flex;
  color: #6C9E41;
  width: 90%;
}

.actu>div {
  width: 50%;
}

.actu>div:last-of-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  height: auto;
  color: #000;
}

.link, .link:visited {
  padding: 0.75rem 1.25rem;
  color: #FFF;
  background-color: #6C9E41;
  border-radius: 12px;
}

.image {
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
}

img {
  border-radius: 12px;
}

.barre {
  background-color: #DE7B14;
  height: 2px;
  width: 80%;
  margin: 2.5rem 0;
}

.brunchCard {
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 80%;
}

.brunchCard .logo {
  background-image: url("../assets/logo.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25vw;
  width: 22vw;
}

.brunchCard>div:last-of-type {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  text-align: start;
  width: 50%;
}

.brunchCard>div:last-of-type>h2, .brunchCard>div:last-of-type>p {
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: start;
  color: #000;
}

.brunchCard>div:last-of-type>p:first-of-type {
  color: #DE7B14;
  font-size: 30px;
}

.tripCard {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;
  background-color: #FFF;
  border-radius: 12px;
  padding: 0.5rem;
  margin-top: 2rem;
}

.tripCard>div:first-of-type {
  display: flex;
  gap: 1rem;
}

.tripCard>div:first-of-type>p {
  display: flex;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-justify: center;
  color: #FFF;
  background-color: #6C9E41;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

.tripCard>div:first-of-type>div:first-of-type>p:last-of-type {
  font-size: 22px;
  color: #DE7B14;
}

.tripCard>div:first-of-type>div:nth-of-type(2) {
  width: 20%;
}

.tripCard .tripImage {
  background-image: url("../assets/tripadvisor.png");
  background-size: cover;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}

@media screen and (min-width: 600px) {
  .tripCard>div:first-of-type>div:nth-of-type(2) {
  width: 75%;
  }
}
</style>