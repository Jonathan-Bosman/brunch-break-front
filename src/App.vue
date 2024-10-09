<template>
  <div class="mainCtn">
    <NavBar/>
    <HeaderBrunch/>
    <CallToAction/>
   
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import HeaderBrunch from '@/components/HeaderBrunch.vue'
import CallToAction from './components/CallToAction.vue';

</script>

<style lang="scss"> 
 *{
  margin: 0;
 }

 .mainCtn {
  background-color: #FDF4D1;
 }
</style>
