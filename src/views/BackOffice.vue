<template>
    <AjoutPlat/>
</template>

<script setup lang="ts">
import AjoutPlat from '@/components/AjoutPlat.vue'
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 12px;
    background-color: #6C9E41;
    margin: 1rem;
    padding: 1rem;
}

@media screen and (min-width: 600px) {
form {
    margin: 3.5rem;
}
}
</style>