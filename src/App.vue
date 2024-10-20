<template>
  <div class="mainCtn">
    <NavBar/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
 *{
  margin: 0;
  font-family: Roboto, sans-serif;
}
h1, h2{
   font-family: Fredoka, sans-serif;
 }
 h2{
  font-size: 24px;
 }
 p{
  font-size: 20px;
 }

 .mainCtn {
  background-color: #FDF4D1;
 }
</style>
