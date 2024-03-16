<template>
  <ULandingGrid>
    <PokemonItemList v-for="item in collection" :item="item" :key="item.id" />
  </ULandingGrid>
</template>

<script setup lang="ts">
const { data: collection } = await useFetch('http://localhost:4000/pokemons')
</script>
